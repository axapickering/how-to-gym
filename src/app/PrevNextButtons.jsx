import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function PrevNextButtons({ prev, next }) {

    const prevButton = prev === "#"
        ? ""
        : (<Link href={prev}>
            <Button>Prev</Button>
        </Link>);

    const nextButton = next === "#"
        ? ""
        : (<Link href={next}>
            <Button>Next</Button>
        </Link>);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    m: 1,
                },
            }}
        >
            <ButtonGroup size='large' variant="text" aria-label="page navigation buttons">
                {prevButton}
                {nextButton}
            </ButtonGroup>
        </Box>
    );
}

export default PrevNextButtons;