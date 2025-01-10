import PopularMenu from "./PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import ChefService from "./ChefService/ChefService";
import Contact from "../../Components/Contact";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ChefService></ChefService>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;