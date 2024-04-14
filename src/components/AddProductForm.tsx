import { SubmitHandler, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { addProductSchema } from "@/validation-schema/addProductSchema"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useMutation } from "@tanstack/react-query"
import { addProduct } from "@/api/addProduct"
import { useAppDispatch } from "@/hooks/storeHook"
import { setProducts } from "@/redux/slices/ProductSlice"

type Props = {
    onClose: () => void
}

function AddProductForm({ onClose }: Props) {

    
    const dispatch = useAppDispatch();
    type ProductValue = z.infer<typeof addProductSchema>;
    const productForm = useForm<ProductValue>({
        resolver: zodResolver(addProductSchema),
        defaultValues: {
            title: "",
            description: "",
            price: 0
        }
    });

    const { mutateAsync } = useMutation({
        mutationFn: addProduct,
        onSuccess: (data) => {
            console.log("data after success", data)
            dispatch(setProducts(data));
            onClose();
        },

        onError: (error) => {
            console.log(error)
        }
    })
    const onSubmitHandler: SubmitHandler<ProductValue> = (values: ProductValue) =>  {
        console.log("Product details: ", values);
        mutateAsync(values);
      }

  return (
    <Form {...productForm}>
        <form onSubmit={productForm.handleSubmit(onSubmitHandler)} className="flex flex-col space-y-2">
            <FormField 
                control={productForm.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="Enter your product title" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField 
                control={productForm.control}
                name="price"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="Price" {...field} {...productForm.register("price", {valueAsNumber: true})}/>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <FormField 
                control={productForm.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea placeholder="Enter your product description" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />

            <div className="flex w-full pt-4"><Button type="submit" variant="default" className="w-full">Add Product</Button></div>
        </form>
    </Form>
  )
}

export default AddProductForm