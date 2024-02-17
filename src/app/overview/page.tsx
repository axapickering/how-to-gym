import Image from "next/image";
import Link from '@mui/material/Link';

export default function Home() {
  return (
    <main>
      <Link underline="hover"
            color="inherit"
            href="/overview/overview-2"
      >
        Overview-2
      </Link>
    </main>
  );
}
