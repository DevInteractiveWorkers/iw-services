import iconsJSON from "@/icons.json";

type IconValue = string | string[];
const icons = iconsJSON as Record<string, IconValue>;

export interface IconProps {
  icon: string;
  filled?: boolean;
  stroke?: number;
  size?: number; // 👈 unified size prop
  color?: string;
}

export const Icon = ({
  icon,
  filled = false,
  stroke,
  size = 30,
  color,
}: IconProps) => {
  const pathData = icons[icon];
  if (!pathData) return null;

  const paths = Array.isArray(pathData) ? pathData : [pathData];

  return (
    <svg
      className="w-full h-full overflow-visible"
      style={{ width: size }}
      viewBox={`0 0 ${size} ${size}`} // ✅ ALWAYS consistent
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? (color ?? "currentColor") : "none"}
      stroke={!filled ? (color ?? "currentColor") : undefined}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMid meet" // ✅ keeps perfect centering
    >
      {paths.map((d, index) => (
        <path key={index} d={d} />
      ))}
    </svg>
  );
};
