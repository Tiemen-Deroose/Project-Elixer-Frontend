import { Navigate, useLocation } from "react-router";
import { useSession } from "../contexts/AuthProvider";

export const RequireAuth = ({ children }) => {
    const { isAuthed } = useSession();
    const { pathname } = useLocation();

    if (isAuthed)
        return children;

    return <Navigate to="/login" state={{ from: pathname }} replace />;

};