import Image from "next/image";
import Link from '@mui/material/Link';

export default function Home() {
  return (
    <main>
      <Link underline="hover"
            color="inherit"
            href="/overview/overview-2/overview-3"
      >
        Overview-3
      </Link>
    </main>
  );
}
