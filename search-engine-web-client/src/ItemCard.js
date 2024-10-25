export default function ItemCard({ item }) {
    return (
        <div className="flex flex-col gap-4 items-center justify-center bg-white p-5">
            <img
                src={item.image}
                alt={item.name}
                className="w-48 h-48 object-contain"
            />
            <p className="text-lg font-bold text-black">${item.price}</p>
            <p className="text-lg text-black">{item.name}</p>
            <a
                href={item.link}
                target="_blank"
                className="bg-primary text-white px-6 py-2 rounded-full font-bold cursor-pointer"
            >
                View
            </a>
        </div>
    );
}
