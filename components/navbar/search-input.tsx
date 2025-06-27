import Image from "next/image";

export default function SearchInput() {
  return (
    <form className="flex w-full max-w-[650px]">
      <div className="w-full flex">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-full pl-4 py-2 pr-12 rounded-l-full bg-[#EEEEEE] border border-[#D0D0D0] focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="px-5 py-2.5 bg-primary border border-l-0 rounded-r-full hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Image
            src={"/icons/nav-header/magnifying-glass.svg"}
            alt="Search"
            width={20}
            height={20}
          />
        </button>
      </div>
    </form>
  );
}
