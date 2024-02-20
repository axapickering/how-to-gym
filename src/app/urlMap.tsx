'use strict';
import * as React from 'react';


/**
 * Here I'm using a map to store all URL paths, for use in breadcrumbs.
 * Yes, that means I have to manually add new paths.
 * But, map is pretty performant. This should work for now.
 */

const urlMap = new Map();

urlMap.set('gym','/gym');
urlMap.set('sleep','/sleep');
urlMap.set('nutrition','/nutrition');
urlMap.set('macros','/nutrition/macros');
urlMap.set('test','/nutrition/macros/test');
urlMap.set('overview','/overview');
urlMap.set('guide','/guide');
urlMap.set('2','/guide/2');
urlMap.set('3','/guide/3');

export default urlMap;