"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="flex items-center gap-x-6 bg-[#2ca4f2] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm/6 text-white font-bold">
        <a className="flex items-center md:gap-4" href="/careers">
          <span className="font-semibold">We are hiring!</span>
          <Image
            alt="Company name"
            src="/images/fchmLogoColor.png"
            width={16}
            height={16}
          />
          <span className="font-semibold">Learn More</span>
          <ArrowRightIcon className="size-4" />
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px] cursor-pointer"
          onClick={() => setIsVisible(false)}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  );
}
