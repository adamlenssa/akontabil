import Link from "next/link";
import Image from "next/image";
import Checklist from "../../public/output-onlinepngtools-removebg-preview.png";
import dataDashboard from "../../public/Data-Dashboard.png";
import TestimonialCard from "./components/TestimonialCard";
import {
  faChartLine,
  faUsersBetweenLines,
  faBullseye,
  faHandshakeSimple,
} from "@fortawesome/free-solid-svg-icons";
import groups from "../../public/groups copy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default async function Home() {
  return (
    <>
      <header className="bg-[#124e78] dark:bg-light-accent">
        <div className=" flex items-center justify-around py-32 md:py-40 flex-col sm:flex-row w-full">
          <div className="flex flex-col text-center text-light-shade-white drop-shadow-lg">
            <h1 className="text-3xl sm:text-5xl pb-6 drop-shadow-[#000000]">
              Akontability
            </h1>
            <p className="text-xl sm:text-2xl">
              Where you keep yourself and your friends accountable
            </p>
          </div>
          <div className="pt-6 sm:pt-0 text-center flex">
            <Link
              href="/register"
              className="btn-main-blue w-max mr-4 text-xl shadow-[#000000] "
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="btn-light-accent w-max text-xl shadow-[#000000] dark:bg-dark-accent"
            >
              Login
            </Link>
          </div>
        </div>
      </header>
      <section className="my-20 animate-fadeIn mx-auto flex flex-wrap">
        <div className="sm:basis-1/2 basis-full">
          <div className="w-10/12 sm:max-w-72 mx-auto">
            <Image
              src={Checklist}
              alt="Checklist Image"
              className="drop-shadow-2xl"
            />
          </div>
          <h2 className="text-4xl text-center mt-10 mb-5 text-default-blue dark:text-light-accent">
            <FontAwesomeIcon icon={faBullseye} size="sm" className="mr-2" />
            Tracking you goals
          </h2>
          <p className="text-xl text-wrap text-dark-black p-5 rounded-3xl dark:text-light-shade-white">
            Keep track of your goals and check them off when you have completed
            them.
          </p>
        </div>
        <div className="sm:basis-1/2 basis-full">
          <div className="w-fit sm:max-w-72 mx-auto">
            <Image
              src={groups}
              alt="Join groups dashboard"
              className="drop-shadow-2xl"
            />
          </div>
          <h2 className="text-4xl text-center mt-10 mb-5 text-default-blue dark:text-light-accent">
            <FontAwesomeIcon
              icon={faUsersBetweenLines}
              size="sm"
              className="mr-2"
            />
            Joining Groups
          </h2>
          <p className="text-xl text-wrap text-dark-black p-5 rounded-3xl dark:text-light-shade-white">
            Join groups and see who is completing the most goals they set for
            themselves, and who is on top of the group.
          </p>
        </div>
        <div className="basis-full">
          <div className=" w-10/12 sm:max-w-[75%] mx-auto">
            <Image src={dataDashboard} alt="Data Dashboard" />
          </div>
          <h2 className="text-4xl text-center mt-10 mb-5 text-default-blue dark:text-light-accent">
            <FontAwesomeIcon icon={faChartLine} size="sm" className="mr-2" />
            Tracking your progress
          </h2>
          <p className="text-xl text-center text-wrap text-dark-black p-5 rounded-3xl dark:text-light-shade-white">
            Keep track of your progess with completing your goals, whether it is
            a weekly, monthly or yearly report.
          </p>
        </div>
      </section>
      <section className="my-20">
        <h2 className="text-4xl text-center mb-14 text-dark-black">
          User Reviews
        </h2>
        <div className="relative flex justify-evenly flex-wrap">
          <TestimonialCard
            testamonial={{
              userName: "Abdisha Musa",
              rating: 4,
              reviewText:
                "Using this app has changed my productivity so much. I have seen an icnrease in my productivity due to the fact that I can see everything I have to do for the day in one place.",
            }}
          />
          <TestimonialCard
            className={"lg:scale-125"}
            testamonial={{
              userName: "Abdisha Musa",
              rating: 4,
              reviewText:
                "Using this app has changed my productivity so much. I have seen an icnrease in my productivity due to the fact that I can see everything I have to do for the day in one place.",
            }}
          />
          <TestimonialCard
            testamonial={{
              userName: "Abdisha Musa",
              rating: 5,
              reviewText:
                "Using this app has changed my productivity so much. I have seen an icnrease in my productivity due to the fact that I can see everything I have to do for the day in one place.",
            }}
          />
        </div>
      </section>
      <section className="">
        <h2 className="text-4xl text-center mb-14 text-dark-black dark:text-light-accent">
          <FontAwesomeIcon icon={faHandshakeSimple} className="mr-2" />
          Join to see results
        </h2>
        <div className="flex flex-col flex-wrap w-full items-center justify-center">
          <p className="py-2 px-4 max-w-lg text-center text-lg justify-self-center dark:text-light-shade-white">
            Whether you want to become more productive, want a little
            competition between your friends, or both, join our platform to take
            yourself to the next level and complete more of your daily, weekly,
            or montly goals.
          </p>
          <Link href="/register" className="btn bg-light-accent mb-10">
            Join Now
          </Link>
        </div>
      </section>
    </>
  );
}
