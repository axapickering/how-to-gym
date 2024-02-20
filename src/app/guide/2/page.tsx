import * as React from 'react';
import Image from "next/image";
import Link from '@mui/material/Link';
import PrevNextButtons from '../../PrevNextButtons';

export default function Guide() {
  return (
    <main>
      <h1>Adaptations</h1>
      <br/>
      One thing that makes the human body incredible is its ability to adapt to its surroundings.
      <br/>
      For example, if you spend a lot of time in the sun, you will eventually form a tan. Your body is anticipating that you might be exposed to the sun again.
      <br/>
      Anytime the human body is introduced to a form of physical stress (and recovers), the body develops a resiliency to that stress. In this case, the physical stress is the sun, and the adaptation is a tan.
      <br/>
      This is how we get results in the gym. We impose stress on our bodies and allow them to heal. The adaptation you gain is directly related to the stress you place on your body.
      <br/>
      <PrevNextButtons prev='/guide' next='/guide/3'/>
    </main>
  );
}
