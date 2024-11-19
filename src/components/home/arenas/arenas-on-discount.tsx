import { arenasOnDiscountData } from "../../../data/arenas-data";
import ArenaCard from "./arena-card";

const ArenasOnDiscount = () => {
    return (
        <div className="pl-4 md:pl-8 xl:pl-16">
            <h2 className="text-3xl font-semibold">Upcoming Matches</h2>

            <div className="flex gap-6 overflow-x-auto scrollbar-hidden pr-12">
                {arenasOnDiscountData.map((match, index) => (
                    <div key={index} className="flex-shrink-0">
                        <ArenaCard {...match} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ArenasOnDiscount;
