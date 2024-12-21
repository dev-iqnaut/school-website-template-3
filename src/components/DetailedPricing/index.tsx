"use client";
import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

// Define the structure for the plan
interface Plan {
  name: string;
  price: string;
  capacity: string;
  features: {
    [featureName: string]: boolean; // feature name mapped to active/inactive status
  };
}

// Define the structure for the section
interface Section {
  heading: string;
  features: string[]; // List of feature names
}

const Pricing: React.FC = () => {
  // Feature list for each section
  const sections: Section[] = [
    {
      heading: "Admin Panel",
      features: [
        "School Website",
        "Premium School Website",
        "School Website Customizer",
        "Teacher Management",
        "Student Management",
        "View Parents List",
        "Timetable",
        "Behavioral Analytics",
        "Library Management System",
        "Alumni Database",
        "Create",
        "Edit",
        "Attendance",
        "Check students attendance",
        "Attendance Analysis",
        "Assignment",
        "See all assignments",
        "Check Students Scores",
        "Assignment Analysis",
        "Assignment Attendance",
        "Assignment Submission Status",
        "Tests",
        "See all tests",
        "Check Students Scores",
        "Tests Analysis",
        "Tests Attendance",
        "Tests Submission Status",
        "Notification",
        "Create Notifications for All",
        "Create Notifications for Teachers Only",
        "Create Notifications for Parents Only",
        "Report Card Generation",
      ],
    },
    {
      heading: "Teacher App",
      features: [
        "Timetable / Schedule",
        "Teacher can see her daily timetable / schedule",
        "Teacher can see which tests and assignments are scheduled for the day",
        "Attendance Feature",
        "Teacher can mark students attendance",
        "Teacher can see which student is on leave",
        // "Assignment",
        "Create Assignment",
        "Score Assignment",
        "Remark Assignment",
        "History Assignment",
        // "Tests",
        "Create Tests",
        "Score Tests",
        "Remark Tests",
        "History Tests",
        "Notification Feature",
        "Teacher can read school notifications",
        "Message & Remarks",
        "Teacher can send message to Parents",
        "Teacher can send school Remarks to Parents",
        "Multi Language Support",
      ],
    },
    {
      heading: "Parents App",
      features: [
        "Timetable / Schedule Feature",
        "Parent can see students daily timetable / schedule",
        "Parent can see students tests and assignments scheduled for the day",
        "Attendance Features",
        "Parent can check students attendance",
        "Parent can inform about leave",
        // "Assignment",
        "Parent can see upcoming assignments",
        "Parent can see assignment scores",
        "Parent can see assignment remarks from teachers",
        "Parent can see assignment percentile",
        // "Tests",
        "Parent can see upcoming tests",
        "Parent can see test scores",
        "Parent can see tests remarks from teachers",
        "Parent can see tests percentile",
        "Notification Features",
        "Parent can read school notifications",
        "Parent can read notifications from teacher",
        "Message & Remarks Parents",
        "Parent can read Disciplinary Remarks from Teacher",
        "Multi Language Support For Parents",
      ],
    },
  ];

  // Pricing plans with feature-specific statuses
  const plans: Plan[] = [
    {
      name: "Bright",
      price: "₹75,000/yr",
      capacity: "500 Students",
      features: {
        "School Website": true,
        "Premium School Website": true,
        "School Website Customizer": false,
        "Teacher Management": true,
        "Student Management": true,
        "View Parents List": true,
        "Timetable": false,
        "Behavioral Analytics": false,
        "Library Management System": false,
        "Alumni Database": false,
        "Create": true,
        "Edit": false,
        "Attendance": false,
        "Check students attendance": true,
        "Attendance Analysis": true,
        "Assignment": false,
        "See all assignments": true,
        "Check Students Scores": true,
        "Assignment Analysis": false,
        "Assignment Attendance": false,
        "Assignment Submission Status": false,
        "Tests": false,
        "See all tests": true,
        "Tests Analysis": false,
        "Tests Attendance": false,
        "Tests Submission Status": false,
        "Notification": false,
        "Create Notifications for All": false,
        "Create Notifications for Teachers Only": false,
        "Create Notifications for Parents Only": false,
        "Report Card Generation": true,
        
        
        // teachers
        "Timetable / Schedule": false,
        "Teacher can see her daily timetable / schedule": true,
        "Teacher can see which tests and assignments are scheduled for the day": false,
        "Attendance Feature": false,
        "Teacher can mark students attendance": true,
        "Teacher can see which student is on leave": true,
        // "Assignment": true,
        "Create Assignment": true,
        "Score Assignment": true,
        "Remark Assignment": false,
        "History Assignment": false,
        // "Tests": true,
        "Create Tests": true,
        "Score Tests": true,
        "Remark Tests": false,
        "History Tests": false,
        "Notification Feature": true,
        "Teacher can read school notifications": true,
        "Message & Remarks": false,
        "Teacher can send message to Parents": false,
        "Teacher can send school Remarks to Parents": false,
        "Multi Language Support": false,

        // parents
        "Timetable / Schedule Feature": false,
        "Parent can see students daily timetable / schedule": true,
        "Parent can see students tests and assignments scheduled for the day": true,
        "Attendance Features": false,
        "Parent can check students attendance": true,
        "Parent can inform about leave": true,
        // "Assignment": true,
        "Parent can see upcoming assignments": true,
        "Parent can see assignment scores": true,
        "Parent can see assignment remarks from teachers": false,
        "Parent can see assignment percentile": false,
        // "Tests": true,
        "Parent can see upcoming tests": true,
        "Parent can see test scores": true,
        "Parent can see tests remarks from teachers": false,
        "Parent can see tests percentile": false,
        "Notification Features": true,
        "Parent can read school notifications": true,
        "Parent can read notifications from teacher": true,
        "Message & Remarks Parents": true,
        "Parent can read Disciplinary Remarks from Teacher": true,
        "Multi Language Support For Parents": false,
      },
    },
    {
      name: "Brilliant",
      price: "₹1,50,000/yr",
      capacity: "800 Students",
      features: {
        "School Website": true,
        "Premium School Website": true,
        "School Website Customizer": false,
        "Teacher Management": true,
        "Student Management": true,
        "View Parents List": true,
        "Timetable": true,
        "Behavioral Analytics": false,
        "Library Management System": false,
        "Alumni Database": false,
        "Create": true,
        "Edit": true,
        "Attendance": false,
        "Check students attendance": true,
        "Attendance Analysis": true,
        "Assignment": false,
        "See all assignments": true,
        "Check Students Scores": true,
        "Assignment Analysis": true,
        "Assignment Attendance": false,
        "Assignment Submission Status": false,
        "Tests": true,
        "See all tests": true,
        "Tests Analysis": true,
        "Tests Attendance": false,
        "Tests Submission Status": false,
        "Notification": true,
        "Create Notifications for All": true,
        "Create Notifications for Teachers Only": true,
        "Create Notifications for Parents Only": true,
        "Report Card Generation": true,
        
        
        // teachers
        "Timetable / Schedule": false,
        "Teacher can see her daily timetable / schedule": true,
        "Teacher can see which tests and assignments are scheduled for the day": true,
        "Attendance Feature": true,
        "Teacher can mark students attendance": true,
        "Teacher can see which student is on leave": true,
        // "Assignment": true,
        "Create Assignment": true,
        "Score Assignment": true,
        "Remark Assignment": true,
        "History Assignment": true,
        // "Tests": true,
        "Create Tests": true,
        "Score Tests": true,
        "Remark Tests": true,
        "History Tests": true,
        "Notification Feature": true,
        "Teacher can read school notifications": true,
        "Message & Remarks": true,
        "Teacher can send message to Parents": true,
        "Teacher can send school Remarks to Parents": true,
        "Multi Language Support": false,

        // parents
        "Timetable / Schedule Feature": false,
        "Parent can see students daily timetable / schedule": true,
        "Parent can see students tests and assignments scheduled for the day": true,
        "Attendance Features": true,
        "Parent can check students attendance": true,
        "Parent can inform about leave": true,
        // "Assignment": true,
        "Parent can see upcoming assignments": true,
        "Parent can see assignment scores": true,
        "Parent can see assignment remarks from teachers": true,
        "Parent can see assignment percentile": false,
        // "Tests": true,
        "Parent can see upcoming tests": true,
        "Parent can see test scores": true,
        "Parent can see tests remarks from teachers": true,
        "Parent can see tests percentile": false,
        "Notification Features": true,
        "Parent can read school notifications": true,
        "Parent can read notifications from teacher": true,
        "Message & Remarks Parents": true,
        "Parent can read Disciplinary Remarks from Teacher": true,
        "Multi Language Support For Parents": false,
      },
    },
    {
      name: "Genius",
      price: "Contact Us",
      capacity: "1500 Students",
      features: {
        "School Website": true,
        "Premium School Website": true,
        "School Website Customizer": true,
        "Teacher Management": true,
        "Student Management": true,
        "View Parents List": true,
        "Timetable": true,
        "Behavioral Analytics": true,
        "Library Management System": true,
        "Alumni Database": true,
        "Create": true,
        "Edit": true,
        "Attendance": true,
        "Check students attendance": true,
        "Attendance Analysis": true,
        "Assignment": true,
        "See all assignments": true,
        "Check Students Scores": true,
        "Assignment Analysis": true,
        "Assignment Attendance": true,
        "Assignment Submission Status": true,
        "Tests": true,
        "See all tests": true,
        "Tests Analysis": true,
        "Tests Attendance": true,
        "Tests Submission Status": true,
        "Notification": true,
        "Create Notifications for All": true,
        "Create Notifications for Teachers Only": true,
        "Create Notifications for Parents Only": true,
        "Report Card Generation": true,
        
        
        // teachers
        "Timetable / Schedule": true,
        "Teacher can see her daily timetable / schedule": true,
        "Teacher can see which tests and assignments are scheduled for the day": true,
        "Attendance Feature": true,
        "Teacher can mark students attendance": true,
        "Teacher can see which student is on leave": true,
        // "Assignment": true,
        "Create Assignment": true,
        "Score Assignment": true,
        "Remark Assignment": true,
        "History Assignment": true,
        // "Tests": true,
        "Create Tests": true,
        "Score Tests": true,
        "Remark Tests": true,
        "History Tests": true,
        "Notification Feature": true,
        "Teacher can read school notifications": true,
        "Message & Remarks": true,
        "Teacher can send message to Parents": true,
        "Teacher can send school Remarks to Parents": true,
        "Multi Language Support": true,

        // parents
        "Timetable / Schedule Feature": true,
        "Parent can see students daily timetable / schedule": true,
        "Parent can see students tests and assignments scheduled for the day": true,
        "Attendance Features": true,
        "Parent can check students attendance": true,
        "Parent can inform about leave": true,
        // "Assignment": true,
        "Parent can see upcoming assignments": true,
        "Parent can see assignment scores": true,
        "Parent can see assignment remarks from teachers": true,
        "Parent can see assignment percentile": true,
        // "Tests": true,
        "Parent can see upcoming tests": true,
        "Parent can see test scores": true,
        "Parent can see tests remarks from teachers": true,
        "Parent can see tests percentile": true,
        "Notification Features": true,
        "Parent can read school notifications": true,
        "Parent can read notifications from teacher": true,
        "Message & Remarks Parents": true,
        "Parent can read Disciplinary Remarks from Teacher": true,
        "Multi Language Support For Parents": true,
      },
    },
  ];

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of IQnaut available services , you can have a brief look at our pricing."
          center
          width="665px"
        />

        <div className="overflow-x-auto mt-8">
          <table className="min-w-full border-collapse border border-gray-300 text-center">
            <thead>
              <tr className="bg-transparent">
                <th className="border border-gray-300 p-4 text-left">Features</th>
                {plans.map((plan, index) => (
                  <th key={index} className="border border-gray-300 p-4">
                    <div className="flex flex-col">
                      <span className="font-semibold text-lg">{plan.name}</span>
                      <span className="text-sm">{plan.price}</span>
                      <span className="text-sm font-light">({plan.capacity})</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sections.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  {/* Render section headings */}
                  <tr className="bg-transparent">
                    <td
                      colSpan={plans.length + 1}
                      className="border border-gray-300 p-4 font-bold text-left"
                    >
                      {section.heading}
                    </td>
                  </tr>

                  {/* Render section features */}
                  {section.features.map((feature, featureIndex) => (
                    <tr key={featureIndex}>
                      <td className="border border-gray-300 p-4 text-left">{feature}</td>
                      {plans.map((plan, planIndex) => (
                        <td
                          key={planIndex}
                          className={`border border-gray-300 p-4 ${
                            plan.features[feature] ? "text-green-500" : "text-red-500"
                          }`}
                        >
                          {plan.features[feature] ? "✔️" : "❌"}
                        </td>
                      ))}
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
