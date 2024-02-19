import * as React from 'react';
import Breadcrumbs from './Breadcrumbs';
import ComplexityToggle from './ComplexityToggle';
import Grid from '@mui/material/Unstable_Grid2';

export default function Header() {
        return (
            <Grid container margin={'5vh'} maxWidth={'95vw'} justifyContent={"space-between"} textAlign={"center"} mx={'auto'} >
                <Breadcrumbs/>
                <ComplexityToggle/>
            </Grid>
        );
}