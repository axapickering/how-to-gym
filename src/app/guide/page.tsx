import * as React from 'react';
import Image from "next/image";
import Link from '@mui/material/Link';
import PrevNextButtons from '../PrevNextButtons';

export default function Guide() {
  return (
    <main>
      <h1>Mindset</h1>
      <br/>
      Mindset is key when deciding to start your fitness journey. Results are proportional to effort: if you work harder, you will see results fastER.
      <br/>
      The reality is that most experienced people are happy to help advise and guide newer people - we were all there at one point.
      <br/>
      If you're just getting started, be patient. Think about the length of time you have been inactive. It's not realistic to expect a reversal of years (or decades) of inactivity in a few weeks.
      <br/>
      Go in with the mindset of making realistic, lasting changes. What can you commit to? It's better to go once a week indefinitely than 5 times a week and burn out.
      <br/>
      <PrevNextButtons prev='#' next='/guide/2'/>
    </main>
  );
}
