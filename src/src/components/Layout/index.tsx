import { useRef, useEffect } from "react";

import "./index.scss";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const appRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (appRef.current) {
      const widthByDesign = 1920;
      const { innerWidth } = window;

      const proportion = Math.floor((innerWidth * 10) / widthByDesign) / 10;

      appRef.current.style.setProperty("--proportion", `${proportion}`);
    }
  }, []);

  return (
    <div ref={appRef} className="layout-container">
      {children}
    </div>
  );
};

export default Layout;
