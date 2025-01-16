import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const {name, category, recipe, price, _id} = useLoaderData();
    const { register, handleSubmit, reset } = useForm()
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data);
        //image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            //now send the menu item data to the server with the image
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            //
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                //show success popup
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is Updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }

    return (
        <div>
            <SectionTitle heading='Update an Item' subHeading={'Update Info'}></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            defaultValue={name}
                            {...register('name', { required: true })}
                            className="input input-bordered w-full" />
                    </label>
                    <div className="flex gap-6">
                        {/* category */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value='default'>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="desert">Desert</option>
                                <option value="drinks">Drinks</option>

                            </select>
                        </label>

                        {/* price */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input
                                type="Number"
                                step={'any'}
                                placeholder="Price"
                                defaultValue={price}
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </label>

                    </div>
                    {/* Recipe Details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea
                            className="textarea textarea-bordered h-24"
                            placeholder="Item Recipe"
                            defaultValue={recipe}
                            {...register('recipe')}
                        >
                        </textarea>
                    </label>
                    <div className="my-6">
                        <input
                            type="file"
                            className="file-input w-full"
                            {...register('image')}
                        />
                    </div>
                    <button className="btn">Update Item</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;