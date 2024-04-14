import { fetchProducts } from "@/api/fetchProducts";
import AddProductForm from "@/components/AddProductForm";
import { Item, ItemCard } from "@/components/ItemCard";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppSelector } from "@/hooks/storeHook";
import { useQuery } from "@tanstack/react-query";
import {PackagePlus} from "lucide-react";
import { useEffect, useState } from "react";

export default function TaskB() {

  const [open, setOpen] = useState(false);
  const productsList = useQuery({ queryKey: ['products'], queryFn: fetchProducts })
  const [products, setProducts] = useState<Item[]>([]);
  const addedProducts = useAppSelector((state) => state.rootReducer.product.products);
  
  useEffect(() => {
    if (productsList.isSuccess){
      const productsData = productsList.data.products;
      if (productsData) {
        setProducts(addedProducts.concat(productsData));
      }
    }
  }, [productsList, addedProducts]);

  if(productsList.isLoading){
    return (
      <div className="h-screen w-screen overflow-hidden text-foreground bg-background">
        <NavBar />
          <div className="flex flex-col flex-grow h-full justify-center items-center">
            <div className="overflow-hidden text-foreground bg-background animate-pulse">
              Fetching products...
            </div>
          </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen overflow-hidden text-foreground bg-background flex flex-col">
    <NavBar />
    <div className="flex flex-col flex-grow h-full items-start">
      <div className="flex flex-row justify-between items-center w-full px-4 md:px-10 my-8">
        <div className="text-2xl font-semibold">Product list</div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Add Product <PackagePlus className="ml-4" size={18}/></Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Add Product
              </DialogTitle>
              <DialogDescription>
                Add a new product to your inventory.
              </DialogDescription>
            </DialogHeader>
            <AddProductForm onClose={() => setOpen(false)}/>
          </DialogContent>
        </Dialog>
      </div>
      <ScrollArea className="flex flex-row flex-grow justify-center items-center p-8">
        <div className="flex flex-row flex-wrap justify-evenly gap-4">
        {products.map((product: Item, index: number) => (
          <ItemCard
          key={index}
          id={index}
          title={product.title}
          description={product.description}
          price={product.price}
          thumbnail={product.thumbnail}
          />
        ))}
        </div>
      </ScrollArea>
    </div>
  </div>
  )
}