import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
    return (
        <div className="App w-full h-full">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
