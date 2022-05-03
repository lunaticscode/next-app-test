import React, { ReactNode } from "react";
import { useUIContext } from "../../ui/context";
import Sidebar from "../../ui/Sidebar/Sidebar";
interface LinkProps {
  href: string;
  label: string;
}
interface SidebarViewProps {
  closeSidebar?: () => void;
  links?: LinkProps[];
}
const SidebarView: React.FC<SidebarViewProps> = ({ links }) => {
  return (
    <Sidebar>
      {links?.map((link, index) => (
        <div
          key={index.toString()}
          onClick={() => console.log("clicked-link :", link.label)}
        >
          {link.label}
        </div>
      ))}
    </Sidebar>
  );
};

interface SidebarUIProps {
  links?: LinkProps[];
}
const SidebarUI: React.FC<SidebarUIProps> = ({ links }) => {
  const { closeSidebar } = useUIContext();
  return <SidebarView links={links} closeSidebar={closeSidebar} />;
};

interface LayoutProps {
  children?: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  const { displaySidebar } = useUIContext();
  console.log({ displaySidebar });
  return (
    <div>
      {displaySidebar ? <SidebarUI /> : null}
      {children}
    </div>
  );
};
export default Layout;
