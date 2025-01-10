import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch]= useCart();


    const handleAddToCart = () => {
        if(user && user.email){
            //send cart item to the Database
            
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res =>{
                const data = res.data;
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your Cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      //refetch cart to update the cart item count
                      refetch()
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  // send the user to the login page
                  navigate('/login', {state: {from: location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="card bg-base-100 h-full flex flex-col shadow">
                <figure>
                    <img
                        src={image}
                        alt="Image" />
                </figure>
                <p className="bg-slate-900 text-white py-1 px-2 w-fit absolute right-0 top-4 rounded-l-md">${price}</p>
                <div className="card-body flex flex-grow flex-col justify-between">
                    <h2 className="card-title">{name}</h2>
                    <p className="">{recipe}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-10 bg-slate-100 flex mx-auto">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;