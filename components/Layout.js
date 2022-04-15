import Navbar from "./Navbar";
import Footer from "./Footer"

function Layout({ children }) {
    return (
        <main className="w-full min-h-screen overflow-hidden ">
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default Layout