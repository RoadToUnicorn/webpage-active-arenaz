import { DiscountFillWhite, FootballOutlinePrimary } from "../../icons";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaClock, FaUser } from "react-icons/fa";
import type { MatchType } from "../../../type";

const MatchCard = ({
    imgSrc,
    sportType,
    slotsFilled,
    totalSlots,
    matchTime,
    matchDate,
    arenaName,
    arenaPrice,
    discount,
}: MatchType) => {
    return (
        <div
            className="flex flex-col my-6 rounded-lg"
            style={{ boxShadow: "0px 5.6px 27.99px 0px #0000001F" }}
        >
            <div className="relative">
                <img
                    src={imgSrc}
                    alt={sportType}
                    className="w-full sm:w-[358px] h-32 object-cover rounded-t-lg"
                    draggable={false}
                />

                <div className="absolute top-0 left-0 right-0 p-4">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-1">
                            <div className="flex items-center py-1.5 px-2.5 bg-white rounded-full gap-1.5">
                                <FootballOutlinePrimary />
                                <span className="text-xs">{sportType}</span>
                            </div>

                            {discount && (
                                <div
                                    className="flex items-center py-1.5 px-2.5 text-white rounded-full gap-1"
                                    style={{
                                        background:
                                            "linear-gradient(96.23deg, #FF0117 12.09%, #FF2717 29.23%, #FF5317 52.11%, #FF7517 74.22%, #FF8E17 95.06%, #FF9D17 114.11%, #FFA217 129.73%)",
                                    }}
                                >
                                    <DiscountFillWhite />
                                    <span className="font-bold text-xs">
                                        20% OFF
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="p-3 bg-black/40 rounded-full hover:bg-black/60 cursor-pointer">
                            <IoShareSocialOutline className="text-white text-lg" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 bg-white rounded-b-lg border border-b">
                <div className="flex items-start justify-between">
                    <div>
                        <h3 className="text-xl font-medium">{arenaName}</h3>
                        <div className="mt-2 flex items-center gap-1">
                            <FaClock className="w-4 h-4 text-black" />
                            <span className="text-sm">{matchTime}</span>

                            <span className="text-[#949494] text-sm">
                                . {matchDate}
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center text-primary font-bold text-xl">
                            Rs {arenaPrice}
                        </div>

                        <div className="mt-2 flex items-center gap-2 text-black">
                            <FaUser className="w-4 h-4" />
                            <span className="text-sm">
                                {slotsFilled}/{totalSlots}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchCard;