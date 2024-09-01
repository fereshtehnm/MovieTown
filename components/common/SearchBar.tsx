"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  const [name, setName] = React.useState('');

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 4, // Add margin bottom to separate from movie cards
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-search"
        label="Search for a movie"
        variant="outlined"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
        sx={{
          width: '100%',
          maxWidth: '600px', // Limit the width of the search bar
        }}
      />
    </Box>
  );
}
