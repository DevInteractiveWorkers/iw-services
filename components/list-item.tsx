import { Icon } from "./icon/icon";

export function ListItem({
  children,
  icon,
  filled = true,
  color,
  bgColor,
  size = 30,
}: {
  children: React.ReactNode;
  icon: string;
  filled?: boolean;
  color?: string;
  bgColor?: string;
  size?: number;
}) {
  return (
    <li className="flex gap-5 items-center">
      <div
        className="service p-4 flex items-center justify-center rounded-full flip-logo"
        style={{
          background: bgColor,
        }}
      >
        <Icon icon={icon} filled={filled} color={color} size={size} />
      </div>

      <span
        style={{
          ["--service-color" as any]: color,
          ["--service-bg" as any]: bgColor,
        }}
        className="text-2xl font-medium w-full"
      >
        {children}
      </span>
    </li>
  );
}
