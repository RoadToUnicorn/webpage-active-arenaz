import { IMAGES_PATH } from "../../../constants/images-path";

const {
    testimonials: { testimonial, logo },
} = IMAGES_PATH;

const Testimonials = () => {
    return (
        <div className="bg-[#262626] py-24 relative">
            <div className="absolute top-0 right-0 hidden lg:flex justify-center items-center">
                <img src={logo.image} alt={logo.alt} draggable={false} />
            </div>

            <div className="container-fluid">
                <h2 className="text-3xl md:text-5xl text-white font-semibold text-center">
                    Testimonials
                </h2>
                <p className="text-white text-center md:tracking-wider text-sx md:text-xl py-12">
                    Hear what sports athletes has to say about their experience
                </p>

                <div className="flex justify-center items-center">
                    <img
                        src={testimonial.image}
                        alt={testimonial.alt}
                        className="w-full"
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    );
};
export default Testimonials;
