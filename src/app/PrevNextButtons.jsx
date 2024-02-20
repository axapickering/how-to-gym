import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

function PrevNextButtons({ prev, next }) {
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
            <Link href={prev}>
            <Button>Prev</Button>
            </Link>
            <Link href={next}>
            <Button>Next</Button>
            </Link>
          </ButtonGroup>
        </Box>
      );
    }

export default PrevNextButtons;