
import "./home.css";
import Navbar from '../../../src/components/navbar/Navbar.jsx';
import Header from '../../../src/components/header/Header.jsx';
import Featured from '../../../src/components/featured/Featured.jsx';
import PropertyList from '../../../src/components/propertyList/PropertyList.jsx';
import FeaturedProperties from "../../featuredProperties/FeaturedProperties";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/footer/Footer";


const Home = () => {
    
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse bt property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />

            </div>
        </div>
    );
    
}

export default Home;

