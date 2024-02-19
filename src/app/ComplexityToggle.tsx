'use client';
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { createContext } from 'vm';


const ComplexityContext = createContext();

export function ComplexityToggle() {


    const [isSimple, setIsSimple] = React.useState(true);

    return (
        <ComplexityContext.Provider value={{ isSimple }}>
            <Toggler />
        </ComplexityContext.Provider>
    );

    }

function Toggler() {
    return (
        <FormControlLabel control={<Switch />} label="Label" />
    );
}