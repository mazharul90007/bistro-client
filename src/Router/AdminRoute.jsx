import useAdmin from "../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({ children }) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="my-36 w-full flex justify-center">
            <progress className="progress w-56"></progress>
        </div>
    }
    if (user && isAdmin) {
        return children
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;