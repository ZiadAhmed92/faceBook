import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Home from './Components/Home/Home'
import Login from "./Components/Auth/Login"
import Register from "./Components/Auth/Register"
import NotFound from "./Components/NotFound/NotFound"
import Layout from "./Components/Layout/Layout"

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

let router = createBrowserRouter([
  {
   path: "/", element: <Layout />, children: [
      { path: "login", element: <Login /> },
      { index:true, element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ]
  }
])

function App() {


  return <RouterProvider router={router} />
}

export default App
