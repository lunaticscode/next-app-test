import React, { useRef } from "react";

interface SidebarProps {
  children?: any;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ children, onClose }) => {
  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  return <></>;
};
export default Sidebar;
