import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
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
                <div className='mr-4'>
                    {isAuthed ? (
                        <div className='flex flex-col'>
                            <Typography component='a'>
                                {user?.username}
                            </Typography>

                            <MuiLink component={Link} to='#' variant='caption' color="main" underline="hover" onClick={handleLogout}>
                                Sign out
                            </MuiLink>
                        </div>
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