import * as React from 'react';
import Image from "next/image";
import Link from '@mui/material/Link';

export default function Guide() {
  return (
    <main>
      <h1>What's in the gym?</h1>
      <br/>
      Most equipment in the gym falls into one of three categories:
      <br/>
      Cardio equipment: this equipment is for developing your cardiovascular fitness. This equipment is pretty straightforward, and will not be covered in-depth in this guide.
      <br/>
      Free weights: these are general purpose weights. They can be used for a variety of movements and will look more or less the same across different gyms. Examples: barbells, kettlebells, dumbbells.
      <br/>
      Machines: anything that doesn't fall into one of the previous categories is probably a machine! Machines are pieces of equipment that allows you to isolate a specific part of your body, or otherwise
        do something that you wouldn't be able to do with free weights. While there are common brands and types of machines, these will generally look a little (or a lot) different depending on which gym
        you go to.
      <br/>
      A big takeaway here is that all equipment in a gym generally serves a purpose, and confining yourself to only free weights or machines will hinder you in the long run.
      <br/>
      <Link href='/guide/2'>Page 3: What's in the gym?</Link>
    </main>
  );
}
