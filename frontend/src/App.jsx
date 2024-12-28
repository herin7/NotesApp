import React from "react"
import { BrowserRouter,Router,Route,Navigate, Routes } from "react-router-dom"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import ProtectedRoute from "./components/ProtectedRoutes"


function Logout() {
  localStorage.clear()
  return <Navigate to="/login" />
}
function RegisterAndLogout() {
  localStorage.clear()
  return <Register />
}




function App() {

  return (
    <>
        <BrowserRouter>
            <Routes> 
              <Route 
                  path="/"
                  element = {
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
              />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<RegisterAndLogout />} />
            <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
        
    </>
  )
}

export default App