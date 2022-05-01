import React, { ReactNode } from "react";
import { useUIContext } from "../../ui/context";

const SidebarView: React.FC = () => {
  return <></>;
};

const SidebarUI: React.FC = () => {
  return <SidebarView />;
};

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return <></>;
};
export default Layout;
