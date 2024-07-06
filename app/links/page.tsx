import Image from 'next/image'
import MyAvatar from "../../public/me-rs.png";
import Link from "next/link";
import { socialLinks } from './sociallinks';

export default function Links() {
  return (
    <div className="px-6 md:px-6 mx-auto">
      <div className="flex flex-col gap-8 md:gap-24">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-col items-center text-center">
            <Image height={100} width={100} className="rounded-full max-w-[90px]" src={MyAvatar} alt="me"></Image>
            <div className="">
              <h1 className="text-3xl font-bold tracking-tight text-primary mb-2">Erick Lopez</h1>
              <p className="">I write software and build keyboards for fun</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <ul className="flex-grow grid grid-cols-1 gap-1 lg:gap-4 animate-in">
            {socialLinks.map((link) => (
              <li className="col-span-1" key={link.label}>
                <Link className="underline-offset-4 no-underline w-full rounded-lg p-4 inline-grid" href={link.href}>
                  <div className="flex items-center gap-4">
                    <span className="text-xl"> {link.svg}</span>
                    {link.label}
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
  