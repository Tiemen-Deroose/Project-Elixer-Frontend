import { useMemo } from "react";
import { Navigate, useLocation } from "react-router";
import { useSession } from "../contexts/AuthProvider";

export const RequireAuth = ({ children, role }) => {
    const { isAuthed, hasRole } = useSession();
    const { pathname } = useLocation();

    const canShowRoute = useMemo(() => {
        if (!role) return isAuthed;
        return isAuthed && hasRole(role);
    }, [isAuthed, role, hasRole]);

    return canShowRoute ? children
        : <Navigate to="/login" state={{ from: pathname }} replace />
};