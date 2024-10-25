import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

export default function Home() {
    const [query, setQuery] = useState("");
    const [items, setItems] = useState([]);

    useEffect(() => {
        const newItems = [];

        for (let i = 0; i < 5; i++) {
            newItems.push({
                name: "Apple",
                price: 2.99,
                image: "https://images.heb.com/is/image/HEBGrocery/prd-small/003559071.jpg",
                link: "https://www.heb.com/apple",
            });
        }

        setItems(newItems);
    }, []);

    const handleChange = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Searching for", query);
    };

    return (
        <div className="w-full h-full">
            <div className="h-[75vh] flex flex-col gap-40 justify-center items-center">
                <img src="/heb-logo.png" alt="logo" className="w-[400px]" />
                <div className="flex justify-center items-center gap-6 bg-primary p-5 rounded-full">
                    <select className="py-2 pl-3 rounded-full text-primary font-bold">
                        <option value="fruit-vegetable">
                            Fruits & Vegetables
                        </option>
                        <option value="bakery">Bakery</option>
                        <option value="home-outdoor">Home & Outdoor</option>
                        <option value="health">Health</option>
                    </select>

                    <div className="relative">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Search for products!"
                                value={query}
                                onChange={handleChange}
                                className="py-2 pl-3 pr-10 rounded-full text-primary placeholder-primary placeholder-opacity-30 font-bold w-[600px]"
                            />
                            <button type="submit">
                                <img
                                    src="/search-icon.svg"
                                    alt="search"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-10 justify-center items-center mx-24">
                {items.map((item, index) => (
                    <ItemCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
