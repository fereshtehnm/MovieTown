"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { GETMovieBySearch } from '@/api/movie/route';

export default function SearchBar() {
  const [name, setName] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (name.trim()) {
      const data = await GETMovieBySearch(name, 1);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4,
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-search"
        label="Search for a movie"
        variant="outlined"
        value={name}
        onChange={handleInputChange}
        sx={{
          width: '100%',
          maxWidth: '600px',
        }}
      />
      <Button variant="contained" type="submit" sx={{ marginLeft: 2 }}>
        Search
      </Button>
    </Box>
  );
}
