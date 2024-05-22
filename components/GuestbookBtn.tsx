import Link from "next/link";
import { BiSolidBookHeart } from "react-icons/bi";
import { Button } from "./ui/button";

const GuestbookBtn = () => {
  return (
    <Button
      asChild
      className="text-xs font-medium text-white"
      size="sm"
    >
      <Link href="/guestbook" className="space-x-2">
        <BiSolidBookHeart size={21} />
        <p>Sign my guestbook!</p>
      </Link>
    </Button>
  );
};

export default GuestbookBtn;
