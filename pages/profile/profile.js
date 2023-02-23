import { Description } from "./Description";
import { ProfileHeader } from "./profileHeader";
import "./profile.css";
const data = {
  name: "Pratap masai",
  picture:
    "https://images.pexels.com/photos/15624136/pexels-photo-15624136.jpeg?auto=compress&cs=tinysrgb&w=800",
  location: "Maghar, Uttar Pradesh, India",
  pricing: 1200,
  experience: 4,
  total_jobs: 54,
  language: ["Hindi", "English", "Spanish"],
  skills: ["web development", "java", "html", "CSS"],
  education: [
    {
      university: "Research institue India",
      course: "Bachelor of Development",
      duration: "2019 - 2022"
    }
  ],
  role_title: "Avocate journal & manager",
  long_description: `Hi! My name is Shuska. I'm a native Spanish speaker and fluent in English with a Bachelor's Degree in International Trade.
     I'm a highly results-oriented professional with solid experience in translation and Customer Relation Management (CRM).I take pride in my Upwork profile and for being known as a reliable freelancer; with a pleasant attitude,
      problem-solving skills, and excellent organizational and time management aptitudes. As an experienced customer service advocate for over six years and translator for more than three, I will be happy to help you proofread, localize, translate or be part of your Customer Support Team.Thank you for taking the time to read about me
    .-Shus`
};

export default function Profile() {
  return (
    <div className="App">
      <ProfileHeader props={data} />
      <Description props={data} />
    </div>
  );
}
