

import { Outlet } from 'react-router-dom'
import './App.css'
import Navi from './component/navigate/navigate'



function App() {

  return (
    <>
    <Navi/>
    <Outlet/>
    </>
  )
}

export default App
