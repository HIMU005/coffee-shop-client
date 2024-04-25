import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
    return (
        <div>
            <Nav />
            <Outlet />
        </div>
    );
};

export default Home;