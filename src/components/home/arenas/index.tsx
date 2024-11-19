import ArenasOnDiscount from "./arenas-on-discount";
import LimitedSlotsLeft from "./limited-slots-left";
import SportsType from "./sports-type";
import UpcomingMatches from "./upcoming-matches";

const Arenas = () => {
    return (
        <div className="py-8">
            <SportsType />
            <UpcomingMatches />

            <div className="py-8 bg-gray-100">
                <ArenasOnDiscount />
            </div>

            <LimitedSlotsLeft />
        </div>
    );
};
export default Arenas;
