"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ListItem, ListItemProps } from "./list-item";

interface BenefitsListProps {
  title?: string | React.ReactNode;
  children: React.ReactElement<ListItemProps>[];
  text?: string | React.ReactNode;
  src?: string;
  align?: "start" | "end";
}

export default function BenefitsList({
  title,
  children,
  text,
  src,
  align = "start",
}: BenefitsListProps) {
  return (
    <div
      className={`lg:w-10/12 md:w-11/12 flex flex-col ${text || src ? "min-h-dvh justify-around py-10" : "h-min"} 
      ${align === "start" ? "items-start" : "items-end"}`}
    >
      {title && (
        <h2 className="font-medium lg:text-6xl md:text-5xl text-4xl">
          {title}
        </h2>
      )}
      <ul className="grid grid-cols-1 gap-5 md:w-9/12 my-5">
        {React.Children.map(children, (child, i) => {
          if (!React.isValidElement(child)) return child;

          return React.cloneElement<ListItemProps>(child, {
            align: align,
            key: i,
          });
        })}
      </ul>
      {text && <p className="lg:text-5xl md:text-4xl text-3xl">{text}</p>}
      {src && (
        <Image
          className="rounded-2xl object-cover object-center h-1/3 max-h-96 w-full"
          src={src}
          height={1080}
          width={1080}
          alt="homecare-patient"
        />
      )}
    </div>
  );
}
