import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useFieldArray, useForm, SubmitHandler} from "react-hook-form";
import { Trash2Icon, UserRoundPlusIcon, SendIcon} from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { familySchema } from "@/validation-schema/familySchema";
import { z } from "zod";
import { useAppDispatch, useAppSelector } from "@/hooks/storeHook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setFamilyDetails } from "@/redux/slices/FormSlice";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Details from "@/components/Details";

export default function TaskAStep2() {

  type FamilyFormValues = z.infer<typeof familySchema>;
  const personalDetails = useAppSelector((state)=> state.rootReducer.form.personalDetails);
  const familyDetails = useAppSelector((state)=> state.rootReducer.form.familyDetails);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const familyForm = useForm<FamilyFormValues>({
    resolver: zodResolver(familySchema),
    defaultValues: {
      familyArray:[{
          memberName: "",
          relation: "",
    }] }
  })

  const {control, handleSubmit, register, formState: {errors}} = familyForm;

  const {fields, append, remove} = useFieldArray<FamilyFormValues>({
    name: "familyArray",
    control: control,
  })

  useEffect(() => {
    if(!personalDetails) {
       navigate("/taskA");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personalDetails, familyDetails])

  function onAddMemberHandler() {
    append({
      memberName: "",
      relation: ""
    })
  }

  function onRemoveMemberHandler(index: number) {
    remove(index)
  }

  const onSubmitHandler: SubmitHandler<FamilyFormValues>  = (values: FamilyFormValues) => {
    console.log(values)
    dispatch(setFamilyDetails(values.familyArray));
  }

  return (
    <div className="relative h-screen w-screen text-foreground bg-background overflow-hidden flex flex-col">
    <NavBar />
    <ScrollArea className="flex flex-col flex-grow justify-center items-center">
    <div className="flex flex-col md:p-16 justify-center items-center">
      <div className="text-2xl font-semibold text-foreground">Task Form</div>
      <div className="text-base font-light text-foreground/50">Fill the form to complete the process.</div>
      <div className="flex flex-col w-4/5 md:w-4/12 mt-8 border rounded-md p-8">
        <div className="flex flex-row justify-between">
          <div className="text-lg font-semibold text-foreground/80">Family Details</div>
          <Button onClick={onAddMemberHandler} variant="outline" className="p-2">Add Member <UserRoundPlusIcon className="ml-2" size={20}/></Button>
        </div>
        <Separator className="my-4"/>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
              {
              fields.map((field, index: number) => (
                <div className="border rounded p-3 flex flex-row items-end" key={field.id}>
                  <div className="flex flex-col flex-grow space-y-2">
                    <Input type="text" className="rounded-sm" placeholder="Family member name" {...register(`familyArray.${index}.memberName` as const)}/>
                    <Input type="text" className="rounded-sm" placeholder="Relation" {...register(`familyArray.${index}.relation` as const)}/>
                    {
                      errors.familyArray && errors.familyArray[index] &&
                      <p className="text-red-500 font-thin text-sm">{errors.familyArray[index]?.memberName?.message || errors.familyArray[index]?.relation?.message}</p>
                    }
                  </div>
                  <Separator orientation="vertical" className="mx-4"/>
                  <Button variant="destructive" size="icon" disabled={index === 0} onClick={() => onRemoveMemberHandler(index)}><Trash2Icon size={20}/></Button>
                </div>
              ))
              }
              <div className="w-full flex flex-row justify-end">
                <Dialog>
                  <DialogTrigger>
                    <Button type="submit" className="mt-8 items-center" variant="secondary">Submit<SendIcon className="ml-2" size={15}/></Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <div className="text-2xl font-semibold text-foreground">Task Form Submitted</div>
                        <div className="text-base font-light text-foreground/50">Thank you for completing the form.</div>
                      </DialogTitle>
                      <Details />
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            </form>
      </div>
    </div>
    </ScrollArea>
  </div>
  )
}