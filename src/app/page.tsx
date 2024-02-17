import Image from "next/image";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version
import Typography from '@mui/material/Typography';
import Box from "@mui/system/Box";
import RestaurantIcon from '@mui/icons-material/Restaurant';

export default function Home() {

  const buttonText = [['The Gym', 'red','/'], ['Nutrition', 'green'], ['Sleep', 'blue'], ['Other Resources', 'grey']];

  const buttons = buttonText.map(text => {
    return <Grid borderRadius={5} xs={5} bgcolor={text[1]}>
      <Typography fontSize={35}>{text[0]}</Typography>
    </Grid>;
  });


  return (
    <Box sx={{ minWidth: "95vw", minHeight: "90vh", margin: "auto" }}>

      <Link underline="hover" color="inherit" href="/overview">
        <Typography>Overview</Typography>
      </Link>

      <Box className="rounded" minHeight={300} bgcolor={"lavender"} my={10}>
      </Box>

      <Grid container justifyContent={"center"} textAlign={"center"} flexDirection="row" sx={{ mx: 'auto' }} alignContent="center" columnGap={{ xs: 2, md: 3 }} rowGap={1} columns={{ sm: 6, md: 12 }} >
        {buttons}
      </Grid>

    </Box>
  );
}
