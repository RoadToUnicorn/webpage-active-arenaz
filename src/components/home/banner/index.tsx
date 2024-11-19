import { IoIosSearch } from "react-icons/io";
import { IMAGES_PATH } from "../../../constants/images-path";

const { background, logo } = IMAGES_PATH.banner;

const Banner = () => {
    return (
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
                                Join the Action.
                            </h1>
                            <p className="text-xl md:text-4xl font-medium text-white mt-2">
                                Book Your Next Game Today!
                            </p>
                        </div>

                        <div className="flex items-center justify-center mt-10 w-full">
                            <div className="flex items-center w-full max-w-xl bg-white rounded-2xl shadow-md">
                                <input
                                    type="text"
                                    placeholder="Search Arena"
                                    className="w-full py-3 md:py-5 px-4 rounded-l-2xl focus:outline-none"
                                />
                                <button className="p-2 pr-4 md:pr-6">
                                    <IoIosSearch
                                        size={24}
                                        className="text-[#8C8C8C]"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Banner;
