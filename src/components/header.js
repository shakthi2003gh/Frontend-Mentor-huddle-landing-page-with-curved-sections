import Logo from "../assets/logo.svg";

export default function Header() {
  const header = document.createElement("header");
  const img = document.createElement("img");
  const button = document.createElement("button");

  header.className = "flex justify-between items-center gap-4 p-5";

  img.src = Logo;
  img.alt = "Logo";
  img.className = "w-35 object-contain sm:w-50";

  button.className = `text-sm text-nowrap px-6 py-1.5 text-primary-500
                      border-1 rounded-full cursor-pointer
                      hover:text-primary-300 sm:text-base`;
  button.textContent = "Try it free";

  header.append(img, button);

  return header;
}
