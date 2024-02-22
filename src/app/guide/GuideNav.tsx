'use strict';
import * as React from 'react';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import Divider from '@mui/material/Divider';

export default function GuideNav() {

    const sections = [
        ['Mindset', <PsychologyIcon />, '/guide/mindset'],
        ['Time Management', <AccessTimeIcon />, '/guide/time-management'],
        ['Equipment', <FitnessCenterIcon />, '/guide/equipment'],
        ['Adaptations',<AutoGraphIcon/>,'/guide/adaptations']
    ];

    const listItems = sections.map(section => {
        return (
            <>
                <ListItem disablePadding>
                    <ListItemButton component="a" href={section[2]}>
                        <ListItemIcon>
                            {section[1]}
                        </ListItemIcon>
                        <ListItemText primary={section[0]} />
                    </ListItemButton>
                </ListItem>

                <Divider />
            </>
        );
    });


    return (
        <Box sx={{minWidth: '20vw', bgcolor: 'background.paper', position: 'absolute', left: '5vw', top:'15vh' }}>
            <nav aria-label="guide nav buttons">
                <List>
                    {listItems}
                </List>
            </nav>
        </Box>
    );
}