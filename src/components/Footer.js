import React, { useEffect, useState } from "react";
import "../css/Footer.css";
import ErataniWhiteLogo from "../assets/eratani_white.svg";
import data from "../assets/FakeData.json";
import linkedInLogo from "../assets/linkedIn_logo.svg";
import instagramLogo from "../assets/instagram_logo.svg";
import youtubeLogo from "../assets/youtube_logo.svg";
import whatsappLogo from "../assets/whatsapp_logo.svg";
import tiktokLogo from "../assets/tiktok_logo.svg";
import globeIcon from "../assets/globe.svg";
import upArrow from "../assets/upArrowYellow.svg";

const languageOptions = document.querySelectorAll(".lang-option");

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    languageOptions.forEach((opt) => opt.classList.remove("active"));
    option.classList.add("active");
  });
});

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className='footer-section'>
      <img src={ErataniWhiteLogo} alt='Eratani Logo' className='footer-logo' />
      <div className='footer-content'>
        <div className='footer-left'>
          <div className='footer-info'>
            <p className='address'>{data.address}</p>
            <p>Email: {data.contact.email}</p>
            <p>Telepon: {data.contact.telephone}</p>
          </div>
          <ul className='footer-menu'>
            <li className='menu'>Menu</li>
            {data.menu.map((menuItem, index) => (
              <li key={index}>
                <a href={`#${menuItem.toLowerCase().replace(/\s/g, "-")}`}>
                  {menuItem}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='footer-right'>
          <div className='language-switcher'>
            <span>
              <img src={globeIcon} alt='Globe' />
            </span>
            <span class='lang-option active' id='lang-id'>
              ID
            </span>
            <span class='lang-option' id='lang-en'>
              EN
            </span>
          </div>
          <div className='social-links'>
            <a href='#tiktok'>
              <img src={tiktokLogo} alt='TikTok' />
            </a>
            <a href='#instagram'>
              <img src={instagramLogo} alt='Instagram' />
            </a>
            <a href='#linkedin'>
              <img src={linkedInLogo} alt='LinkedIn' />
            </a>
            <a href='#youtube'>
              <img src={youtubeLogo} alt='YouTube' />
            </a>
            <a href='#whatsapp'>
              <img src={whatsappLogo} alt='WhatsApp' />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Copyright © 2024 by PT Eratani Teknologi Nusantara</p>
      </div>
      {isVisible && (
        <div className='scroll-to-top' onClick={scrollToTop}>
          <img src={upArrow} alt='Scroll to Top' />
        </div>
      )}
    </footer>
  );
};

export default Footer;
