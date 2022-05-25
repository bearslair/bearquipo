import React from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

import { INavLink } from ".";
import ButtonOrLink from "../ui/ButtonOrLink";

interface INavItems {
  links: INavLink[];
}

const NavItems: React.FC<INavItems> = ({ links }) => {
  const { pathname } = useLocation();

  return (
    <>
      {links.map((link, index) => (
        <ButtonOrLink
          className="inline-flex ml-6 font-thin leading-6 align-middle opacity-70 hover:opacity-100"
          key={index}
          href={link.path}
        >
          {link.name}
        </ButtonOrLink>
      ))}
    </>
  );
};

export default NavItems;