import React from "react";
import {Navbar} from "flowbite-react";
import {NavLink, useLocation} from "react-router-dom";
import {PageRoute} from "../xcore";

const NavigationBar: React.FC = () => {
    const location = useLocation();
    return (
        <Navbar fluid rounded className="bg-gray-100">
            <Navbar.Brand href="https://phanithlim.netlify.app">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/2922/2922518.png"
                    className="mr-3 h-6 sm:h-9"
                    alt="PhanithLIM Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                     PhanithLIM
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                {PageRoute.routeConfig.map((route, index) => (
                    <Navbar.Link key={index} as={NavLink} to={route.path} active={route.path === location.pathname} >
                        {route.name}
                    </Navbar.Link>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
