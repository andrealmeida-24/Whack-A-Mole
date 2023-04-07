import React, { ReactNode } from "react";
import "./layoutWrapper.styles.scss";

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return <div className="layoutWrapper">{children}</div>;
}
