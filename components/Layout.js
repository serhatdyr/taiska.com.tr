import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="main">
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout