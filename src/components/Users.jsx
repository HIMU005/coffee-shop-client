import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUserData = useLoaderData();
    console.log(loadedUserData);
    return (
        <div>

        </div>
    );
};

export default Users;