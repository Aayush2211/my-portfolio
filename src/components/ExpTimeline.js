import React from "react";
import { IoMdCodeWorking } from "react-icons/io";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience } from "./Data/data";

const ExpTimeline = () => {
  return (
    <section
      className="w-full flex items-center justify-center"
      id="experience"
    >
      <VerticalTimeline>
        {Experience &&
          Experience.map((n) => (
            <VerticalTimelineElement
              key={n.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(102, 23, 203)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(102, 23, 203)",
              }}
              date={n.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={n.iconsSrc}
            >
              <h3 className="vertical-timeline-element-title">
                {n.title} @ {n.company_name}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {n.location}
              </h4>
              <p>{n.description[0]}</p>
              {/* <br /> */}
              <p>{n.description[1]}</p>
            </VerticalTimelineElement>
          ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExpTimeline;
