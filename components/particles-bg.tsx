"use client";
import { ParticlesComponent } from "iw-particles";

export const ParticlesBG = ({
  id = "",
  position = "absolute",
}: {
  id: any;
  position?: string;
}) => {
  return (
    <div className={`${position} w-full h-dvh fixed flex items-center -z-10`}>
      <div className={`${position} w-full h-full`}>
        <ParticlesComponent id={id} color="#cfcfcf" />
      </div>
    </div>
  );
};
