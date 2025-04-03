import Logo from "../assets/logo.svg";

export default function Header() {
  const header = document.createElement("header");
  const img = document.createElement("img");
  const button = document.createElement("button");

  img.src = Logo;
  img.alt = "Logo";

  button.className = `btn--outline`;
  button.textContent = "Try it free";

  header.append(img, button);

  return header;
}
