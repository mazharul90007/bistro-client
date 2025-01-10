import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';


const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soups = menu.filter(item => item.category === 'soup');
    const salads = menu.filter(item => item.category === 'salad');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const offers = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={menuImg} title={'Our Menu'}></Cover>

            {/* Main Cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>

              {/* Offered Menu Items */}
            <MenuCategory items={offers}></MenuCategory>

            {/* Dessert menu Items */}
            <MenuCategory items={desserts} title={"dessert"} coverImg={dessertImg}></MenuCategory>

            {/* Pizza menu Items */}
            <MenuCategory items={pizzas} title={"pizza"} coverImg={pizzaImg}></MenuCategory>

            {/* Salad menu Items */}
            <MenuCategory items={salads} title={"salad"} coverImg={saladImg}></MenuCategory>

            {/* Soup menu Items */}
            <MenuCategory items={soups} title={"soup"} coverImg={soupImg}></MenuCategory>

            
            
        </div>
    );
};

export default Menu;