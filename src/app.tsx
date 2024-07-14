import {
  BiLogoFigma,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from 'react-icons/bi'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

import resume from './assets/cv.pdf'
import myself from './assets/photo.png'
import { LinkButton } from './components/link-button'
import { TechCard } from './components/tech-card'

const cardsContent = [
  {
    icon: <BiLogoReact className="mx-auto block size-11 text-lime-300" />,
    title: 'React JS',
    description: 'Frontend Library',
  },
  {
    icon: <BiLogoJavascript className="mx-auto block size-11 text-lime-300" />,
    title: 'Javascript',
    description: 'Language',
  },
  {
    icon: <BiLogoTypescript className="mx-auto block size-11 text-lime-300" />,
    title: 'Typescript',
    description: 'Language',
  },
  {
    icon: <BiLogoFigma className="mx-auto block size-11 text-lime-300" />,
    title: 'Figma',
    description: 'Design Tool',
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <img
        src={myself}
        alt="myself image"
        className="z-0 mx-auto block w-screen"
      />

      <div className="container space-y-10 px-6">
        <main className="relative -mt-24 space-y-6 rounded-3xl border border-zinc-800 bg-zinc-900 px-4 py-10">
          <div className="space-y-3 text-center">
            <h3 className="text-xl text-zinc-100">Hello, I am</h3>
            <h1 className="text-3xl font-semibold">Matheus Reinheimer</h1>
            <h2 className="text-zinc-100">Frontend developer</h2>
          </div>
          <div className="flex flex-col items-center gap-4">
            <LinkButton
              href="https://matheusreinheimer.vercel.app"
              target="_blank"
            >
              See my portfolio
            </LinkButton>
            <LinkButton href={resume} download>
              Download my resume
            </LinkButton>
            <LinkButton href="https://wa.me/5551986470952" target="_blank">
              Contact-me
            </LinkButton>
          </div>
          <section className="flex items-center justify-center gap-6 text-lime-300">
            <a
              href="https://github.com/reinheimermat"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-px focus:outline-zinc-50"
            >
              <FaGithub className="block size-6" />
            </a>
            <a
              href="https://www.instagram.com/oh_reinheimer"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-px focus:outline-zinc-50"
            >
              <FaInstagram className="block size-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/reinheimermat/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-px focus:outline-zinc-50"
            >
              <FaLinkedin className="block size-6" />
            </a>
          </section>
        </main>

        <h1 className="text-2xl font-semibold text-zinc-50">Skills</h1>

        <section className="flex flex-wrap items-center gap-3">
          {cardsContent.map((card, index) => (
            <TechCard key={index} {...card} />
          ))}
        </section>

        <footer className="rounded-se-3xl rounded-ss-3xl border border-zinc-800 bg-zinc-900 pb-2 pt-5">
          <div className="mx-auto space-y-5 text-center">
            <strong className="font-semibold text-zinc-50">
              👋 Thanks for stopping by!
            </strong>
            <p className="text-xs text-zinc-400">
              © 2024 - All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
