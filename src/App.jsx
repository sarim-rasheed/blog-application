import Layout from './Layout'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { Login } from './components'


function App() {

  const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<Layout/>}>
        <Route path='/login' element = {<Login/>}/>
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
