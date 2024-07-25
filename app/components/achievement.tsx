"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: "6",
    postfix: "+",
  },
  //   {
  //     prefix: "~",
  //     metric: "Users",
  //     value: "100000",
  //   },
  {
    metric: "Years",
    value: "2",
    postfix: "+",
  },
  {
    metric: "Certifications",
    value: "0",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 sm:py-16 xl:gap-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-4 sm:px-8 lg:px-16 flex flex-col sm:flex-row flex-wrap items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 w-full sm:w-auto flex-1"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(
                    achievement.value.replace(/,/g, "")
                  )}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
