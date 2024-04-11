import NavBar from "@/components/navbar";

export default function TaskB() {
  return (
    <div className="h-screen w-screen overflow-hidden text-foreground bg-background">
    <NavBar />
    <div className="flex flex-col flex-grow h-full justify-center items-center">
      <div className="">Task two</div>
    </div>
  </div>
  )
}