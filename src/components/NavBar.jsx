import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useLogout, useSession } from "../contexts/AuthProvider";

export default function Navbar() {
    const { isAuthed, user } = useSession();
    const logout = useLogout();

    const handleLogout = useCallback(() => {
        logout();
    }, [logout]);

    return <>
        <AppBar position='static'>
            <Toolbar className='flex justify-between'>
                <div>
                    <Link to="/"><Button variant="standard">Browse</Button></Link>
                    <Link to="/art"><Button variant="standard">Art</Button></Link>
                    <Link to="/jewelry"><Button variant="standard">Jewelry</Button></Link>
                </div>
                <div>
                    {isAuthed ? (
                        <Button variant="standard" onClick={handleLogout}>
                            Sign out
                        </Button>
                    ) : (
                        <>
                            <Link to="/login"><Button variant="standard">Login</Button></Link>
                            <Link to="/register"><Button variant="standard">Register</Button></Link>
                        </>
                    )}
                </div>
            </Toolbar>
        </AppBar >
    </>
};