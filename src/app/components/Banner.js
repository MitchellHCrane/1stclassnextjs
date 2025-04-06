"use client";

import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="flex items-center gap-x-6 bg-[#2ca4f2] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm/6 text-white">
        <a href="tel:3859991871">
          <strong className="font-semibold">We are hiring!</strong>
          <svg
            viewBox="0 0 2 2"
            aria-hidden="true"
            className="mx-2 inline size-0.5 fill-current"
          >
            <circle r={16} cx={4} cy={4} />
          </svg>
          Call 385-999-1871 for more information.
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setIsVisible(false)}
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon aria-hidden="true" className="size-5 text-white" />
        </button>
      </div>
    </div>
  );
}
