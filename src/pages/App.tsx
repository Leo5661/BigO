import { ThemeProvider } from "../components/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import TaskA from "./TaskA"
import TaskB from "./TaskB"
import TaskAStep2 from "./TaskAStep2"
import { Provider } from "react-redux"
import { store } from "@/redux/store"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="bigO-ui-theme">
        <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="taskA" element={<TaskA />} />
          <Route path="taskB" element={<TaskB />} />
          <Route path="step2" element={<TaskAStep2 />} />
        </Routes>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
