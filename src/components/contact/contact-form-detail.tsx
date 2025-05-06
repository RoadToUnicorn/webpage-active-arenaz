import DirectContactCard from "./direct-contact-card";
import Contact from "./contact";

import { IMAGES_PATH } from "../../constants/images-path";

const { background, logo } = IMAGES_PATH.banner;

const ContactFormDetail = () => {
    return (
        <>
            <div className="w-full min-h-[26rem] max-h-[424px]">
                <div className="absolute inset-0">
                    <div className="relative">
                        <div className="relative">
                            <img
                                src={background.image}
                                alt={background.alt}
                                className="w-full min-w-[320px] min-h-[26rem] max-h-[424px] object-cover object-center"
                                draggable={false}
                            />
                            <div className="absolute inset-0 custom-radial-gradient-bg min-w-[320px]"></div>
                        </div>

                        <div className="absolute min-w-[320px] inset-0 flex items-center justify-center flex-col">
                            <img
                                src={logo.image}
                                alt={logo.alt}
                                draggable={false}
                                className="mt-40"
                            />

                            <div className="text-center mt-8">
                                <h1 className="text-3xl md:text-6xl font-semibold text-white">
                                    Get in Touch
                                </h1>
                                <p className="text-xl md:text-4xl font-medium text-white mt-2">
                                    We’re here to help you
                                </p>
                            </div>

                            <div className="mt-10" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-12" />

            <div className="container-fluid w-full !max-w-[1248px] grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-[1fr_0.5fr] pt-9 2xl:p-12 2xl:rounded-lg 2xl:border 2xl:border-gray-200 2xl:bg-white">
                <Contact />
                <DirectContactCard />
            </div>
        </>
    );
};
export default ContactFormDetail;
