import { BrowserRouter, Routes, Route } from "react-router-dom"
import DesignEditor from "../src/views/Dashboard"
import Dashboard from "../src/views/DesignEditor"
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/manage" element={<Dashboard />} />
        <Route path="/" element={<DesignEditor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
