import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { personalDetailsSchema } from "@/validation-schema/personalDetailsSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ChevronRight } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/storeHook";
import { setPersonalDetails } from "@/redux/slices/FormSlice";

export default function TaskA() {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const personalForm = useForm<z.infer<typeof personalDetailsSchema>>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      parentName: "",
      phoneNumber: "",
      address: "",
    },
  })

  function onSubmitHandler(values: z.infer<typeof personalDetailsSchema>) {
    dispatch(setPersonalDetails(values));
    navigate("/step2");
  }

  return (
    <div className="relative h-screen w-screen text-foreground bg-background overflow-hidden flex flex-col">
    <NavBar />
    <ScrollArea className="flex flex-col flex-grow justify-center items-center">
    <div className="flex flex-col md:p-16 justify-center items-center">
      <div className="text-2xl font-semibold text-foreground">Task Form</div>
      <div className="text-base font-light text-foreground/50">Fill the form to complete the process.</div>
      <div className="flex flex-col w-4/5 md:w-4/12 mt-8 border rounded-md p-8">
        <div className="text-lg font-semibold text-foreground/80">Personal Details</div>
        <Separator className="my-4"/>
        <Form {...personalForm}>
            <form onSubmit={personalForm.handleSubmit(onSubmitHandler)} className="space-y-4">
              <FormField
                control={personalForm.control}
                name="firstName"
                render={ ({ field }) =>
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Enter your first name" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                }
              />

              <FormField
                control={personalForm.control}
                name="lastName"
                render={ ({ field }) =>
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Enter your last name" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                }
              />

              <FormField
                control={personalForm.control}
                name="email"
                render={ ({ field }) =>
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                }
              />

              <FormField
                control={personalForm.control}
                name="phoneNumber"
                render={ ({ field }) =>
                  <FormItem>
                    <FormLabel>Mobile Number</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Enter your mobile number" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                }
              />

              <FormField
                control={personalForm.control}
                name="parentName"
                render={ ({ field }) =>
                  <FormItem>
                    <FormLabel>Parents Name</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="Enter your parent name" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                }
              />


              <FormField
                control={personalForm.control}
                name="address"
                render={ ({ field }) =>
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea className="h-32 mb-10" placeholder="Enter your address" {...field}/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                }
              />

              <div className="w-full flex flex-row justify-end">
                <Button type="submit" className="mt-8 items-center" variant="secondary">Next Step <ChevronRight /></Button>
              </div>
            </form>
        </Form>
      </div>
    </div>
    </ScrollArea>
  </div>
  )
}