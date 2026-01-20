import { Icon } from "./icon";

export function ListItem({
  children,
  icon,
  color,
  bgColor,
}: {
  children: React.ReactNode;
  icon: string;
  color?: string;
  bgColor?: string;
}) {
  return (
    <li className="flex gap-5 items-center">
      <div className="service p-4 rounded-full">
        <Icon icon={icon} width="30" height="30" />
      </div>
      <span
        style={{
          // ✅ component-scoped CSS variables
          ["--service-color" as any]: color,
          ["--service-bg" as any]: bgColor,
        }}
        className="text-2xl font-medium"
      >
        {children}
      </span>
    </li>
  );
}
