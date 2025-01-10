import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white py-16 px-24">
            <SectionTitle heading={'From Our Menu'} subHeading={'Check it out'}></SectionTitle>
            <div className="md:grid grid-cols-2 justify-center items-center  gap-8">
                <div className="col-span-1">
                    <img src={featuredImg} alt="" />
                </div>
                <div className="col-span-1">
                    <p>Aug 20, 2029</p>
                    <h3 className="uppercase text-xl">Where can i get some</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dolor quas laboriosam fugiat explicabo dolores neque ea officiis debitis non.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;