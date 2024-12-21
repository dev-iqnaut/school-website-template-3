import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IQnaut",
  description: "This is About Page for IQnaut",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About IQnaut"
        description="We are dedicated to empowering the future by providing each student with the knowledge, skills, and confidence necessary to succeed. Our commitment is to equip every child in your school with the tools they need to thrive academically and personally."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;