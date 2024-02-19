import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import HomePageNavButtons from './HomePageNavButtons';

export default function Home() {

  return (
    <Box sx={{ minWidth: "95vw", minHeight: "90vh"}} mx={"auto"}>

      <Box className="rounded" minHeight={300} bgcolor={"lavender"} my={10}>
        <Typography></Typography>
      </Box>

      <HomePageNavButtons/>

    </Box>
  );
}

