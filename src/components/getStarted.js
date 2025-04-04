export default function GetStarted() {
  const getStarted = document.createElement("section");
  const heading = document.createElement("h2");
  const button = document.createElement("button");

  getStarted.className = "get-started";

  heading.textContent = "Ready To Build Your Community?";

  button.className = "btn--primary";
  button.textContent = "Get Started For Free";

  getStarted.append(heading, button);

  return getStarted;
}
