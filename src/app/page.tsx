import Image from "next/image";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <main>
      <Link underline="hover"
            color="inherit"
            href="/overview"
      >
        Overview
      </Link>
      <Grid container xs={12} lg={11} spacing={5} columnGap={2} margin={"auto"}>
  <Grid xs={6} bgcolor="yellow" alignItems={"center"}>
    <Typography>This is one grid item</Typography>
  </Grid>
  <Grid xs={5} bgcolor={"red"}>
    <Typography>This is another grid item</Typography>
  </Grid>
  <Grid xs={4} bgcolor={"green"}>
    <Typography>This is a third grid item</Typography>
  </Grid>
  <Grid xs={7} bgcolor={"purple"}>
    <Typography>This is a fourth grid item</Typography>
  </Grid>
</Grid>
    </main>
  );
}
