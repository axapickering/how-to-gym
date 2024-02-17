"use client";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


export default function BasicBreadcrumbs() {

    const [paths,setPaths] = useState(() => { usePathname() || "" })

    const pathName = usePathname();

    const previousPaths = pathName.split("/")
         .map(path => {
            <Link
            underline="hover"
            color="inherit"
            href="/{path}"
          >
            {path}
          </Link>
         })


  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {previousPaths}
        <Typography color="text.primary">Current page</Typography>
      </Breadcrumbs>
      <Typography color="text.primary">{pathName}</Typography>
    </div>
  );
}
