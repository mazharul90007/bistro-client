

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="my-6">
            <p className='text-amber-500 italic text-center text-sm mb-2'>---{subHeading}---</p>
            <h2 className='text-3xl font-semibold py-2 px-6 border-y-2 w-fit mx-auto mb-8 uppercase'>{heading}</h2>
        </div>
    );
};

export default SectionTitle; 