import CommunityIcon from "../assets/icon-communities.svg";
import MessageIcon from "../assets/icon-messages.svg";

const data = [
  { src: CommunityIcon, value: "1.4k+", label: "Communities Formed" },
  { src: MessageIcon, value: "2.7m+", label: "Messages Sent" },
];

function Achievement({ src, value, label }) {
  const achievement = document.createElement("div");
  const icon = document.createElement("img");
  const count = document.createElement("span");
  const text = document.createElement("span");

  achievement.className = "achievement";

  icon.className = "icon";
  icon.src = src;
  icon.alt = "";

  count.className = "title";
  count.textContent = value;

  text.className = "label";
  text.textContent = label;

  achievement.append(icon, count, text);

  return achievement;
}

export default function Achievements() {
  const achievements = document.createElement("section");

  achievements.className = "achievements";

  achievements.append(...data.map(Achievement));

  return achievements;
}
