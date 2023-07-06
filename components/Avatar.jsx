"use client";

import { User } from "lucide-react";
import Image from "next/image";

export default function Avatar({ img, alt, square, border, initials, dot }) {
  return (
    <div className="relative">
      <ImageOptions
        img={img}
        initials={initials}
        square={square}
        border={border}
        alt={alt}
      />

      {dot && (
        <span
          className={`absolute h-3.5 w-3.5 rounded-full border-2 border-white bg-red-400 ${
            square ? "-top-2 left-8" : "left-7 top-0"
          }`}
        ></span>
      )}
    </div>
  );
}

function ImageOptions({ img, initials, square, border, alt }) {
  if (img) {
    return (
      <div className="h-10 w-10">
        <Image
          className={`h-10 w-10 ${square ? "rounded" : "rounded-full"} ${
            border ? "ring-2 ring-blue-500" : ""
          }`}
          src={img}
          alt={alt}
        />
      </div>
    );
  } else if (initials) {
    return (
      <div
        className={`flex h-10 w-10 items-center justify-center bg-gray-100 text-xl font-medium text-gray-600 ${
          square ? "rounded" : "rounded-full"
        } ${border ? "ring-2 ring-blue-500" : ""}`}
      >
        {initials}
      </div>
    );
  } else {
    return (
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 ${
          square ? "rounded" : "rounded-full"
        } ${border ? "ring-2 ring-blue-500" : ""}`}
      >
        <User size={30} color="gray" />
      </div>
    );
  }
}
