import { ThemeButton } from "./theme-button"
import { Link } from "react-router-dom"
function NavBar() {
  return (
      <nav className="w-full flex justify-between items-center p-6 md:py-6 md:px-16 bg-background text-foreground border-b drop-shadow-md">
          <Link to="/" className="text-2xl md:text-3xl font-bold text-foreground">&lt; BigO /&gt;</Link>
          <ThemeButton />
      </nav>
  )
}

export default NavBar