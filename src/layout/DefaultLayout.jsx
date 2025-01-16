import Header from "~/layout/Header.jsx";
import Footer from "~/layout/Footer.jsx";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default DefaultLayout;