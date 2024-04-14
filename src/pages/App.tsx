import { ThemeProvider } from "../components/theme-provider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Home from "./Home"
import TaskA from "./TaskA"
import TaskB from "./TaskB"
import TaskAStep2 from "./TaskAStep2"
import { Provider } from "react-redux"
import { store } from "@/redux/store"

const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      }
    }
  }
)

function App() {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
