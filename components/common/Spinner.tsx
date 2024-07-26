import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Spinner() {
  return (
    <div  style={{ color: 'grey.500' ,  display: 'flex', justifyContent: 'center', alignItems:"center",  height: "80vh"}}>
      <CircularProgress color="inherit" />
    </div>
  );
}
