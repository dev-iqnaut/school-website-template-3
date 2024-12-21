import DetailedPricing from "@/components/DetailedPricing/index";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IQnaut Pricing",
  description: "This is Pricing Page for IQnaut",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Pricing page"
        description="We are dedicated to empowering the future by providing each student with the knowledge, skills, and confidence necessary to succeed. Our commitment is to equip every child in your school with the tools they need to thrive academically and personally."
      /> */}
      <DetailedPricing />
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
