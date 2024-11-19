import { sportsTypeData } from "../../../data/sports-type";

const SportsType = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6">
            {sportsTypeData.map((sport, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center flex-col bg-white rounded-2xl py-6 w-[176px]"
                    style={{
                        boxShadow: "0px 7.41px 37.07px 0px #0000001F",
                    }}
                >
                    <img src={sport.img} alt={sport.title} />

                    <h3 className="text-xl font-medium text-[#6B6B6B] mt-4">
                        {sport.title}
                    </h3>
                </div>
            ))}
        </div>
    );
};
export default SportsType;
