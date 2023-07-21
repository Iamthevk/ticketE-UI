import Feature from "@/shared/Feature";
import { FEATURES_DATA } from "@/utils/constant";
import React from "react";

function Features() {
  return (
    <div className="mb-16">
      <h2 className="text-lg md:text-2xl font-semibold mb-6 md:mb-8 text-greyscale2">
        The Tickete promise
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {FEATURES_DATA.map((feature, i) => {
          return (
            <Feature
              key={i}
              icon={feature.icon}
              description={feature.description}
              title={feature.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Features;
