import Image from "next/image";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <Box style={{minWidth:"95vw", minHeight:"90vh", margin:"auto"}}>
      <Link underline="hover"
            color="inherit"
            href="/overview"
      >
        <Typography marginBottom={""}>Overview</Typography>
      </Link>

      <Grid container sx={{mx:'auto'}} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} bgcolor={"black"}>
  <Grid xs={6} bgcolor="yellow">
    <Typography>This is one grid item</Typography>
  </Grid>
  <Grid xs={10} bgcolor={"red"}>
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
