import Breadcrumb from "@/components/Common/Breadcrumb";
import Support from "@/components/Support";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page | Free Next.js Template for Startup and SaaS",
  description: "This is Support Page for IQnaut",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Support Page"
        description="Support page for IQnaut"
      />

      <Support />
    </>
  );
};

export default ContactPage;
