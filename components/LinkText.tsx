import { FC, ReactNode } from "react";
import Link from "next/link";

interface LinkTextProps {
  children?: ReactNode;
  href?: String;
  leftSpace?: String;
  rightSpace?: String;
}

const LinkText: FC<LinkTextProps> = ({
  children,
  href = "/",
  leftSpace = true,
  rightSpace = true,
}) => {
  return (
    <>
      {leftSpace && <> </>}
      <Link
        href={`${href}`}
        className="primary-text font-medium sm:font-normal hover:underline underline-offset-4"
      >
        {children}
      </Link>
      {rightSpace && <> </>}
    </>
  );
};

export default LinkText;
