import Link from "next/link";
import React from "react";

interface SingleLinkProps {
  className?: string;             // Optional prop: CSS class for the link
  link: {
    path: string;                 // Required property of the 'link' object: the path for the link
    label?: string;               // Optional property of the 'link' object: the label/text for the link
  };
}

const SingleLink: React.FC<SingleLinkProps> = ({ className, link }) => {
  return <Link className="fade-in" href={link?.path}>{link.label}</Link>;
};

export default SingleLink;
