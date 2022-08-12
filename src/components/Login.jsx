import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Backdrop, Button, Card, CardContent, CircularProgress, Typography } from '@mui/material';

import { useLogin, useSession } from '../contexts/AuthProvider';

import { required, lengthMax255, isEmail } from './form/ValidationRules';

export default function Login() {
  const navigate = useNavigate();
  const login = useLogin();
  const { loading, error, isAuthed } = useSession();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAuthed)
      navigate('/');
  }, [isAuthed, navigate]);

  const handleSubmit = useCallback(async () => {
    const success = await login(email, password);

    if (success)
      navigate('/');
  }, [email, password, login, navigate]);

  const handleClear = useCallback(() => {
    setEmail('');
    setPassword('');
  }, []);

  return <Card component='div' className='w-96'>
    <CardContent>
      <div className='flex justify-between items-center mb-8'>
        <Typography variant="h5" component="h5">
          Sign in
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
            label="Email"
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            validators={[required.rule, lengthMax255.rule, isEmail.rule]}
            errorMessages={[required.message, lengthMax255.message, isEmail.message]}
            data-cy='login_email_input'
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
            data-cy='login_password_input'
          />
        </div>

        <div className='flex justify-end space-x-4 mt-6'>
          <Button type="submit" variant="contained" data-cy='login_submit_button'>Submit</Button>
          <Button variant="contained" data-cy='login_clear_button' onClick={handleClear}>Clear</Button>
        </div>

      </ValidatorForm>
    </CardContent>
    <Backdrop open={loading}>
      <CircularProgress />
    </Backdrop>
  </Card>;
}