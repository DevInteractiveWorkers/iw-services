import FlipElement from "../flip-element";
import { Icon, IconProps } from "../icon/icon";
import TiltCard from "../tilt-card";

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
    <TiltCard
      className={`p-4 ${className} flex flex-col items-center gap-4 flex-[30svw] group/us-card h-full`}
    >
      <div className="flex flex-col items-center gap-4">
        <FlipElement
          onView={false}
          className={`p-4 flex items-center justify-center rounded-full bottom-4 right-4 bg-[#dd272d] text-white max-w-20 aspect-square`}
        >
          <Icon
            icon={icon}
            filled={true}
            color={"currentColor"}
            size={size}
            viewBox={viewBox}
          />
        </FlipElement>
        <label className="text-2xl font-medium text-white">{title}</label>
      </div>
      <p className="text-xl text-white text-center">{description}</p>
    </TiltCard>
  );
}
