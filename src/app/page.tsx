import { title } from "process";
import { BgWithIllustration } from "./ui/BgWithIllustration";
import { Cards } from "./ui/Cards";
import { Faq } from "./ui/Faq";
import { Footer } from "./ui/Footer";
import { Nav } from "./ui/Nav";
import { Steps } from "./ui/Steps";

export default function Home() {
  return (
    <main>
      <Nav />
      <BgWithIllustration
        className="mt-16"
        title="making IT easier for"
        titleCompliment="you|"
        subtitle="— We help individuals to prepare for interviews and level-up knowledge via <a class='regular-link' href='/roadmaps'>roadmaps</a> and <a class='regular-link' href='/consultations'>consultations</a><br /> — We jump into your project as a part-time CTO/Tech lead and make an easier interview, onboarding, and project setup phases<br /> <br />✊ See our <a class='regular-link' href='/roadmaps'>roadmaps</a> and <a class='regular-link' href='/questionnaires'>questionnaires</a> pages with tons of free content for the community."
        stats={[
          {
            title: "200+",
            subtitle: "interviews with junior, middle and senior engineers",
          },
          {
            title: "10+",
            subtitle: "companies used consultations and hiring services",
          },
          {
            title: "100+",
            subtitle: "students working in a top companies across the world",
          },
        ]}
      />
      <Cards
        title="so, what do you offer?"
        items={[
          {
            title: "TopTal Preparation Kit",
            subtitle:
              "Toptal preparation for all stages including ongoing support during submission.",
            price: "$450",
            href: "",
            linkTitle: "See more",
          },
          {
            title: "Test and Review Pack",
            subtitle:
              "This pack includes a big test of the topic you want to work on (open-ended questions) and a review of your answers with personal recommendations and a roadmap for growth.",
            price: "$250",
            href: "",
            linkTitle: "See more",
          },
          {
            title: "Test and Review Pack",
            subtitle:
              "This pack includes a big test of the topic you want to work on (open-ended questions) and a review of your answers with personal recommendations and a roadmap for growth.",
            price: "$250",
            href: "",
            linkTitle: "See more",
          },
        ]}
      />

      <Steps
        title="aaand what are processes for individuals?"
        description="are you a company representative? check this page"
        steps={[
          {
            question: "setting up goals",
            answer:
              "We are going to initiate a chat where you describe your challenges and desired outcome",
          },
          {
            question: "consultation calls and assessment",
            answer:
              "We are going to have interviews to asses your level and create recommendations",
          },
          {
            question: "recommendations",
            answer:
              "Prepare personalized roadmap and information for your growth",
          },
          {
            question: "questions & answers 👇",
            answer: "",
          },
        ]}
      />

      <Faq
        className="-mt-32 mb-24"
        title=""
        subtitle=""
        options={[
          {
            question: "can I have offline consultations?",
            answer:
              "We support both options for all possible services, choose the form you are most comfortable with. Note, offline services going to cost a little bit more.",
          },
          {
            question: "what about schedule?",
            answer:
              "We are using a calendar platform that allows you to schedule consultations every time it's convenient for you.",
          },
        ]}
      />

      <Footer
        links={[
          {
            href: "/",
            title: "Homepage",
          },
          {
            href: "/resources",
            title: "Resources",
          },
          {
            href: "/questionnaires",
            title: "Questionnaires",
          },
          {
            href: "/companies",
            title: "Companies",
          },
        ]}
        title="✌️"
        description="built by humans on planet C-53"
        signature="© js-interview.com"
      />
    </main>
  );
}
