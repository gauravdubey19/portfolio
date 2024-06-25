"use client";

import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import Image from "next/image";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

const ContactNFooter = ({ devName }: { devName: string }) => {
  const { ref } = useSectionInView("contact", 0.5);

  return (
    <div
      ref={ref}
      id="contact"
      className="select-none mt-12 px-10 md:px-32 relative h-fit w-full border-t-[1px] border-opacity-40 border-[#b9b9b97a] contain-paint"
    >
      <h1 className="h-fit w-fit max-w-full absolute m-auto top-0 left-0 right-0 bottom-0 text-center font-semibold text-border-thick text-[24vw] md:text-[14vw] opacity-5">
        {devName}
      </h1>
      <>
        <Image
          className="w-[120vw] md:w-[75vw] max-w-none absolute z-0 right-0 bottom-0 m-auto -translate-x-1/4 md:-translate-x-0 translate-y-2/3 dark:opacity-60 pointer-events-none"
          src="/assets/blur-ball-blue.webp"
          alt="Blur Ball Blue"
          width={500}
          height={500}
        />
        <Image
          className="w-[120vw] md:w-[75vw] max-w-none absolute z-0 left-0 bottom-0 m-auto translate-x-1/4 md:translate-x-0 translate-y-2/3 dark:opacity-60 dark:hidden pointer-events-none"
          src="/assets/blur-ball-indigo.webp"
          alt="Blur Ball Indigo"
          width={500}
          height={500}
        />
        <Image
          className="w-[120vw] md:w-[75vw] max-w-none absolute z-0 left-0 bottom-0 m-auto translate-x-1/4 md:translate-x-0 translate-y-2/3 dark:opacity-60 dark:block hidden pointer-events-none"
          src="/assets/blur-ball-orange.webp"
          alt="Blur Ball Orange"
          width={500}
          height={500}
        />
        <div className="relative max-w-screen-xl w-full mx-auto mt-10">
          <div>
            <div>
              <p className="text-base md:leading-10">
                Monster Monster under my bed, come out and play cause
              </p>
              <h1 className="text-4xl md:text-5xl mt-2">I Need a friend!</h1>
              <p className="text-md md:text-lg lg:text-xl md:leading-10 mt-4">
                If you ever want to get in touch, hire me, or simply hang out,
                feel free to reach out to me anytime{" :)"}
              </p>
              <div className="flex justify-start items-center gap-6 h-fit mt-6">
                <Link
                  href={contactLinks[0]?.url}
                  className="inline-block group capitalize flex-center gap-2 w-full md:w-fit text-center md:text-left px-8 py-2 text-xl backdrop-blur-md border-[#334155] hover:border-[#c6c5c5] border-2 rounded-xl transition shadow-none hover:shadow-xl hover:scale-105"
                >
                  {contactLinks[0]?.title} {contactLinks[0]?.icon}
                </Link>
                {contactLinks?.slice(1).map((c, index) => (
                  <Link
                    key={index}
                    href={c?.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl w-fit inline"
                  >
                    {c?.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-[#b9b9b97a] mt-12 mb-6"></div>
          <div className="text-lg text-center pb-6">
            <Link
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:underline underline-offset-8 text-lg group"
            >
              © {new Date().getFullYear()} || All rights by{" "}
              <span className="group-hover:text-cyan-200 group-hover:scale-110 ease-in-out duration-300">
                {devName}
              </span>
              .
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default ContactNFooter;

interface ContactLink {
  id: number;
  title: string;
  url: string;
  icon: React.ReactNode;
}

const contactLinks: ContactLink[] = [
  {
    id: 0,
    title: "email",
    url: "mailto:dubeygaurav@gmail.com",
    icon: (
      <FiMail className="group-hover:fill-[red] group-hover:scale-110 active:translate-y-1 ease-in-out duration-300" />
    ),
  },
  {
    id: 1,
    title: "github",
    url: "https://github.com/gauravdubey19",
    icon: (
      <FiGithub className="hover:fill-black hover:scale-125 active:translate-y-1 ease-in-out duration-300" />
    ),
  },
  {
    id: 2,
    title: "linkedin",
    url: "https://linkedin.com/in/gauravdubey19",
    icon: (
      <FiLinkedin className="hover:fill-blue-500 hover:scale-125 active:translate-y-1 ease-in-out duration-300" />
    ),
  },
  {
    id: 3,
    title: "twitter",
    url: "https://twitter.com/",
    icon: (
      <FiTwitter className="hover:fill-cyan-600 hover:scale-125 active:translate-y-1 ease-in-out duration-300" />
    ),
  },
];
