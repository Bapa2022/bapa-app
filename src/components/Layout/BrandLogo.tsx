import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandLogo() {
  return (
    <div className="flex-shrink-0">
      <Link href="/" passHref>
        <figure className="relative flex aspect-video w-20 items-center md:w-24">
          <Image
            src={process.env.NEXT_PUBLIC_BRAND_LOGO_URL || ''}
            alt="Carmú Logo"
            fill
            className="object-contain"
          />
        </figure>
      </Link>
    </div>
  );
}
