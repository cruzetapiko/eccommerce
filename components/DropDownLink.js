import React from 'react';
import Link from 'next/link';

export default function DropDownLink(props) {
  const { href, children, ...rest } = props;
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
