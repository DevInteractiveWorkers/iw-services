import iconsJSON from "@/icons.json";

type IconValue = string | string[];
const icons = iconsJSON as Record<string, IconValue>;

export interface IconProps {
  icon: string;
  filled?: boolean;
  stroke?: number;
  width?: string;
  height?: string;
  color?: string;
}

export const Icon = ({
  icon,
  filled = false,
  stroke,
  width = "72px",
  height = "72px",
  color,
}: IconProps) => {
  const pathData = icons[icon];

  if (!pathData) return null;
  const paths = Array.isArray(pathData) ? pathData : [pathData];

  const size = {
    w: width.includes("px")
      ? width.slice(0, width.length - 2)
      : (width ?? "24"),
    h: height.includes("px")
      ? height.slice(0, height.length - 2)
      : (width ?? "24"),
  };

  return (
    <svg
      className={`${width === "auto" ? "w-auto" : `w-[${size.w}px]`} ${
        height === "auto" ? "h-auto" : `h-[${size.h}px]`
      }`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size.w}
      height={size.h}
      fill={filled ? "white" : "none"}
      viewBox={`0 0 ${size.w} ${size.h}`}
    >
      {Array.isArray(pathData) ? (
        paths.map((d, index) =>
          stroke ? (
            <path
              key={index}
              fillRule="evenodd"
              stroke="currentColor"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              d={d}
            />
          ) : (
            <path key={index} fill={color ?? "currentColor"} d={d} />
          ),
        )
      ) : (
        <path
          fillRule="evenodd"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          d={pathData}
        />
      )}
    </svg>
  );
};
