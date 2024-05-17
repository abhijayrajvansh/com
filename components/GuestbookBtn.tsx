import { Button } from "@nextui-org/react";
import Link from "next/link";
import { BiSolidBookHeart } from "react-icons/bi";

const GuestbookBtn = () => {
  return (
    <Button className="text-xs bg-primary-400 hover:bg-primary-300 font-medium text-white"
      href="/guestbook"
      as={Link}
      size="sm"
      variant="solid" >
      <BiSolidBookHeart size={21}/>Sign my guestbook!
    </Button>
  )
}

export default GuestbookBtn;