import Image from "next/image";

import UserProfile from "./user-profile";
import SearchInput from "./search-input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  return (
    <nav className="max-sm:px-2 px-14 max-w-[1400px] mx-auto flex justify-between py-2 gap-2 md:gap-16 items-center">
      {/* MeroBazar logo */}
      <Image
        src={"/icons/nav-header/merobazar-logo.svg"}
        alt="MeroBazar logo"
        width={100}
        height={60}
        className="w-28 h-10"
      />
      <div className="flex gap-0 md:gap-6 flex-1 items-center h-[40px] mt-4">
        {/* Search Input box  */}
        <SearchInput />

        {/* Create new Product  */}
        <div className="hidden md:block">
          <Button className="rounded-full py-5">
            <Image
              src={"/icons/nav-header/square-plus.svg"}
              alt="Plus"
              width={20}
              height={20}
            />
            <span className="font-semibold text-sm">Post a product</span>
          </Button>
        </div>

        <Separator
          orientation="vertical"
          className="bg-[#BDBDBD] hidden md:block"
        />

        <div className="flex gap-4 items-center">
          {/* Cart  */}
          <Image
            src={"/icons/nav-header/cart.svg"}
            alt="Plus"
            width={25}
            height={20}
            className="h-7 hidden md:block"
          />

          {/* Chat  */}
          <Image
            src={"/icons/nav-header/chat.svg"}
            alt="Plus"
            width={25}
            height={20}
            className="h-6 hidden md:block"
          />

          {/* Profile  */}
          <UserProfile />
        </div>
      </div>
    </nav>
  );
}
