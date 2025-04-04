import Header from "./components/header";
import Hero from "./components/hero";
import Achievements from "./components/achievements";
import Features from "./components/features";
import "./style.css";

const main = document.createElement("main");

main.append(Hero(), Achievements(), Features());

document.body.append(Header(), main);
