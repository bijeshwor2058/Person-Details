import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Header from './common/Header'
import Newperson from "./Component/Newperson"
import Retriveinfo from "./Component/Retriveinfo"
import Layout from "./Layout"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <Newperson />
        },
        {
          path: "/src/Component/Newperson.jsx",
          element: <Newperson />
        },
        {
          path: "/src/Component/Retriveinfo.jsx",
          element: <Retriveinfo />
        }
      ]
    }
  ])
  return (
    < RouterProvider router={router} />
  )
}
export default App
