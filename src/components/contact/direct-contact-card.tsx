const data = [
    {
        title: "Phone No",
        subtitle: "+92-314-5505160",
    },
    {
        title: "Email",
        subtitle: "info@activearenaz.com",
    },
    {
        title: "Address",
        subtitle: "Phase 3 Bahria Town Islamabad, Pakistan",
    },
];

export default function DirectContactCard() {
    return (
        <div className="pt-8 bg-gray-200 lg:pt-10 xl:pt-12 2xl:pt-16 2xl:rounded-lg 2xl:border 2xl:border-gray-200 2xl:bg-white">
            <ul className="rounded-lg bg-gray-lightest px-10 py-10 xl:rounded-xl">
                {data.map((item) => (
                    <li key={item.title} className="pt-10 first:pt-0">
                        <h5 className="font-semibold">{item.title}</h5>
                        <p className="mt-2 !text-gray">{item.subtitle}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
