import './globals.css'
import Navbar from '../components/Header/Navbar'
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>  
       <Navbar/>
    {children} 
    </>
  )
}
