import Logo from "../assets/logo-light.svg";
import Phone from "../assets/icon-phone.svg";
import Email from "../assets/icon-email.svg";
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import NewsLetter from "./newsLetter";

function Contact() {
  const data = [
    { img: Phone, text: "Phone: +1-543-123-4567" },
    { img: Email, text: "example@huddle.com" },
  ];

  const ContactItem = ({ img, text }) => {
    const item = document.createElement("div");
    const icon = document.createElement("img");
    const span = document.createElement("span");

    item.className = "contact-item";

    icon.src = img;
    icon.alt = "";

    span.textContent = text;

    item.append(icon, span);
    return item;
  };

  const contact = document.createElement("div");
  contact.className = "contact";

  contact.append(...data.map(ContactItem));

  return contact;
}

function SocialPlugins() {
  const data = [
    { name: "facebook", href: "https://www.facebook.com/", img: Facebook },
    { name: "instagram", href: "https://www.instagram.com/", img: Instagram },
    { name: "twitter", href: "https://x.com/", img: Twitter },
  ];

  const Link = ({ name, href, img }) => {
    if (!img) throw Error("No SVG URL");

    const link = document.createElement("a");

    link.className = name;
    link.href = href;
    link.target = "_blank";

    fetch(img)
      .then((res) => {
        if (res.status !== 200) throw Error("SVG not found");

        return res.text();
      })
      .then((data) => (link.innerHTML = data));

    return link;
  };

  const socialPlugins = document.createElement("div");
  socialPlugins.className = "social-plugins";

  socialPlugins.append(...data.map(Link));

  return socialPlugins;
}

export default function Footer() {
  const footer = document.createElement("footer");
  const container = document.createElement("div");
  const info = document.createElement("div");
  const logo = document.createElement("img");
  const description = document.createElement("p");

  container.className = "container";
  info.className = "info";

  logo.src = Logo;
  logo.alt = "Logo";
  logo.className = "Logo";

  description.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.`;

  info.append(logo, description, Contact(), SocialPlugins());
  container.append(NewsLetter(), info);
  footer.appendChild(container);

  return footer;
}
