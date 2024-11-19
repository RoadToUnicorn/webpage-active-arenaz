import { upcomingMatchesData } from "../../../data/arenas-data";
import MatchCard from "./match-card";

const UpcomingMatches = () => {
    return (
        <div className="my-8 pl-4 md:pl-8 xl:pl-16">
            <h2 className="text-3xl font-semibold">Upcoming Matches</h2>

            <div className="flex gap-6 overflow-x-auto scrollbar-hidden pr-12">
                {upcomingMatchesData.map((match, index) => (
                    <div key={index} className="flex-shrink-0">
                        <MatchCard {...match} />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default UpcomingMatches;
