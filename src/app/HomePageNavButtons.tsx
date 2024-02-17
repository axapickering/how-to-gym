import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HotelIcon from '@mui/icons-material/Hotel';
import BookIcon from '@mui/icons-material/Book';
import Link from 'next/link';

export default function HomePageNavButtons() {
    const buttonText = [
        ['Gym', 'red', <FitnessCenterIcon />, "/gym"],
        ['Nutrition', 'green', <RestaurantIcon />, "/nutrition"],
        ['Sleep', 'royalblue', <HotelIcon />, "/sleep"],
        ['Resources', 'white', <BookIcon />, "/resources"]];

    const buttons = buttonText.map(text => {
        return (<Link href={text[3]}>
            <Grid padding={5} alignContent={"center"} borderRadius={8} xs={5} md={10} bgcolor={text[1]}>
                {text[2]}
                <Typography fontSize={40}>{text[0]}</Typography>
            </Grid>
        </Link>)});

    return (
        <Grid container justifyContent={"space-around"} textAlign={"center"} flexDirection="row" mx={'auto'} columnGap={2} rowGap={2} columns={{ sm: 4, lg: 10 }} >
            {buttons}
        </Grid>
    );

}