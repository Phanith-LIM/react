import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { PageRoute, NavigationBar } from "./xcore";
import React from "react";

function App() {
    return (
        <div className="container mx-auto max-w-7xl">
            <BrowserRouter>
                <NavigationBar />
                <main>
                    <Routes>
                        {PageRoute.routeConfig.map((route, index) => (
                            <Route key={index} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
