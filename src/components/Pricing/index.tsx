"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false); // State to toggle expanded view

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded); // Toggle between expanded and collapsed
  };

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <div className="pricing-container relative">
          {/* Pricing Box Wrapper with Tailwind to control overflow and height */}
          <div
            className={`pricing-box-wrapper duration-800 overflow-hidden transition-all ease-in-out ${
              isExpanded ? "max-h-[100%]" : "max-h-96"
            }`}
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              <PricingBox
                packageName="Bright"
                price={"75,000"}
                duration={"yr"}
                subtitle="Enroll in our Bright plan"
              >
                <OfferList text="Admin Panel"  heading={true}  />
                <OfferList text="School Website" status="active" />
                <OfferList text="Premium School Website" status="active" />
                <OfferList text="School Website Customizer" status="inactive" />
                {isExpanded && (
                  <>
                    <OfferList text="Teacher Management" heading={true} />
                    <OfferList text="Create" status="active"  />
                    <OfferList text="Edit" status="inactive"  />
                    <OfferList text="Student Management" heading={true} />
                    <OfferList text="Create" status="active"  />
                    <OfferList text="Edit" status="inactive"  />
                    <OfferList text="View Parents List" heading={true} status="inactive"/>
                    <OfferList text="Timetable" status="inactive" heading={true} />
                    <OfferList text="Behavioral Analytics" heading={true} status="inactive" />
                    <OfferList
                      text="Library Management System"
                      status="inactive"
                      heading={true}
                    />
                    <OfferList text="Alumni Database" status="inactive" heading={true} />
                   
                    <OfferList text="Attendance" heading={true} />
                    <OfferList
                      text="Check students attendance"
                      status="active"
                    />
                    <OfferList text="Attendance Analysis" status="active" />
                    <OfferList text="Assignment" heading={true} />
                    <OfferList text="See all assignments" status="active" />
                    <OfferList text="Check Students Scores" status="active" />
                    <OfferList text="Assignment Analysis" status="inactive" />
                    <OfferList text="Assignment Attendance" status="inactive" />
                    <OfferList
                      text="Assignment Submission Status"
                      status="inactive"
                    />
                    <OfferList text="Tests" heading={true} />
                    <OfferList text="See all tests" status="active" />
                    <OfferList text="Check Students Scores" status="active" />
                    <OfferList text="Tests Analysis" status="inactive" />
                    <OfferList text="Tests Attendance" status="inactive" />
                    <OfferList
                      text="Tests Submission Status"
                      status="inactive"
                    />
                    <OfferList text="Notification" heading={true} />
                    <OfferList
                      text="Create Notifications for All"
                      status="inactive"
                    />
                    <OfferList
                      text="Create Notifications for Teachers Only"
                      status="inactive"
                    />
                    <OfferList
                      text="Create Notifications for Parents Only"
                      status="inactive"
                    />
                    <OfferList text="Report Card Generation" heading={true} />
                    <OfferList text="Report Card Generation" status="active" />

                    {/* Teacher-specific Features */}

                    <OfferList text="Teachers App" heading={true} />
                    <OfferList text="Timetable / Schedule" heading={true} />
                    <OfferList
                      text="Teacher can see her daily timetable / schedule"
                      status="active"
                    />
                    <OfferList
                      text="Teacher can see which tests and assignments are scheduled for the day"
                      status="inactive"
                    />
                    <OfferList text="Attendance " heading={true} />
                    <OfferList
                      text="Teacher can mark students attendance"
                      status="active"
                    />
                    <OfferList
                      text="Teacher can see which student is on leave"
                      status="active"
                    />

                    <OfferList text="Assignment " heading={true} />
                    <OfferList text="Create " status="active" />
                    <OfferList text="Score " status="active" />
                    <OfferList text="Remark " status="inactive" />
                    <OfferList text="History " status="inactive" />
                    <OfferList text="Tests" heading={true} />
                    <OfferList text="Create " status="active" />
                    <OfferList text="Score " status="active" />
                    <OfferList text="Remark " status="inactive" />
                    <OfferList text="History " status="inactive" />
                    <OfferList text="Notification " heading={true} />
                    <OfferList
                      text="Teacher can read school notifications"
                      status="active"
                    />
                    <OfferList text="Message & Remarks" heading={true} />
                    <OfferList
                      text="Teacher can send message to Parents"
                      status="inactive"
                    />
                    <OfferList
                      text="Teacher can send school Remarks to Parents"
                      status="inactive"
                    />
                    <OfferList
                      text="Multi Language Support"
                      status="inactive" heading={true}
                    />

                    {/* Parent-specific Features */}

                    <OfferList text="Parents App" heading={true} />
                    <OfferList
                      text="Timetable / Schedule Feature"
                      heading={true}
                    />
                    <OfferList
                      text="Parent can see students daily timetable / schedule"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see students tests and assignments scheduled for the day"
                      status="active"
                    />
                    <OfferList text="Attendance " heading={true} />
                    <OfferList
                      text="Parent can check students attendance"
                      status="active"
                    />
                    <OfferList
                      text="Parent can inform about leave"
                      status="active"
                    />
                    <OfferList text="Assignment " heading={true} />
                    <OfferList
                      text="Parent can see upcoming assignments"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see assignment scores"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see assignment remarks from teachers"
                      status="inactive"
                    />
                    <OfferList
                      text="Parent can see assignment percentile"
                      status="inactive"
                    />
                    <OfferList text="Tests" heading={true} />
                    <OfferList
                      text="Parent can see upcoming tests"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see test scores"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see tests remarks from teachers"
                      status="inactive"
                    />
                    <OfferList
                      text="Parent can see tests percentile"
                      status="inactive"
                    />
                    <OfferList text="Notification " heading={true} />
                    <OfferList
                      text="Parent can read school notifications"
                      status="active"
                    />
                    <OfferList
                      text="Parent can read notifications from teacher"
                      status="active"
                    />
                    <OfferList
                      text="Message & Remarks Parents"
                      heading={true}
                    />
                    <OfferList
                      text="Parent can read Disciplinary Remarks from Teacher"
                      status="active"
                    />
                    <OfferList
                      text="Multi Language Support For Parents"
                      status="inactive" heading={true}
                    />
                  </>
                )}

                {!isExpanded && (
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
                )}
              </PricingBox>
              <PricingBox
                packageName="Brilliant"
                price={"1,50,000"}
                duration={"yr"}
                subtitle="Enroll in our Brilliant plan"
              >
                <OfferList text="Admin Panel"  heading={true} />
                <OfferList text="School Website" status="active" />
                <OfferList text="Premium School Website" status="active" />
                <OfferList text="School Website Customizer" status="inactive" />
                {isExpanded && (
                  <>
                    <OfferList text="Teacher Management" heading={true} />
                    <OfferList text="Create" status="active"  />
                    <OfferList text="Edit" status="active"  />
                    <OfferList text="Student Management" heading={true} />
                    <OfferList text="Create" status="active"  />
                    <OfferList text="Edit" status="active"  />
                    <OfferList text="View Parents List" heading={true} status="inactive" />
                    <OfferList text="Timetable" status="active" heading={true} />
                    <OfferList text="Behavioral Analytics" heading={true} status="inactive" />
                    <OfferList
                      text="Library Management System"
                      status="inactive"
                      heading={true}
                    />
                    <OfferList text="Alumni Database" status="inactive" heading={true} />
                   
                    <OfferList text="Attendance" heading={true} />
                    <OfferList
                      text="Check students attendance"
                      status="active"
                    />
                    <OfferList text="Attendance Analysis" status="active" />
                    <OfferList text="Assignment" heading={true} />
                    <OfferList text="See all assignments" status="active" />
                    <OfferList text="Check Students Scores" status="active" />
                    <OfferList text="Assignment Analysis" status="active" />
                    <OfferList text="Assignment Attendance" status="inactive" />
                    <OfferList
                      text="Assignment Submission Status"
                      status="inactive"
                    />
                    <OfferList text="Tests" heading={true} />
                    <OfferList text="See all tests" status="active" />
                    <OfferList text="Check Students Scores" status="active" />
                    <OfferList text="Tests Analysis" status="active" />
                    <OfferList text="Tests Attendance" status="inactive" />
                    <OfferList
                      text="Tests Submission Status"
                      status="inactive"
                    />
                    <OfferList text="Notification" heading={true} />
                    <OfferList
                      text="Create Notifications for All"
                      status="active"
                    />
                    <OfferList
                      text="Create Notifications for Teachers Only"
                      status="active"
                    />
                    <OfferList
                      text="Create Notifications for Parents Only"
                      status="active"
                    />
                    <OfferList text="Report Card Generation" heading={true} />
                    <OfferList text="Report Card Generation" status="active" />

                    {/* Teacher-specific Features */}

                    <OfferList text="Teachers App" heading={true} />
                    <OfferList text="Timetable / Schedule" heading={true} />
                    <OfferList
                      text="Teacher can see her daily timetable / schedule"
                      status="active"
                    />
                    <OfferList
                      text="Teacher can see which tests and assignments are scheduled for the day"
                      status="active"
                    />
                    <OfferList text="Attendance " heading={true} />
                    <OfferList
                      text="Teacher can mark students attendance"
                      status="active"
                    />
                    <OfferList
                      text="Teacher can see which student is on leave"
                      status="active"
                    />

                    <OfferList text="Assignment " heading={true} />
                    <OfferList text="Create " status="active" />
                    <OfferList text="Score " status="active" />
                    <OfferList text="Remark " status="active" />
                    <OfferList text="History " status="active" />
                    <OfferList text="Tests" heading={true} />
                    <OfferList text="Create " status="active" />
                    <OfferList text="Score " status="active" />
                    <OfferList text="Remark " status="active" />
                    <OfferList text="History " status="active" />
                    <OfferList text="Notification " heading={true} />
                    <OfferList
                      text="Teacher can read school notifications"
                      status="active"
                    />
                    <OfferList text="Message & Remarks" heading={true} />
                    <OfferList
                      text="Teacher can send message to Parents"
                      status="active"
                    />
                    <OfferList
                      text="Teacher can send school Remarks to Parents"
                      status="active"
                    />
                    <OfferList
                      text="Multi Language Support"
                      status="inactive" heading={true}
                    />

                    {/* Parent-specific Features */}

                    <OfferList text="Parents App" heading={true} />
                    <OfferList
                      text="Timetable / Schedule Feature"
                      heading={true}
                    />
                    <OfferList
                      text="Parent can see students daily timetable / schedule"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see students tests and assignments scheduled for the day"
                      status="active"
                    />
                    <OfferList text="Attendance " heading={true} />
                    <OfferList
                      text="Parent can check students attendance"
                      status="active"
                    />
                    <OfferList
                      text="Parent can inform about leave"
                      status="active"
                    />
                    <OfferList text="Assignment " heading={true} />
                    <OfferList
                      text="Parent can see upcoming assignments"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see assignment scores"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see assignment remarks from teachers"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see assignment percentile"
                      status="inactive"
                    />
                    <OfferList text="Tests" heading={true} />
                    <OfferList
                      text="Parent can see upcoming tests"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see test scores"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see tests remarks from teachers"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see tests percentile"
                      status="inactive"
                    />
                    <OfferList text="Notification " heading={true} />
                    <OfferList
                      text="Parent can read school notifications"
                      status="active"
                    />
                    <OfferList
                      text="Parent can read notifications from teacher"
                      status="active"
                    />
                    <OfferList
                      text="Message & Remarks Parents"
                      heading={true}
                    />
                    <OfferList
                      text="Parent can read Disciplinary Remarks from Teacher"
                      status="active"
                    />
                    <OfferList
                      text="Multi Language Support For Parents"
                      status="inactive" heading={true}
                    />
                  </>
                )}
                {!isExpanded && (
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
                )}
              </PricingBox>

              {/* -------------------------------------- */}

              <PricingBox
                packageName="Genius"
                price={"Contact Us"}
                duration={" "}
                subtitle="Enroll in our Genius plan"
              >
                <OfferList text="Admin Panel"  heading={true} />
                <OfferList text="School Website" status="active" />
                <OfferList text="Premium School Website" status="active" />
                <OfferList text="School Website Customizer" status="active" />
                {isExpanded && (
                  <>
                    <OfferList text="Teacher Management" heading={true} />
                    <OfferList text="Create" status="active"  />
                    <OfferList text="Edit" status="active"  />
                    <OfferList text="Student Management" heading={true} />
                    <OfferList text="Create" status="active"  />
                    <OfferList text="Edit" status="active"  />
                    <OfferList text="View Parents List" heading={true} status="active"/>
                    <OfferList text="Timetable" status="active" heading={true} />
                    <OfferList text="Behavioral Analytics" heading={true} status="active" />
                    <OfferList
                      text="Library Management System"
                      status="active"
                      heading={true}
                    />
                    <OfferList text="Alumni Database" status="active" heading={true} />
                   
                    <OfferList text="Attendance" heading={true} />
                    <OfferList
                      text="Check students attendance"
                      status="active"
                    />
                    <OfferList text="Attendance Analysis" status="active" />
                    <OfferList text="Assignment" heading={true} />
                    <OfferList text="See all assignments" status="active" />
                    <OfferList text="Check Students Scores" status="active" />
                    <OfferList text="Assignment Analysis" status="active" />
                    <OfferList text="Assignment Attendance" status="active" />
                    <OfferList
                      text="Assignment Submission Status"
                      status="active"
                    />
                    <OfferList text="Tests" heading={true} />
                    <OfferList text="See all tests" status="active" />
                    <OfferList text="Check Students Scores" status="active" />
                    <OfferList text="Tests Analysis" status="active" />
                    <OfferList text="Tests Attendance" status="active" />
                    <OfferList
                      text="Tests Submission Status"
                      status="active"
                    />
                    <OfferList text="Notification" heading={true} />
                    <OfferList
                      text="Create Notifications for All"
                      status="active"
                    />
                    <OfferList
                      text="Create Notifications for Teachers Only"
                      status="active"
                    />
                    <OfferList
                      text="Create Notifications for Parents Only"
                      status="active"
                    />
                    <OfferList text="Report Card Generation" heading={true} />
                    <OfferList text="Report Card Generation" status="active" />

                    {/* Teacher-specific Features */}

                    <OfferList text="Teachers App" heading={true} />
                    <OfferList text="Timetable / Schedule" heading={true} />
                    <OfferList
                      text="Teacher can see her daily timetable / schedule"
                      status="active"
                    />
                    <OfferList
                      text="Teacher can see which tests and assignments are scheduled for the day"
                      status="active"
                    />
                    <OfferList text="Attendance " heading={true} />
                    <OfferList
                      text="Teacher can mark students attendance"
                      status="active"
                    />
                    <OfferList
                      text="Teacher can see which student is on leave"
                      status="active"
                    />

                    <OfferList text="Assignment " heading={true} />
                    <OfferList text="Create " status="active" />
                    <OfferList text="Score " status="active" />
                    <OfferList text="Remark " status="active" />
                    <OfferList text="History " status="active" />
                    <OfferList text="Tests" heading={true} />
                    <OfferList text="Create " status="active" />
                    <OfferList text="Score " status="active" />
                    <OfferList text="Remark " status="active" />
                    <OfferList text="History " status="active" />
                    <OfferList text="Notification " heading={true} />
                    <OfferList
                      text="Teacher can read school notifications"
                      status="active"
                    />
                    <OfferList text="Message & Remarks" heading={true} />
                    <OfferList
                      text="Teacher can send message to Parents"
                      status="active"
                    />
                    <OfferList
                      text="Teacher can send school Remarks to Parents"
                      status="active"
                    />
                    <OfferList
                      text="Multi Language Support"
                      status="active" heading={true}
                    />

                    {/* Parent-specific Features */}

                    <OfferList text="Parents App" heading={true} />
                    <OfferList
                      text="Timetable / Schedule Feature"
                      heading={true}
                    />
                    <OfferList
                      text="Parent can see students daily timetable / schedule"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see students tests and assignments scheduled for the day"
                      status="active"
                    />
                    <OfferList text="Attendance " heading={true} />
                    <OfferList
                      text="Parent can check students attendance"
                      status="active"
                    />
                    <OfferList
                      text="Parent can inform about leave"
                      status="active"
                    />
                    <OfferList text="Assignment " heading={true} />
                    <OfferList
                      text="Parent can see upcoming assignments"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see assignment scores"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see assignment remarks from teachers"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see assignment percentile"
                      status="active"
                    />
                    <OfferList text="Tests" heading={true} />
                    <OfferList
                      text="Parent can see upcoming tests"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see test scores"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see tests remarks from teachers"
                      status="active"
                    />
                    <OfferList
                      text="Parent can see tests percentile"
                      status="active"
                    />
                    <OfferList text="Notification " heading={true} />
                    <OfferList
                      text="Parent can read school notifications"
                      status="active"
                    />
                    <OfferList
                      text="Parent can read notifications from teacher"
                      status="active"
                    />
                    <OfferList
                      text="Message & Remarks Parents"
                      heading={true}
                    />
                    <OfferList
                      text="Parent can read Disciplinary Remarks from Teacher"
                      status="active"
                    />
                    <OfferList
                      text="Multi Language Support For Parents"
                      status="active" heading={true}
                    />
                  </>
                )}

                {!isExpanded && (
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent opacity-100"></div>
                )}
              </PricingBox>
            </div>
          </div>

          {/* Translucent overlay that shows when collapsed */}

          {/* Read More / Read Less Accordion Button */}
          <div className="mt-8 text-center">
            <button
              onClick={toggleAccordion}
              className={`rounded-lg bg-blue-500 px-6 py-2 text-white opacity-100 transition-all duration-300`}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
