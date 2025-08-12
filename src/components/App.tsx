/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
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
  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  const [menuOpen, setMenuOpen] = useState(false);

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
        
        {/* Left Side - Logo */}
        <div className="flex items-center space-x-4">
          <Link href="#home" className="header-text text-xl font-bold text-muted-foreground hover:text-[#362688]" prefetch={false}>
            BKctrl
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-center space-x-4">
              <Link href="#experience" className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4]" prefetch={false}>
                Experience
              </Link>
              <Link href="#education" className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4]" prefetch={false}>
                Education & Certifications
              </Link>
              <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4]" prefetch={false}>
                Projects
              </Link>
              <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4]" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="h-6 w-6 text-muted-foreground" /> : <Menu className="h-6 w-6 text-muted-foreground" />}
        </button>

        {/* Right Side Icons (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center space-x-2">
          <Link href="https://bkctrl.ca/Resume_External.pdf" target="_blank" className="p-2 group" prefetch={false}>
            <DocumentIcon className="h-5 w-5 fill-white transition-colors group-hover:fill-[#c2cdfebe]" />
          </Link>
          <Link href="https://github.com/bkctrl" target="_blank" className="p-2 group" prefetch={false}>
            <GithubIcon className="h-5 w-5 fill-white transition-colors group-hover:fill-[#2b3137]" />
          </Link>
          <Link href="https://www.linkedin.com/in/bkctrl" target="_blank" className="p-2 group" prefetch={false}>
            <LinkedinIcon className="h-5 w-5 fill-white transition-colors group-hover:fill-[#0077B5]" />
          </Link>
          <Link href="mailto:hb3kang@uwaterloo.ca" target="_blank" className="p-2 group" prefetch={false}>
            <MailIcon className="h-5 w-5 fill-white transition-colors group-hover:fill-[#f5cae0]" />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden absolute top-16 left-0 w-full bg-muted shadow-md overflow-hidden"
          >
            <nav className="flex flex-col space-y-2 p-4">
              <Link href="#experience" onClick={handleLinkClick} className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4]" prefetch={false}>
                Experience
              </Link>
              <Link href="#education" onClick={handleLinkClick} className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4]" prefetch={false}>
                Education & Certifications
              </Link>
              <Link href="#projects" onClick={handleLinkClick} className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4]" prefetch={false}>
                Projects
              </Link>
              <Link href="#contact" onClick={handleLinkClick} className="text-sm font-medium text-muted-foreground hover:text-[#ff69b4]" prefetch={false}>
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
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
                  I&apos;m a 4A Computer Science student at the University of Waterloo, with a minor in Economics. My current position is at Shopify, where I&apos;m constantly striving to learn new technologies and expand my knowledge in the industry.
                </p>
                <div className="flex items-center gap-4" style={{paddingBottom : "4rem"}}>
                  <Link href="https://bkctrl.ca/Resume_External.pdf" target="_blank">
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
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
              <a href="#experience"><ScrollDownButton /></a>
            </div>
          </section>
        </div>
        {/* Experience */}
        <div id="experience">
          <section className="container mx-auto px-4 py-12 md:px-6 md:py-16" data-aos="fade-up" data-aos-duration="1500" data-aos-mirror="true">
            <div className="mx-auto max-w-3xl" style={{paddingTop: "3rem"}}>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
              <div className="mt-8 space-y-8">
              <div className="flex items-start group">
                <div className="w-[64px] flex-shrink-0">
                  <Link href="https://www.shopify.com" target="_blank" prefetch={false}>
                    <img
                      src="/shopify-logo.png"
                      width={70}
                      height={70}
                      alt="shopifylogo"
                      className="mr-4 h-12 w-12 text-muted-foreground group-hover:border group-hover:border-[#ff69b4] group-hover:rounded-md"
                    />
                  </Link>
                </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Jan 2026 - Apr 2026</p>
                    <Link href="https://www.shopify.com" target="_blank" prefetch={false}>
                      <h3 className="text-lg font-semibold group-hover:text-[#ff69b4]">
                        <strong>Shopify</strong>
                      </h3>
                    </Link>
                    <p className="mt-1 text-muted-foreground font-semibold">Software Engineer Intern</p>
                    <p className="mt-1 text-sm text-muted-foreground">Toronto, ON</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>
                      🚀 Returning Winter 2026
                      </li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Ruby on Rails</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">GraphQL</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">React</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">TypeScript</span>
                    </div>
                  </div>
                </div>
              <div className="flex items-start group">
              <div className="w-[64px] flex-shrink-0">
                <Link href="https://www.sandwichlab.ai" target="_blank" prefetch={false}>
                  <img
                    src="/test.png"
                    width={60}
                    height={60}
                    alt="Briefcase"
                    className="mr-4 h-12 w-12 text-muted-foreground group-hover:border group-hover:border-[#ff69b4] group-hover:rounded-md"
                  />
                  </Link>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">May 2025 - Present</p>
                    <Link href="https://www.sandwichlab.ai" target="_blank" prefetch={false}>
                      <h3 className="text-lg font-semibold group-hover:text-[#ff69b4]">
                        <strong>Sandwich Lab AI</strong>
                      </h3>
                    </Link>
                    <p className="mt-1 text-muted-foreground font-semibold">Software Engineer Intern</p>
                    <p className="mt-1 text-sm text-muted-foreground">Vancouver, BC</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>
                        📈🤖 Autonomous AI Agents for Meta Ads
                      </li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Go</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Python</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">React</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start group">
                <div className="w-[64px] flex-shrink-0">
                  <Link href="https://www.shopify.com" target="_blank" prefetch={false}>
                    <img
                      src="/shopify-logo.png"
                      width={70}
                      height={70}
                      alt="shopifylogo"
                      className="mr-4 h-12 w-12 text-muted-foreground group-hover:border group-hover:border-[#ff69b4] group-hover:rounded-md"
                    />
                  </Link>
                </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Jan 2025 - Apr 2025</p>
                    <Link href="https://www.shopify.com" target="_blank" prefetch={false}>
                      <h3 className="text-lg font-semibold group-hover:text-[#ff69b4]">
                        <strong>Shopify</strong>
                      </h3>
                    </Link>
                    <p className="mt-1 text-muted-foreground font-semibold">Software Engineer Intern</p>
                    <p className="mt-1 text-sm text-muted-foreground">Toronto, ON</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>
                        🌎🚢 Cross-Border Foundations, Duties and Taxes Service
                      </li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Ruby on Rails</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">GraphQL</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">React</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">TypeScript</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start group">
                <div className="w-[64px] flex-shrink-0">
                  <Link href="https://uwaterloo.ca/engineering/" target="_blank" prefetch={false}>
                    <img
                      src="/waterloo-engineering.jpeg"
                      width={64}
                      height={64}
                      alt="uwenglogo"
                      className="mr-4 h-12 w-12 text-muted-foreground group-hover:border group-hover:border-[#ff69b4] group-hover:rounded-md"
                      style={{borderRadius : "30%"}}
                    />
                  </Link>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Aug 2023 - Dec 2023</p>
                    <Link href="https://uwaterloo.ca/engineering/" target="_blank" prefetch={false}>
                      <h3 className="text-lg font-semibold group-hover:text-[#ff69b4]">
                        <strong>Faculty of Engineering, University of Waterloo </strong>
                      </h3>
                    </Link>
                    <p className="mt-1 text-muted-foreground font-semibold">Systems Design & Biomedical Engineering Teaching Assistant</p>
                    <p className="mt-1 text-sm text-muted-foreground">Waterloo, ON</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>
                        🧑‍🏫 C++/OOP Courses Teaching & Management Totalling 100+ Students
                      </li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">C++</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Object-Oriented Programming</span>
                      <span className="bg-muted px-2 py-1 rounded-md text-sm">Higher Education</span>
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
                    <p className="mt-1 text-muted-foreground font-semibold">University of Waterloo | Sep 2022 - Dec 2026</p>
                    <ul className="mt-4 space-y-2">
                      <li>Software Engineering Specialization</li>
                      <li>Economics Minor</li>
                      <li style={{color: '#4c5059'}}>Level: 4A</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-8">
                <div className="flex items-start group">
                  <img
                    src="/aws-saa-c03.png"
                    width={64}
                    height={64}
                    className="mr-4 h-16 w-16 text-muted-foreground group-hover:border group-hover:border-[#ff69b4] group-hover:rounded-full"
                    style={{borderRadius : "30%"}}
                  />
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-[#ff69b4]">
                      <p className="font-semibold"><b>AWS Certified Solutions Architect - Associate</b></p>
                    </h3>
                    <p className="mt-1 text-muted-foreground font-semibold">SAA-C03 Certification | Aug 2025</p>
                    <ul className="mt-4 space-y-2 text-muted-foreground">
                      <li>
                      <a href="https://bkctrl.ca" target="_blank" className="flex items-center text-black font-medium hover:text-gray-800 hover:font-semibold">
                      <p className="underline" style={{paddingRight: "0.3em"}}>View Certification</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="currentColor" stroke="currentColor" stroke-width="0.8" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                      </svg>
                  </a>
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
                    className="mr-4 h-16 w-16 px-1 text-muted-foreground group-hover:border group-hover:border-[#ff69b4] group-hover:rounded-full"
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
                    src="/timestamp.png"
                    width="100%"
                    alt="Project 1"
                    className="rounded-md object-cover"
                  /> 
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Timestamp</h3>
                    <p className="mt-2 text-muted-foreground">
                    On time in no time — an Android app that ensures you get to places and events!
                    </p>
                    <div className="mt-4 flex gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" style={{ height: "30px" }}/>
                      <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 256 367"><path fill="#34a853" d="M70.585 271.865a371 371 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"/><path fill="#fbbc04" d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"/><path fill="#4285f4" d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"/><path fill="#1a73e8" d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"/><path fill="#ea4335" d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"/></svg>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg" style={{ height: "30px" }}/>
                    </div>
                    <div className="mt-4 flex">
                      <Link
                        href="https://github.com/bkctrl/timestamp"
                        target="_blank"
                        className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mr-2"
                        prefetch={false}
                      >
                      <ExternalLinkIcon className="fill-white transition-colors" style={{height : "1rem"}}/>
                      Live Demo
                      </Link>
                      <Link
                        href="https://github.com/bkctrl/timestamp"
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
                    src="/phisheyelens.png"
                    width="100%"
                    alt="Project 1"
                    className="rounded-md object-cover"
                  /> 
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">Phish-Eye Lens</h3>
                    <p className="mt-2 text-muted-foreground">
                    Understand the qualms of password selection and phishing tactics — UofTHacks 12 Winner 🏆
                    </p>
                    <div className="mt-4 flex gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" style={{ height: "30px" }}/>
                      <img src="/gemini.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" style={{ height: "30px", borderRadius: "25%" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style={{ height: "30px", borderRadius: "25%" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" style={{ height: "30px" }}/>

                    </div>
                    <div className="mt-4 flex">
                      <Link
                        href="https://phisheyelens.co"
                        target="_blank"
                        className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 mr-2"
                        prefetch={false}
                      >
                      <ExternalLinkIcon className="fill-white transition-colors" style={{height : "1rem"}}/>
                      Live Demo
                      </Link>
                      <Link
                        href="https://github.com/bkctrl/phisheye-lens"
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
                    A full-stack economics dashboard and discussions forum, powered by AWS services and World Bank REST API.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" style={{ height: "30px" }} />
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" style={{ height: "30px", borderRadius: "25%" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" style={{ height: "30px" }}/>
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" style={{ height: "30px" }}/>
                    </div>
                    <div className="mt-4 flex">
                      <Link
                        href="https://simplyeconomics.ca"
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
