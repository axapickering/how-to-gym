import * as React from 'react';
import Image from "next/image";
import Link from '@mui/material/Link';
import PrevNextButtons from '../PrevNextButtons';
import GuideNav from './GuideNav';

export default function Guide() {
  return (
    <main>
      <h1>Mindset</h1>
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare a purus ut mattis. Integer et ultrices ligula, ac faucibus dolor. Sed ac sollicitudin leo. Duis finibus mollis ante. Maecenas ut mauris mollis, dictum urna eget, ultricies mi. Maecenas dictum odio lacinia nibh facilisis tristique non a massa. Nunc nec urna auctor, mattis quam sit amet, gravida lectus.
      <br />
      Duis at faucibus tellus, et suscipit eros. Curabitur eleifend iaculis odio eu scelerisque. Pellentesque iaculis justo ac interdum maximus. Nullam ut sapien risus. Sed ac leo dolor. Aliquam commodo lacus sit amet tortor cursus, nec blandit tortor condimentum. Integer porta sapien et ipsum dictum, quis mattis mi porta. Ut maximus ligula sed interdum eleifend. Donec posuere tristique ante, ut condimentum nunc eleifend vel.
      <br />
      Donec pulvinar porttitor diam sed sollicitudin. Nullam sagittis enim et aliquam condimentum. Aenean congue mi ac arcu efficitur, at efficitur est sollicitudin. Praesent id magna vehicula, placerat lectus nec, viverra ante. Curabitur lacus turpis, euismod nec bibendum et, aliquam in lorem. Sed facilisis lacus ac rhoncus feugiat. Nunc condimentum consequat gravida. Integer tempor, nisi fermentum maximus tempus, eros tellus convallis nibh, vitae suscipit est orci nec nisl. Aenean eget pretium nisi, vel aliquam nisl.
      <PrevNextButtons prev='#' next='/guide/2' />
    </main>
  );
}
