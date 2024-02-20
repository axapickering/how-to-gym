import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import HomePageNavButtons from './HomePageNavButtons';

export default function Home() {

  return (
    <Box sx={{ minWidth: "95vw", minHeight: "90vh" }} mx={"auto"}>

      <Link underline="none" href="/guide">
        <Box className="rounded" borderRadius={10} textAlign={'center'} mx={'auto'} maxWidth={'60vw'} bgcolor={"#00BFFF"} my={10}>
          <Typography m={'auto'} fontSize={'5rem'} color={'black'}>Guide</Typography>
        </Box>
      </Link>

      <HomePageNavButtons />

    </Box>
  );
}

