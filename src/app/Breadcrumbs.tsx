"use client";
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';
import urlMap from './urlMap';
import HomeIcon from '@mui/icons-material/Home';


export default function BasicBreadcrumbs() {

  const paths = usePathname()
    .split('/');

  // only using paths that are non-empty

  const crumbs = paths
    .map(segment => {
      console.log(`segment: ${segment}. url : ${urlMap.get(segment)}`)
      return segment != '' ? (<Link underline="hover" color="inherit" href={urlMap.get(segment)}>
        {segment}
      </Link>
      ) : '';
    });

  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          <HomeIcon fontSize='medium'/>
        </Link>
        {crumbs}
      </Breadcrumbs>
    </div>
  );
}
