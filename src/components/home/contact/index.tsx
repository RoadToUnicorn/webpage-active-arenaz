import { FaPhoneAlt, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="bg-[#F8F9FA] relative z-10">
            <div className="px-4 md:px-8 xl:px-16 py-24">
                <div className="container-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* phone number */}
                    <div className="flex items-center">
                        <FaPhoneAlt className="text-2xl text-primary" />
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold">
                                Phone Number
                            </h2>
                            <p className="text-sm">+92-314-5505160</p>
                        </div>
                    </div>

                    {/* Website */}
                    <div className="flex items-center">
                        <FaGlobe className="text-2xl text-primary" />
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold">Website</h2>
                            <p className="text-sm">Active Arenaz (PVT) Ltd.</p>
                            <p className="text-sm">UIN: 0266482</p>
                        </div>
                    </div>

                    {/* Addresses */}
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-2xl text-primary" />
                        <div className="ml-4">
                            <h2 className="text-lg font-semibold">Addresses</h2>
                            <p className="text-sm">
                                Office No.6, Akbar Plaza, G-10 Markaz, Islamabad
                            </p>
                            <p className="text-sm mt-2">
                                1848, Street 61, Phase 3, Bahria Town, Islamabad
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
