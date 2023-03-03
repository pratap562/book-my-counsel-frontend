import { Description } from "../../../component/profile/Description";
import { ProfileHeader } from "../../../component/profile/profileHeader";
import dynamic from "next/dynamic";
import style from './profile.module.css'
const dataaa = {
  name: "Pratap masai",
  picture:
    "https://images.pexels.com/photos/15624136/pexels-photo-15624136.jpeg?auto=compress&cs=tinysrgb&w=800",
  location: "Maghar, Uttar Pradesh, India",
  pricing: 1200,
  experience: 4,
  total_jobs: 54,
  fluent_language: ["Hindi", "English", "Spanish"],
  conversational_language: ["German", "Italian", "Korean"],
  skills: ["web development", "java", "html", "CSS"],
  education: [
    {
      university: "Research institue India",
      course: "Bachelor of Development",
      duration: "2019 - 2022"
    },
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
    .-Shus`,
  reviews: [
    {
      name: "Mohammad Gauhar",
      rating: 4,
      date: "20-20-2022",
      comment:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      name: "Mohammad Gauhar",
      rating: 4,
      date: "20-20-2022",
      comment:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      name: "Mohammad Gauhar",
      rating: 4,
      date: "20-20-2022",
      comment:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      name: "Mohammad Gauhar",
      rating: 4,
      date: "20-20-2022",
      comment:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      name: "Mohammad Gauhar",
      rating: 4,
      date: "20-20-2022",
      comment:
        "laudantium enim quasi est qui                                                                                                 dem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      name: "Mohammad Gauhar",
      rating: 4,
      date: "20-20-2022",
      comment:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }
  ]
};
function Profile({ res }) {
  const data = res.data[0]
  data.reviews = dataaa.reviews
  console.log(res)
  return (
    <div className={style.App}>
      <ProfileHeader props={data} />
      <Description props={data} />
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const { advocateId } = params
  // http://localhost:3200/lawyer/63fa089d6f6ced4ed113f289
  console.log(`${process.env.NEXT_PUBLIC_FRONTEND_URL}${process.env.NEXT_PUBLIC_BACKEND_URL}/advocate/verify/detail/${advocateId}`, 'tttt')
  let res = await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_URL}${process.env.NEXT_PUBLIC_BACKEND_URL}/advocate/verify/detail/${advocateId}`)
  res = await res.json()
  // console.log(res, '')
  // console.log(res)
  return {
    props: { res }
  }

}

export default dynamic(() => Promise.resolve(Profile), { ssr: false })