import { Home, Contact, About } from "./xcore";
import React from "react";

class Routes {
    static home: string = "/";
    static contact: string = "/contact";
    static about: string = "/about";

    static routeConfig = [
        {name: "Home", path: Routes.home, element: <Home /> },
        {name: "About", path: Routes.about, element: <About />},
        {name: "Contact", path: Routes.contact, element: <Contact />},
    ];
}

export default Routes;
