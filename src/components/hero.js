import ScreenMockup from "../assets/screen-mockups.svg";

export default function Hero() {
  const hero = document.createElement("section");
  const content = document.createElement("div");
  const title = document.createElement("h1");
  const description = document.createElement("p");
  const button = document.createElement("button");
  const img = document.createElement("img");

  hero.className = "hero";
  content.className = "content";

  title.textContent = "Build The Community Your Fans Will Love";
  description.textContent = `Huddle re-imagines the way we build communities.
  You have a voice, but so does your audience. Create
                             connections with your users as you engage in genuine discussion.`;

  button.className = `btn--primary`;
  button.textContent = "Get Started For Free";

  img.src = ScreenMockup;
  img.alt = "";

  content.append(title, description, button);
  hero.append(content, img);

  return hero;
}
