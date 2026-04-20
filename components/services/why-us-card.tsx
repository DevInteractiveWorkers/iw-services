import { Icon, IconProps } from "../icon/icon";

type CardProps = {
  title: string;
  description: string;
  className?: string;
} & IconProps;

export default function WhyUsCard({
  title,
  description,
  className = "bg-[#191919]",
  icon = "check",
  size = 34,
  viewBox,
}: CardProps) {
  return (
    <div
      className={`p-4 ${className} flex flex-col items-start max-md:even:items-end gap-4 max-md:odd:bg-[#191919] max-md:even:bg-[#2B2B2B] flex-[30svw] max-md:first:rounded-t-2xl max-md:last:rounded-b-2xl group/us-card`}
    >
      <div className="flex md:flex-col md:items-start items-center gap-4 max-md:group-even/us-card:flex-row-reverse">
        <div
          className={`p-4 flex items-center justify-center rounded-full flip-logo bottom-4 right-4 bg-[#dd272d] text-white max-w-20 aspect-square`}
        >
          <Icon
            icon={icon}
            filled={true}
            color={"currentColor"}
            size={size}
            viewBox={viewBox}
          />
        </div>
        <label className="text-2xl font-medium text-white max-md:group-even/us-card:text-end">
          {title}
        </label>
      </div>
      <p className="text-xl text-white">{description}</p>
    </div>
  );
}
