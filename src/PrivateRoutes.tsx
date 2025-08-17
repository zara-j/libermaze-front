import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "./store/use-auth-store"

const PrivateRoutes = () => {
    const id = useAuthStore((state) => state.id);
    if (!id) return <Navigate to = "/auth?mode=login" />;
    return <Outlet />
}

export default PrivateRoutes
