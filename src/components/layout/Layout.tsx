import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout(props: LayoutProps) {
  return (
    <div>
      <MainNavigation />
      <main className={`container ${classes.main}`}>{props.children}</main>
    </div>
  );
}

export default Layout;
