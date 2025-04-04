import "./style.css";
import Header from "./components/header";
import Hero from "./components/hero";
import Achievements from "./components/achievements";

const main = document.createElement("main");

main.append(Hero(), Achievements());

document.body.append(Header(), main);
