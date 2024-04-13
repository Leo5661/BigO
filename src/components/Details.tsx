import { useAppSelector } from "@/hooks/storeHook";
import { Separator } from "./ui/separator";

function Details() {

    const personalDetails = useAppSelector((state)=> state.rootReducer.form.personalDetails);
    const familyDetails = useAppSelector((state)=> state.rootReducer.form.familyDetails);

  return (
    <div className="w-full h-full flex flex-col justify-center items-start">
        <div className="flex flex-col w-full mt-8 border rounded-md p-4 space-y-4">
            <div className="text-xl font-semibold text-foreground">Personal Details</div>
            <Separator className="my-4"/>
            <div>
                <div className="text-base font-light text-foreground/50"><span className="font-semibold">Name:</span> {personalDetails?.firstName + " " + personalDetails?.lastName}</div>
                <div className="text-base font-light text-foreground/50"><span className="font-semibold">Email:</span> {personalDetails?.email}</div>
                <div className="text-base font-light text-foreground/50"><span className="font-semibold">Phone:</span> {personalDetails?.phoneNumber}</div>
                <div className="text-base font-light text-foreground/50"><span className="font-semibold">Parent Name:</span> {personalDetails?.parentName}</div>
                <div className="text-base font-light text-foreground/50"><span className="font-semibold">Address:</span> {personalDetails?.address}</div>
            </div>
        </div> 
        <div className="flex flex-col w-full mt-8 border rounded-md p-4 space-y-4">
            <div className="text-xl font-semibold text-foreground">Family Details</div>
            <Separator className="my-4"/>
                {
                  familyDetails.map((member, index) => {
                    return (
                      <div key={index} className="flex flex-col space-y-3 rounded border p-4">
                        <div className="text-base font-light text-foreground/50"><span className="font-semibold">Member Name:</span> {member?.memberName}</div>
                        <div className="text-base font-light text-foreground/50"><span className="font-semibold">Relation:</span> {member?.relation}</div>
                      </div>
                    )
                  })
                }    
        </div> 
    </div>
  )
}

export default Details