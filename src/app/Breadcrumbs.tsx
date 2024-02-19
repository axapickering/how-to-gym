"use client";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';


export default function BasicBreadcrumbs() {

  const pathLinks = {};

  const paths = usePathname()
    .slice(1)
    .split('/');

  for (let i = 0; i < paths.length; i++) {
    pathLinks[paths[i]] = "/" + paths.slice(0,i+1).join('/');
  }

  for (let path in pathLinks) {
    console.log(`${path} : ${pathLinks[path]}`)
  }

  const crumbs = paths
    .map(segment => {
      return (<Link underline="hover" color="inherit" href={pathLinks[segment]}>
        {segment}
      </Link>
      );
    });

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {crumbs}
      </Breadcrumbs>
    </div>
  );
}
