import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import HomePageNavButtons from './HomePageNavButtons';

export default function Home() {

  return (
    <Box sx={{ minWidth: "95vw", minHeight: "90vh"}} mx={"auto"}>

      <Link underline="hover" color="inherit" href="/overview">
        <Typography height={2}>Overview</Typography>
      </Link>

      <Box className="rounded" minHeight={300} bgcolor={"lavender"} my={10}>
        <Typography></Typography>
      </Box>

      <HomePageNavButtons/>

    </Box>
  );
}
