import { BsEnvelopeArrowUp } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { FcReadingEbook } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
export const focusData = [
  {
    name: "Jane Reyes",
    position: "COO",
    client: "Northwind Traders",
    title: "Engage with Jane Reyes",
    message:
      "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    note: ["Expand business", "High buying intent"],
    image: "/images/person1.png",
    icon: <BsEnvelopeArrowUp />,
  },
  {
    name: "Allan Munger",
    position: "Head of Real Estate Development",
    client: "Contoso Coffee",
    title: "Prepare for meeting with Allan",
    message:
      "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading service contract.",
    note: ["Upcoming meeting", "Due today"],
    image: "/images/person2.png",
    icon: <SlCalender />,
  },
  {
    name: "Jane Doe",
    position: "Senior Marketing Manager",
    client: "Acme Corporation",
    title: "Review Campaign Strategy with Jane",
    message:
      "Discuss the upcoming digital marketing campaign and finalize the content strategy for Q1.",
    note: ["Action required", "Due tomorrow"],
    image: "/images/person1.png",
    icon: <SlCalender />,
  },
  {
    name: "Jane Doe",
    position: "Senior Marketing Manager",
    client: "Acme Corporation",
    title: "Review Campaign Strategy with Jane",
    message:
      "Discuss the upcoming digital marketing campaign and finalize the content strategy for Q1.",
    note: ["Action required", "Due tomorrow"],
    image: "/images/person1.png",
    icon: <SlCalender />,
  },
  {
    name: "Jane Doe",
    position: "Senior Marketing Manager",
    client: "Acme Corporation",
    title: "Review Campaign Strategy with Jane",
    message:
      "Discuss the upcoming digital marketing campaign and finalize the content strategy for Q1.",
    note: ["Action required", "Due tomorrow"],
    image: "/images/person1.png",
    icon: <SlCalender />,
  },
 
];

export const activityData = [
  {
    title: "Cafe A100 for Woodland Bank",
    client: "Woodland Bank",
    amount: "$280,000",
    timeline: "8 days to close",
    action: "Review draft and reply to Chris Naido",
    icon: <BsEnvelopeArrowUp />,
    image: <FcReadingEbook className="w-6 h-6" />,
  },
  {
    title: "Partnership opportunity for Fabrikam",
    client: "Frabrikam",
    amount: "$5,000,000",
    timeline: "12 days to close",
    action: "Prepare me for Fabrikam's stakeholder meeting",
    icon: <SlCalender />,
    image: <FcVoicePresentation className="w-6 h-6"  />,
  },
];
