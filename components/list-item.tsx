import FlipElement from "./flip-element";
import { Icon, IconProps } from "./icon/icon";

export interface ListItemProps extends IconProps {
  children: React.ReactNode;
  bgColor?: string;
  align?: "start" | "end";
  delay?: number;
}

export function ListItem({
  children,
  icon,
  filled = true,
  stroke,
  size = 30,
  color,
  bgColor,
  viewBox,
  align = "start",
  delay,
}: ListItemProps) {
  return (
    <li
      className={`flex gap-5 items-center ${align === "start" ? "flex-row" : "flex-row-reverse"}`}
    >
      <FlipElement
        className={"service p-4 flex items-center justify-center rounded-full"}
        backgroundColor={bgColor}
        onView={delay}
      >
        <Icon
          icon={icon}
          filled={filled}
          color={color}
          size={size}
          stroke={stroke}
          viewBox={viewBox}
        />
      </FlipElement>

      <span
        style={{
          ["--service-color" as any]: color,
          ["--service-bg" as any]: bgColor,
        }}
        className={`text-2xl font-medium w-full ${align === "start" ? "text-start" : "text-end"}`}
      >
        {children}
      </span>
    </li>
  );
}
