"use client";

import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ILinks {
  label: string;
  dropdown: string[];
  icon: string;
}

const links: ILinks[] = [
  {
    label: "Categories",
    dropdown: ["Category 1", "Category 2", "Category 3"],
    icon: "/icons/nav-header/book-shelf.svg",
  },
  {
    label: "Offers",
    dropdown: [],
    icon: "/icons/nav-header/seal-percent.svg",
  },
  {
    label: "Today's Deals",
    dropdown: [],
    icon: "/icons/nav-header/lightning.svg",
  },
  {
    label: "Sell with merobazar",
    dropdown: [],
    icon: "/icons/nav-header/hand-arrow-up.svg",
  },
  {
    label: "Your orders",
    dropdown: [],
    icon: "/icons/nav-header/package.svg",
  },
  {
    label: "Your products",
    dropdown: [],
    icon: "/icons/nav-header/circle-three-plus.svg",
  },
  {
    label: "Customer Support",
    dropdown: [],
    icon: "/icons/nav-header/headset.svg",
  },
];

export default function NavigationLinks() {
  return (
    <nav className="bg-[#F5F5F5]">
      <div className="max-sm:px-2 px-14 max-w-[1400px] mx-auto py-4 mt-4 overflow-x-auto no-scrollbar">
        <div className="flex justify-evenly max-sm:justify-start max-sm:gap-6 flex-wrap max-sm:flex-nowrap min-w-max">
          {links.map((link) =>
            link.dropdown.length ? (
              <DropdownLink
                dropdownLinks={link.dropdown}
                label={link.label}
                icon={link.icon}
                key={link.label}
              />
            ) : (
              <div
                key={link.label}
                className="flex gap-2 items-center font-semibold shrink-0"
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={20}
                  height={20}
                />
                <span>{link.label}</span>
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

function DropdownLink({
  icon,
  label,
  dropdownLinks,
}: {
  icon: string;
  label: string;
  dropdownLinks: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild onClick={() => setIsOpen(true)}>
        <div className="flex gap-2 items-center cursor-pointer">
          <div key={label} className="flex gap-2 items-center font-semibold">
            <Image src={icon} alt={label} width={20} height={20} />
            <span>{label}</span>
          </div>

          <ChevronDown
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        {dropdownLinks.map((link) => (
          <DropdownMenuItem key={link}>{link}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
