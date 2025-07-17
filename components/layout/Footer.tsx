import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => (
  <footer className='footer'>
    <div className='footer__links-container'>
      <div className='footer__rights'>
        <Image src='/icon.png' alt='logo' width={118} height={18} className='object-contain' />
        <p className='footer__text'>
          MovieTown 2025 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} >
            <h3 className="font-bold text-red py-8">{item.title}</h3>
            <div className="footer__link">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="footer__text"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='footer__copyrights'>
      <p className="">@2025 MovieTown. All rights reserved</p>

      <div className="footer__copyrights-link">
        <Link href="/" className="footer__text">
          Privacy & Policy
        </Link>
        <Link href="/" className="footer__text">
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;