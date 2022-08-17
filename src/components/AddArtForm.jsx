import React, { useState, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Button, Card, InputAdornment, Typography } from '@mui/material';

import { ArtContext } from '../contexts/ArtProvider';
import { required, float, maxDecimals2, positive, url, lengthMax50, lengthMax255 } from '../config/ValidationRules';

export default function AddArtForm() {
  const navigate = useNavigate();
  const { createOrUpdateArt } = useContext(ArtContext);
  const [title, setTitle] = useState('');
  const [material, setMaterial] = useState('');
  const [medium, setMedium] = useState('');
  const [size, setSize] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = useCallback(() => {
    createOrUpdateArt({ title, material, medium, size, image_url, price });
    navigate('/art');
  }, [title, material, medium, size, image_url, price, createOrUpdateArt]);

  return (
    <Card>
      <ValidatorForm onSubmit={handleSubmit}>
        <div className='flex flex-col m-4 space-y-4'>
          <Typography variant="h5" component="h5">Create new art</Typography>

          <TextValidator
            fullWidth
            variant="standard"
            label="Title"
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            validators={[required.rule, lengthMax255.rule]}
            errorMessages={[required.message, lengthMax255.message]}
            data-cy='art_title_input'
          />

          <TextValidator
            fullWidth
            variant="standard"
            label="Image URL"
            id='image'
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
            validators={[required.rule, url.rule]}
            errorMessages={[required.message, url.message]}
            data-cy='art_url_input'
          />

          <TextValidator
            fullWidth
            variant="standard"
            label="Price"
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>,
            }}
            id='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            validators={[required.rule, float.rule, maxDecimals2.rule, positive.rule]}
            errorMessages={[required.message, float.message, maxDecimals2.message, positive.message]}
            data-cy='art_price_input'
          />

          <TextValidator
            fullWidth
            variant="standard"
            label="Material"
            id='material'
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            validators={[required.rule, lengthMax50.rule]}
            errorMessages={[required.message, lengthMax50.message]}
            data-cy='art_material_input'
          />

          <TextValidator
            fullWidth
            variant="standard"
            label="Medium"
            id='medium'
            value={medium}
            onChange={(e) => setMedium(e.target.value)}
            validators={[required.rule, lengthMax50.rule]}
            errorMessages={[required.message, lengthMax50.message]}
            data-cy='art_medium_input'
          />

          <TextValidator
            fullWidth
            variant="standard"
            label="Size"
            id='size'
            value={size}
            onChange={(e) => setSize(e.target.value)}
            validators={[required.rule, lengthMax50.rule]}
            errorMessages={[required.message, lengthMax50.rule]}
            data-cy='art_size_input'
          />

          <Button type="submit" variant="contained" data-cy='art_submit_button'>Submit</Button>
        </div>
      </ValidatorForm>
    </Card>
  );
}