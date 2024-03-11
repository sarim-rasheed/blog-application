import Layout from './Layout'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'


function App() {

  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<Layout/>} >
      </Route>
    )
  )


return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
