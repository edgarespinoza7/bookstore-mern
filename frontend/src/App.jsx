import { Outlet } from 'react-router'
import './App.css'
import { Navbar } from './components/Navbar'

function App() {


  return (
    <>
    <Navbar/>
      <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6'>
        <Outlet />
      </main>
    </>
  )
}

export default App
