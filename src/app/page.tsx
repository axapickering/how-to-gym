import Image from "next/image";
import Link from '@mui/material/Link';

export default function Home() {
  return (
    <main>

      <Link underline="hover"
            color="inherit"
            href="/overview"
      >
        Overview
      </Link>
    </main>
  );
}
