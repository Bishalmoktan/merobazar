import Link from "next/link";
import Image from "next/image";

export default function TopBar() {
  return (
    <header className="bg-primary text-white">
      <div className="max-sm:px-2 px-14 max-w-[1400px] mx-auto flex justify-between font-bold py-1">
        {/* contact info  */}
        <div className="flex gap-4">
          {/* phone number  */}
          <div className="flex gap-2 items-center">
            <Image
              src={"/icons/telephone.svg"}
              alt="telephone"
              height={20}
              width={20}
            />
            <a href="tel:9806327189">9806327189</a>
          </div>

          {/* email  */}
          <div className="flex gap-2 items-center">
            <Image
              src={"/icons/envelope.svg"}
              alt="envelope"
              height={20}
              width={20}
            />
            <a href="mailto:exampleemail@example.com">
              exampleemail@example.com
            </a>
          </div>
        </div>
        {/* social media other links  */}
        <div className="flex gap-4">
          {/* instagram  */}
          <Image
            src={"/icons/instagram.svg"}
            alt="envelope"
            height={20}
            width={24}
          />

          {/* linkedin  */}
          <Image
            src={"/icons/linkedin.svg"}
            alt="envelope"
            height={20}
            width={24}
          />

          <Link href={"#"} className="underline">
            terms & condition
          </Link>
          <Link href={"#"} className="underline">
            privacy policy
          </Link>
        </div>
      </div>
    </header>
  );
}
