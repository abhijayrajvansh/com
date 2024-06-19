import { ReactNode, FC } from "react";

interface GradientTextProps {
  children?: ReactNode;
  leftSpace?: Boolean;
  rightSpace?: Boolean;
  color?: String;
}

const GradientText: FC<GradientTextProps> = ({ children, leftSpace=true, rightSpace=true, color }) => {
  return <span className={`
    ${color === 'pink' ? 'text-bg-pink-gradient' : ''}
    ${color === 'green' ? 'text-bg-green-gradient' : ''}
    `}>
    {leftSpace && <>{' '}</>}
    {children}
    {rightSpace && <>{' '}</>}
  </span>;
};

export default GradientText;
