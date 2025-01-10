
const MenuItem = ({item}) => {
   const {image, name, price, recipe} = item;
    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-gray-600">{name} ------------</h3>
                <p className="text-gray-400">{recipe}</p>
            </div>
            <p className="text-amber-500">${price}</p>
        </div>
    );
};

export default MenuItem;