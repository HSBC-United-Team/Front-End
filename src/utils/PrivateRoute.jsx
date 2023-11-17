import { Navigate, Outlet } from "react-router-dom";
import { useUserInfo } from "../stores/useUserInfo";

function PrivateRoute() {
    const { user } = useUserInfo((state) => {
        return { user: state.user };
    });

    const isUserValid = Object.keys(user).length === 0 ? false : true;

    return isUserValid ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
