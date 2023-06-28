import Link from "next/link";
import React from "react";

interface SingleLinkProps {
  className?: string;
  link: {
    path: string;
    label?: string;
  };
}

const SingleLink: React.FC<SingleLinkProps> = ({ className, link }) => {
  return <Link className="fade-in" href={link?.path}>{link.label}</Link>;
};

export default SingleLink;
