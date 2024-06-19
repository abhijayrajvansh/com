import { ReactNode, FC } from "react";

interface GradientTextProps {
  children: ReactNode;
  leftSpace?: String;
  rightSpace?: String;
}

const GradientText: FC<GradientTextProps> = ({ children, leftSpace, rightSpace }) => {
  return <span className="font-medium primary-text">
    {leftSpace && <>&nbsp;</>}
    {children}
    {rightSpace && <>&nbsp;</>}
  </span>;
};

export default GradientText;
