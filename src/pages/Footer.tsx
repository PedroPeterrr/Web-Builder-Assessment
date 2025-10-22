import { socials } from "../component/SocialDetails"

export default function Footer() {
  return (
    <footer className="bg-black text-white flex flex-col gap-6 items-center justify-center p-6 md:p-12">
      <div className="flex gap-6">
          {socials.map(({id, icon, url}) => (
            <a
              key={id}
              href={url}
              target="_blank"
              className="w-6 h-6 text-white hover:scale-105 transform transition-transform duration-300"
            >
              {icon}
            </a>
          ))}
      </div>
      <p className="uppercase text-xs md:text-sm text-center">
        Copyright © {new Date().getFullYear()} Marci METZGER Homes - All Rights Reserved
      </p>
      <span className="w-12 h-0.5 bg-white"></span>
      <p className="uppercase text-xs md:text-sm text-center">Powered by</p>
      <a
        href="https://vercel.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1155 1000"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M577.3 0L1154.6 1000H0L577.3 0z" />
        </svg>
        <span className="uppercase text-xs md:text-sm">Vercel</span>
      </a>
    </footer>
  )
}