import { ReactNode, FC } from "react";

interface GradientTextProps {
  children?: ReactNode;
  leftSpace?: Boolean;
  rightSpace?: Boolean;
  color?: String;
  className?: String;
}

const GradientText: FC<GradientTextProps> = ({ children, leftSpace=true, rightSpace=true, color, className }) => {
  return <span className={` ${className}
    ${color === 'pink' ? 'text-bg-pink-gradient' : ''}
    ${color === 'green' ? 'text-bg-green-gradient' : ''}
    ${color === 'sky' ? 'text-bg-sky-gradient' : ''}
    `}>
    {leftSpace && <>{' '}</>}
    {children}
    {rightSpace && <>{' '}</>}
  </span>;
};

export default GradientText;
