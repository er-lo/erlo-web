import Image from 'next/image'
import MyAvatar from "../../../public/me-rs.png";
import Link from "next/link";
import { socialLinks } from './sociallinks';

export default function Links() {
    return (
      <div className="px-6 md:px-6 pt-8 mx-auto">
        <div className="flex flex-col gap-16 md:gap-24">
          <div className="flex animate-in flex-col gap-8">
            <div className="flex animate-in flex-col gap-8 text-secondary md:flex-col items-center text-center">
              <Image height={100} width={100} className="rounded-full max-w-[90px]" src={MyAvatar} alt="me"></Image>
              <div className="">
                <h1 className="animate-in text-3xl font-bold tracking-tight text-primary mb-2">Erick Lopez</h1>
                <p className="animate-in text-secondary">A computer science student who loves to write software and build custom keyboards!</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 animate-in">
            <ul className="flex-grow grid grid-cols-1 gap-2 lg:gap-4 animate-in">
              {socialLinks.map((link) => (
                <li className="col-span-1" key={link.label}>
                  <Link className="underline-offset-4 no-underline w-full rounded-lg p-4 inline-grid" href={link.href}>
                    <div className="flex items-center gap-3">
                      <span className="text-xl"> {link.svg}</span>
                      {link.label}
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-auto text-secondary"><path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path></svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
  