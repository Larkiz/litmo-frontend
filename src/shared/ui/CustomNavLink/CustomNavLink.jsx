import { forwardRef } from "react";
import { NavLink } from "react-router";

export const CustomNavLink = forwardRef(({ children, ...props }, ref) => (
  <NavLink
    ref={ref}
    className={({ isActive }) => (isActive ? "route-active-custom" : null)}
    {...props}
    style={{ textDecoration: "none", color: "#000", ...props?.style }}
  >
    {children}
  </NavLink>
));

CustomNavLink.displayName = "CustomNavLink";
