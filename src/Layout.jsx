import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
const Layout = () => {
  return (
    <div>
        <Header />
        <main className="p-4">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout