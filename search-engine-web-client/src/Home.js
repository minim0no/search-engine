import { useState } from "react";

export default function Home() {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
    };

    return (
        <div className="w-full h-full flex flex-col gap-20 justify-center items-center">
            {/* <img src="/heb-logo.png" alt="logo" className="w-[400px]" /> */}
            <div className="flex justify-center items-center gap-6 bg-primary p-5 rounded-full">
                <select className="py-2 pl-3 rounded-full text-primary font-bold">
                    <option value="fruit-vegetable">Fruits & Vegetables</option>
                    <option value="bakery">Bakery</option>
                    <option value="home-outdoor">Home & Outdoor</option>
                    <option value="health">Health</option>
                </select>

                <input
                    type="text"
                    placeholder="Search for products"
                    value={query}
                    onChange={handleChange}
                    className="py-2 pl-3 rounded-full text-primary placeholder-primary placeholder-opacity-30 font-bold w-[600px]"
                />
            </div>
        </div>
    );
}
