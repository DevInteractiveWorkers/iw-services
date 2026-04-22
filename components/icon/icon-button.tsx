"use client";
import { Icon, IconProps } from "./icon";
import { useEffect, useState } from "react";

interface IconButtonProps extends IconProps {
  icon: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  reversed?: boolean;
  fillOnHover?: boolean;
}

export const IconButton = ({
  icon,
  children = "",
  className = "",
  onClick,
  stroke = 0.6,
  filled,
  reversed,
  fillOnHover,
  size,
  viewBox,
}: IconButtonProps) => {
  const [hover, setHover] = useState(false);
  const [isPortrait, setIsPortait] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsPortait(window.screen.orientation.type.includes("portrait"));
    }
  }, []);

  return (
    <button
      className={`flex items-center gap-2 cursor-pointer h-min select-none ${className} ${
        reversed && "flex-row-reverse"
      }`}
      onMouseOver={() => !isPortrait && setHover(true)}
      onMouseOut={() => !isPortrait && setHover(false)}
      onTouchStart={() => isPortrait && setHover(true)}
      onTouchEnd={() => isPortrait && setHover(false)}
      onClick={onClick}
    >
      <Icon
        icon={icon}
        filled={(filled && !fillOnHover) || (fillOnHover && hover)}
        stroke={stroke}
        viewBox={viewBox}
        size={size}
      />
      {children}
    </button>
  );
};
