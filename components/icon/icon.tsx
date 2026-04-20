import iconsJSON from "@/icons.json";

type IconValue = string | string[];
const icons = iconsJSON as Record<string, IconValue>;

export interface IconProps {
  icon: string;
  filled?: boolean;
  stroke?: number;
  size?: number; // 👈 unified size prop
  color?: string;
  viewBox?: string | { width: number; height?: number };
}

export const Icon = ({
  icon,
  filled = false,
  stroke,
  size = 30,
  color,
  viewBox,
}: IconProps) => {
  const pathData = icons[icon];
  if (!pathData) return null;

  const paths = Array.isArray(pathData) ? pathData : [pathData];

  return (
    <svg
      className={`overflow-visible`}
      style={{ width: size, height: size }}
      viewBox={
        typeof viewBox === "string"
          ? viewBox
          : `0 0 ${viewBox?.width ?? size} ${viewBox?.height ?? viewBox?.width ?? size}`
      } // ✅ ALWAYS consistent
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? (color ?? "currentColor") : "none"}
      stroke={!filled ? (color ?? "currentColor") : undefined}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid slice" // ✅ keeps perfect centering
    >
      {paths.map((d, index) => (
        <path key={index} d={d} />
      ))}
    </svg>
  );
};
