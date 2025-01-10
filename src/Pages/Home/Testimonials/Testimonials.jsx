import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [setReviews])
    return (
        <div className="my-16">
            <SectionTitle heading={'Testimonials'} subHeading={'What Our Cliens Say'}></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="mx-36 flex flex-col items-center gap-3">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="text-5xl py-5"><FaQuoteLeft /></p>
                                <p className="text-center">{review.details}</p>
                                <h3 className="text-2xl text-amber-500">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;