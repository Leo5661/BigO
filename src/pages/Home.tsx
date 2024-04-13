import { Link } from "react-router-dom"
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden text-foreground bg-background">
    <NavBar />
    <div className="flex flex-col flex-grow h-full justify-center items-center">
      <div className="">jai shree ram</div>
      <Link to="/taskA" className="border rounded-md px-4 py-2">Link A</Link>
      <Link to="/taskB" className="border rounded-md px-4 py-2">Link B</Link>
    </div>
  </div>
  )
}