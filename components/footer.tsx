import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Separator } from "./ui/separator";

const categoryLinks = [
  {
    id: 1,
    label: "Home Appliances",
    icon: "/icons/footer/hotel-bed.svg",
    link: "#",
  },
  {
    id: 2,
    label: "Apparels and Accessories",
    icon: "/icons/footer/shirt.svg",
    link: "#",
  },
  {
    id: 3,
    label: "Sports",
    icon: "/icons/footer/football.svg",
    link: "#",
  },
  {
    id: 4,
    label: "Sneakers",
    icon: "/icons/footer/sneaker.svg",
    link: "#",
  },
  {
    id: 5,
    label: "Fitness",
    icon: "/icons/footer/barbell.svg",
    link: "#",
  },
  {
    id: 6,
    label: "Decor",
    icon: "/icons/footer/flower.svg",
    link: "#",
  },
  {
    id: 7,
    label: "Health and Beauty",
    icon: "/icons/footer/dna.svg",
    link: "#",
  },
];

const quickLinks = [
  {
    id: 1,
    label: "Home",
    link: "#",
  },
  {
    id: 2,
    label: "Categories",
    link: "#",
  },
  {
    id: 3,
    label: "My Orders",
    link: "#",
  },
  {
    id: 4,
    label: "My Products",
    link: "#",
  },
  {
    id: 5,
    label: "Profile",
    link: "#",
  },
];

const contactInfo = [
  {
    id: 1,
    label: "supprot@merobazar.com",
    link: "mailto:supprot@merobazar.com",
  },
  {
    id: 2,
    label: "01 9343 3553",
    link: "tel:01 9343 3553",
  },
  {
    id: 3,
    label: "01 9456 3244",
    link: "tel:01 9456 3244",
  },
  {
    id: 4,
    label: "9801234321",
    link: "tel:9801234321",
  },
];

const socialLinks = [
  {
    id: 1,
    icon: "/icons/footer/youtube.svg",
    link: "#",
  },
  {
    id: 2,
    icon: "/icons/footer/instagram.svg",
    link: "#",
  },
  {
    id: 3,
    icon: "/icons/footer/facebook.svg",
    link: "#",
  },
  {
    id: 4,
    icon: "/icons/footer/twitter.svg",
    link: "#",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8]">
      <main>
        <section className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="flex flex-col gap-2">
            <Image
              src={"/icons/nav-header/merobazar-logo.svg"}
              alt="MeroBazar"
              width={100}
              height={60}
              className="w-28 h-10"
            />

            <div>
              <p>Buy, Sell, Repeat!</p>
              <p>Make Use of your Used products, Sell New </p>
              <p>products, Buy Used Products, Buy New Products</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            {/* Categories links  */}
            <div>
              <div className="font-bold flex gap-2 items-center">
                <Image
                  src={"/icons/nav-header/book-shelf.svg"}
                  alt="Book Shelf"
                  width={20}
                  height={20}
                />
                <span>Categories</span>
              </div>

              <div className="space-y-4 mt-8 text-[#7C7C7C] text-sm">
                {categoryLinks.map((category) => (
                  <Link
                    key={category.id}
                    href={category.link}
                    className="flex gap-2 items-center"
                  >
                    <Image
                      src={category.icon}
                      alt={category.label}
                      width={20}
                      height={20}
                    />
                    <span>{category.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <div className="font-bold flex gap-2 items-center">
                <Image
                  src={"/icons/footer/link.svg"}
                  alt="Link"
                  width={20}
                  height={20}
                />
                <span>Quick Links</span>
              </div>

              <div className="space-y-4 mt-8 text-[#7C7C7C] text-sm">
                {quickLinks.map((item) => (
                  <Link key={item.id} href={item.link} className="flex gap-2">
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="font-bold flex gap-2 items-center">
                <Image
                  src={"/icons/nav-header/headset.svg"}
                  alt="Support"
                  width={20}
                  height={20}
                />
                <span>Supports</span>
              </div>

              <div className="space-y-4 mt-8 text-[#7C7C7C] text-sm">
                {contactInfo.map((item) => (
                  <a key={item.id} href={item.link} className="flex gap-2">
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Separator className=" mt-16" />
        <section className="flex justify-between pb-12">
          <p className="text-xl">
            Mero Bazar © {new Date().getFullYear()}. All rights reserved.
          </p>

          <div className="flex gap-4">
            {socialLinks.map((item) => (
              <a key={item.id} href={item.link}>
                <Image src={item.icon} alt={item.icon} width={30} height={30} />
              </a>
            ))}
          </div>
        </section>
      </main>
    </footer>
  );
}
