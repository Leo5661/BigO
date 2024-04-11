import { ThemeProvider } from "../components/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import TaskA from "./TaskA"
import TaskB from "./TaskB"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="bigO-ui-theme">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="taska" element={<TaskA />} />
          <Route path="taskb" element={<TaskB />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
