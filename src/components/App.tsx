import React, { useEffect } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/Separator";
import { Button } from "@/components/ui/Button"; 
import { GithubIcon, LinkedinIcon, MailIcon, DocumentIcon, ExternalLinkIcon } from "@/components/ui/Icons";
import ContactForm from "@/components/ui/ContactForm";
import ScrollDownButton from "@/components/ui/ScrollDownButton";
import AOS from "aos";

export function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" />
      <style>
        {`html {
            scroll-behavior: smooth;
          }`}
      </style>
      {/* Navigation Bar */}
      <header className="fixed h-16 top-0 left-0 right-0 z-50 bg-muted py-3 shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-4" style={{paddingTop : "0.1rem"
          }}>
            <Link href="#home" className="header-text text-xl font-bold text-muted-foreground hover:text-[#362688]" prefetch={false}> BKctrl </Link>
            <div className="flex items-center space-x-4">
              <Separator orientation="vertical" className="h-5" />
              <nav className="flex items-center space-x-4">
                <Link href="#experiences" className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4] hover:animate-pulse" prefetch={false}>
                  Experiences
                </Link>
                <Link href="#education" className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4] hover:animate-pulse" prefetch={false}>
                  Education & Certifications
                </Link>
                <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4] hover:animate-pulse" prefetch={false}>
                  Projects
                </Link>
                <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4] hover:animate-pulse" prefetch={false}>
                  Contact
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex items-center space-x-2" style={{paddingTop : "0.1rem"
          }}>
            <Link href="https://bkctrl.s3.ca-central-1.amazonaws.com/Resume_W25_External.pdf" target="_blank" className="p-2 group" prefetch={false}>
              <DocumentIcon className="h-5 w-5 fill-white transition-colors group-hover:fill-[#c2cdfebe]"/>
            </Link>
            <Link href="https://github.com/bkctrl" target="_blank" className="p-2 group" prefetch={false}>
              <GithubIcon className="h-5 w-5 fill-white transition-colors group-hover:fill-[#2b3137]"/>
            </Link>
            <Link href="https://www.linkedin.com/in/bkctrl" target="_blank" className="p-2 group" prefetch={false}>
              <LinkedinIcon className="h-5 w-5 fill-white transition-colors group-hover:fill-[#0077B5]"/>
            </Link>
            <Link href="mailto:hb3kang@uwaterloo.ca" target="_blank" className="p-2 group" prefetch={false}>
              <MailIcon className="h-5 w-5 fill-white transition-colors group-hover:fill-[#f5cae0]"/>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-14">
        {/* Home */}
        <div id="home">
          <section id="home" className="container mx-auto px-4 md:px-6" style={{minHeight: "100vh"}}>
            <div className="mx-auto max-w-3xl grid grid-cols-2 gap-6"  style={{paddingTop : "17vh", maxWidth: "50vw"}}>
              <div data-aos="fade-right" data-aos-duration="1500" data-aos-mirror="true">
                <br />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Hi, I&apos;m BK</h1>
                <p className="mt-6 text-base text-muted-foreground">
                  I&apos;m a 3A Computer Science student at the University of Waterloo, specializing in Artificial Intelligence and Economics. I&apos;m constantly striving to learn new technologies and expand my knowledge in the industry.
                </p>
                <div className="flex items-center gap-4" style={{paddingBottom : "4rem"}}>
                  <Link href="https://bkctrl.s3.ca-central-1.amazonaws.com/Resume_W25_External.pdf" target="_blank">
                    <Button className="mt-4">
                      <DocumentIcon className="mr-2 h-4 w-4" />
                      Resume
                    </Button>
                  </Link>
                  <Link href="mailto:hb3kang@uwaterloo.ca" target="_blank" className="group" prefetch={false}>
                    <MailIcon className="h-6 w-6 fill-white transition-colors group-hover:fill-[#f5cae0]" style={{marginTop : "1rem"}}/>
                  </Link>
                  <Link href="https://github.com/bkctrl" target="_blank" className="group" prefetch={false}>
                    <GithubIcon className="h-6 w-6 fill-white transition-colors group-hover:fill-[#2b3137]" style={{marginTop : "1rem"}}/>
                  </Link>
                  <Link href="https://www.linkedin.com/in/bkctrl" target="_blank" className="group" prefetch={false}>
                    <LinkedinIcon className="h-6 w-6 fill-white transition-colors group-hover:fill-[#0077B5]" style={{marginTop : "1rem"}}/>
                  </Link>
                  </div>
              </div>

              <div className="flex items-center justify-end relative" data-aos="fade-left" data-aos-duration="1500" data-aos-mirror="true">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff69b4e6] to-[#fff200] opacity-30 blur-[50px] animate-pulse" />
                <img
                  src="/logo.png"
                  width={300}
                  height={300}
                  className="relative z-10"
                  // style={{borderRadius : "50%"}}
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
              <a href="#experiences"><ScrollDownButton /></a>
            </div>
          </section>
        </div>
        {/* Experiences */}
        <div id="experiences">
          <section className="container mx-auto px-4 py-12 md:px-6 md:py-16" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
            <div className="mx-auto max-w-3xl" style={{paddingTop: "3rem"}}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experiences</h2>
              <div className="mt-8 space-y-8">
                <div className="flex items-start group">
                  <img
                    src="/waterloo-engineering.jpeg"
                    width={64}
                    height={64}
                    alt="Briefcase"
                    className="mr-4 h-12 w-12 text-muted-foreground group-hover:border group-hover:border-[#ff69b4] group-hover:rounded-md"
                    style={{borderRadius : "30%"}}
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">Aug 2023 - Dec 2023</p>
                    <h3 className="text-lg font-semibold group-hover:text-[#ff69b4]">
                      <strong>Faculty of Engineering, University of Waterloo </strong>
                    </h3>
                    <p className="mt-1 text-muted-foreground font-semibold">First-Year Engineerng Teaching Assistant (WEEF TA)</p>
                    <p className="mt-1 text-sm text-muted-foreground">Waterloo, ON</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>
                        🧑‍🏫 Managed and taught C++/OOP courses with 100+ students
                      </li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">C++</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Object-Oriented Programming</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Teaching</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Education</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start group">
                  <img
                    src="/midnight-sun.png"
                    width={64}
                    height={64}
                    alt="Brush"
                    border-radius="50%"
                    className="mr-4 h-12 w-12 text-muted-foreground group-hover:border group-hover:border-[#ff69b4] group-hover:rounded-full"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground">Sep 2023 - Present</p>
                    <h3 className="text-lg font-semibold group-hover:text-[#ff69b4]">
                      <strong>Midnight Sun Solar Car Rayce Team</strong>
                    </h3>
                    <p className="mt-1 text-muted-foreground font-semibold">Firmware Developer</p>
                    <p className="mt-1 text-sm text-muted-foreground">Waterloo, ON</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>🏎️ Developed a battery management (BPS) system in C/C++</li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">C</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">C++</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Documentation</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Custom Libraries</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Education */}
        <div id="education">
          <section className="container mx-auto px-4 py-12 md:px-6 md:py-16" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education & Certifications</h2>
              <div className="mt-8 space-y-8">
                <div className="flex items-start group">
                  <img
                    src="/uwaterloo.png"
                    width={64}
                    height={64}
                    className="mr-4 h-14 w-14 text-muted-foreground group-hover:border group-hover:border-[#ff69b4] group-hover:rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-[#ff69b4]">
                      <p className="font-semibold"><b>Bachelor of Computer Science</b></p>
                    </h3>
                    <p className="mt-1 text-muted-foreground font-semibold">University of Waterloo | Sep 2022 - Aug 2027</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>Artificial Intelligence Specialization & Economics Minor </li>
                      <li>
                        Level: 3A
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-8">
                <div className="flex items-start group">
                  <img
                    src="/aws-clf-c02.png"
                    width={64}
                    height={64}
                    className="mr-4 h-16 w-14 text-muted-foreground group-hover:border group-hover:border-[#ff69b4] group-hover:rounded-full"
                    style={{borderRadius : "30%"}}
                  />
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-[#ff69b4]">
                      <p className="font-semibold"><b>AWS Certified Cloud Practitioner</b></p>
                    </h3>
                    <p className="mt-1 text-muted-foreground font-semibold">CLF-C02 Certification | Aug 2024</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>
                      <a href="https://www.credly.com/badges/66d0c316-0720-471c-a01d-84c17a14b296/public_url" target="_blank" className="flex items-center text-black font-medium hover:text-gray-800 hover:font-semibold">
                      <p className="underline" style={{paddingRight: "0.3em"}}>View Certification</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" stroke="currentColor" stroke-width="0.8" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                      </svg>
                  </a>
                      </li>
                      <li>
                        Currently preparing for the AWS Certified Solutions Architect (SAA-C03)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Projects */}
        <div id="projects">
          <section id="projects" className="container mx-auto px-4 py-12 md:px-6 md:py-16" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
              <div className="mt-8 space-y-8">
              <div data-aos="zoom-in" aos-duration="1500">
                <div className="rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-[#ff69b4]/50">
                  <img
                    src="/uwmun.png"
                    width="100%"
                    alt="Project 1"
                    className="rounded-md object-cover"
                  /> 
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">UWMUN Website</h3>
                    <p className="mt-2 text-muted-foreground">
                    The University of Waterloo Model United Nations   website, automated with Notion API.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" style={{ height: "30px", borderRadius: "25%" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style={{ height: "30px", borderRadius: "25%" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" style={{ height: "30px" }}/>
                    </div>
                    <div className="mt-4 flex">
                      <Link
                        href="https://uwmun.ca"
                        target="_blank"
                        className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mr-2"
                        prefetch={false}
                      >
                        <ExternalLinkIcon className="fill-white transition-colors" style={{height : "1rem"}}/>
                        Live Demo
                      </Link>
                      <Link
                        href="https://github.com/bkctrl/uwmun"
                        target="_blank"
                        className="inline-flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-github hover:text-white-color hover:fill-white-color hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        prefetch={false}
                      >
                        <GithubIcon className="transition-colors group-hover:fill-white-color" style={{height : "1.2rem"}}/>
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <div data-aos="zoom-in" aos-duration="1500">
                <div className="rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-[#ff69b4]/50">
                  <img
                    src="/simply-economics.png"
                    width="100%"
                    alt="Project 1"
                    className="rounded-md object-cover"
                  /> 
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">SimplyEconomics</h3>
                    <p className="mt-2 text-muted-foreground">
                    A convenient dashboard streamlining complex economic data into clear, actionable insights.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style={{ height: "30px", borderRadius: "25%" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" style={{ height: "30px" }}/>
                    </div>
                    <div className="mt-4 flex">
                      <Link
                        href="https://github.com/bkctrl/simply-economics"
                        target="_blank"
                        className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mr-2"
                        prefetch={false}
                      >
                        <ExternalLinkIcon className="fill-white transition-colors" style={{height : "1rem"}}/>
                        Live Demo
                      </Link>
                      <Link
                        href="https://github.com/bkctrl/simply-economics"
                        target="_blank"
                        className="inline-flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-github hover:text-white-color hover:fill-white-color hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        prefetch={false}
                      >
                        <GithubIcon className="transition-colors group-hover:fill-white-color" style={{height : "1.2rem"}}/>
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
                <div data-aos="zoom-in" aos-duration="1500">
                <div className="rounded-lg border bg-card p-4 shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg hover:shadow-[#ff69b4]/50">
                  <img
                    src="/gesture-detector.png"
                    width="100%"
                    alt="Project 1"
                    className="rounded-md object-cover"
                  /> 
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Gesture Detector</h3>
                    <p className="mt-2 text-muted-foreground">
                    A ML-driven gesture detector web app that detects and classifies different hand gestures.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style={{ height: "30px", borderRadius: "25%" }}/>
                    </div>
                    <div className="mt-4 flex">
                      <Link
                        href="https://gesturedetector.live"
                        target="_blank"
                        className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mr-2"
                        prefetch={false}
                      >
                      <ExternalLinkIcon className="fill-white transition-colors" style={{height : "1rem"}}/>
                      Live Demo
                      </Link>
                      <Link
                        href="https://github.com/bkctrl/gesture-detector"
                        target="_blank"
                        className="inline-flex items-center rounded-md border border-input bg-background px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-github hover:text-white-color hover:fill-white-color hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        prefetch={false}
                      >
                        <GithubIcon className="transition-colors group-hover:fill-white-color" style={{height : "1.2rem"}}/>
                        GitHub
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Contact */}
        <div id="contact">
          <section className="container mx-auto px-4 py-12 md:px-6 md:py-16" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
            <ContactForm />
          </section>
        </div>
      </main>
      <footer className="bg-muted py-6 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <p>Made with 🦆 in Waterloo by BK</p>
        </div>
      </footer>
    </div>
  )
}
