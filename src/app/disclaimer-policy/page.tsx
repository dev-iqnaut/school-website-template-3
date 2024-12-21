import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IQnaut",
  description: "This is Disclaimer Policy Page for IQnaut",
  // other metadata
};

const AboutPage = () => {
  return (
    <div className="lg:pt-16 flex align-center justify-center">
      <Breadcrumb
        pageName="Disclaimer Policy"
        description="The Website Is Provided “As Is” And “As Available” And To The Extent Permitted By Law
          Without Warranties Of Any Kind, Either Express Or Implied, Including, But Not Limited To,
          Implied Warranties For A Particular Purpose, Title, And Non-infringement. In Addition, While
          Company Attempts To Provide A Good User Experience, We Do Not Represent Or Warrant
          That: (A) The Website Will Always Be Secure, Error-free, (B) The Website Will Always
          Function Without Delays, Disruptions, Or Imperfections; Or (C) That Any Content, User
          Content, Or Information You Obtain On Or Through The Website Will Be Timely Or Accurate.
          You Understand And Agree That You May Be Exposed To Content That Might Be Offensive,
          Illegal, Misleading, Or Otherwise Inappropriate, None Of Which Company Will Be
          Responsible For.
          The Company Will Not Be Responsible For Any Damage Suffered By Users From Use Of
          The Website Provided And The Services Available On The Website Or The Content On This
          Website. This Includes But Is Not Limited To, Loss Of Revenue/Data Resulting From Delays,
          As May Occur Because Of Any Act/Omission Of Parties. This Disclaimer Of Liability Also
          Applies To Any Damages Or Injury Caused By Any Failure Of Performance, Error, Omission,
          Interruption, Deletion, Defect, Delay In Operation Or Transmission, Computer Virus,
          Communication Line Failure, Theft Or Destruction Or Unauthorized Access To, Alteration Of,
          Or Use Of Record, Whether For Breach Of Contract, Tortuous Behaviour, Negligence, Or
          Under Any Other Cause Of Action.
          The Company Also Makes It Clear That It Shall Not Be Held Liable For Any
          Damage/Hurt/Inconvenience Caused To The User Through The Course Of Usage Of The
          Website And/Or Content Or As A Result Of The Users’ Actions. The Company Makes No
          Representations Or Warranties As To The Conduct Of The Users.
          The Content On The Website Are Intended To Be Subject To Availability, Without Any
          Promises Or Guarantees On The Same By The Company Or By The Website, And While
          Certain Information Available On The Website Is The Property Of The Company And The
          Company Endeavours To Keep The Said Information Updated And Accurate, The Company
          Shall Not Make No Representations Or Warranties Of Any Kind, Express Or Implied, About
          The Completeness, Accuracy, Reliability, Suitability Or Availability With Respect To The
          Website Or The Information, Or Related Graphics Contained On The Website For Any
          Purpose. Any Reliance You Place On Such Information Is Therefore Strictly At Your Own
          Risk.
          The Company Bears No Responsibility Whatsoever For Any Consequences Arising From
          The Use Of The Website By Users. The Use Of The Website Is The Sole Responsibility Of
          The User (Or Legally Authorised Person On Behalf Of The User), And In Case Of Any
          Negligence On The Part Of The User In Acting On The Same Shall Not Be Construed As
          Imposing Any Liability, Direct Or Indirect, On The Company/Website.
          The Company Shall Disclaim All Responsibility And Owns No Liability To Users For Any
          Outcome (Incidental, Direct, Indirect Or Otherwise) From The Use Of The Website. In No
          Event Will The Company Be Liable For Any Loss Or Damage Including Without Limitation,
          Indirect Or Consequential Loss Or Damage, Or Any Loss Or Damage Whatsoever Arising
          From Loss Of Data Or Profits Arising Out Of, Or In Connection With, The Use Of The
          Website.
          Through This Website, You Are Able To Link To Other Websites Which Are Not Under The
          Control Of The Company. We Have No Control Over Nature, Content And Availability Of

          Those Sites. The Inclusion Of Any Links Does Not Necessarily Imply A Recommendation Or
          Endorse The Views Expressed Within Them. Every Effort Is Made To Keep The Website Up
          And Running Smoothly. However, The Company Takes No Responsibility For, And Will Not
          Be Liable For, The Website Being Temporarily Unavailable Due To Technical Issues Beyond
          Our Control.
          To The Maximum Extent Permitted By Applicable Law, The Company Will Have No Liability
          Related To User Content Arising Under Intellectual Property Rights, Libel, Privacy, Publicity,
          Obscenity Or Other Laws. Website Also Disclaims All Liability With Respect To The Misuse,
          Loss, Modification Or Unavailability Of Any User Content.
          The User Understands And Agrees That Any Material Or Data Downloaded Or Otherwise
          Obtained Through The Website or Mobile application Is Done Entirely At His/Her Own
          Discretion And Risk And He/She Will Be Solely Responsible For Any Damage To His/Her
          Computer Systems Or Loss Of Data That Results From The Download Of Such Material Or
          Data"
      />
      
    </div>
  );
};

export default AboutPage;
