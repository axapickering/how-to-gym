import Image from "next/image";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";

export default function Home() {
  return (
    <Box sx={{ minWidth: "95vw", minHeight: "90vh", margin: "auto" }}>
      <Link underline="hover"
        color="inherit"
        href="/overview"
      >
        <Typography>Overview</Typography>
      </Link>

      <Box className="rounded" minHeight={300} bgcolor={"lavender"} my={10}>

      </Box>

      <Grid container justifyContent={"center"}  textAlign={"center"} flexDirection="row" sx={{ mx: 'auto' }} alignContent="center" columnGap={{ xs: 2, md: 3 }} rowGap={1} columns={{ sm: 6, md: 12 }} >
        <Grid xs={5} bgcolor="yellow">
          <Typography fontSize={35}>This is one grid item</Typography>
        </Grid>
        <Grid xs={5} height={"5rem"} bgcolor={"red"}>
          <Typography fontSize={35}>This is another grid item</Typography>
        </Grid>
        <Grid xs={5} bgcolor={"green"}>
          <Typography fontSize={35}>This is a third grid item</Typography>
        </Grid>
        <Grid xs={5} height={"5rem"} bgcolor={"purple"}>
          <Typography fontSize={35}>This is a fourth grid item</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
