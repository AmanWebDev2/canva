import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <div className="size-8 relative shrink-0">
        <Image
          fill
          src="/logo.svg"
          alt="Image ai"
          className="shrink-0 hover:opacity-75 transition"
        />
      </div>
    </Link>
  );
};