import { Backdrop, Button, Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { required, lengthMax255, lengthMax50, isEmail } from './form/ValidationRules'
import { useRegister, useSession } from '../contexts/AuthProvider';
import { useNavigate } from "react-router";

export default function Register() {
    const navigate = useNavigate();
    const register = useRegister();
    const { loading, error } = useSession();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = useCallback(async () => {
        const success = await register({username, email, password});

        if (success)
            navigate('/');
    }, [username, email, password, register, navigate]);

    const handleClear = useCallback(() => {
        setUsername('');
        setEmail('');
        setPassword('');
    }, []);

    return <Card component='div' className='w-96'>
        <CardContent>
            <div className='flex justify-between items-center mb-8'>
                <Typography variant="h5" component="h5">
                    Register
                </Typography>
                <Typography color='error'>
                    {error}
                </Typography>
            </div>
            <ValidatorForm onSubmit={handleSubmit}>
                <div className='space-y-2'>
                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Username"
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        validators={[required.rule, lengthMax50.rule]}
                        errorMessages={[required.message, lengthMax50.message]}
                        data-cy='register_username_input'
                    />
                    <TextValidator
                        fullWidth
                        variant="standard"
                        label="Email"
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        validators={[required.rule, lengthMax255.rule, isEmail.rule]}
                        errorMessages={[required.message, lengthMax255.message, isEmail.message]}
                        data-cy='register_email_input'
                    />
                    <TextValidator
                        fullWidth
                        variant="standard"
                        type="password"
                        label="Password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        validators={[required.rule, lengthMax255.rule]}
                        errorMessages={[required.message, lengthMax255.message]}
                        data-cy='register_password_input'
                    />
                </div>

                <div className='flex justify-end space-x-4 mt-6'>
                    <Button type="submit" variant="contained" data-cy='register_submit_button'>Submit</Button>
                    <Button variant="contained" data-cy='register_clear_button' onClick={handleClear}>Clear</Button>
                </div>

            </ValidatorForm>
        </CardContent>
        <Backdrop open={loading}>
            <CircularProgress />
        </Backdrop>
    </Card>
}