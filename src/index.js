import Header from "./components/header";
import Hero from "./components/hero";
import Achievements from "./components/achievements";
import Features from "./components/features";
import GetStarted from "./components/getStarted";
import Footer from "./components/footer";
import "./style.css";

const main = document.createElement("main");

main.append(Hero(), Achievements(), Features(), GetStarted());

document.body.append(Header(), main, Footer());
