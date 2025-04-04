import GrowTogether from "../assets/illustration-grow-together.svg";
import FlowingConversations from "../assets/illustration-flowing-conversation.svg";
import YourUsers from "../assets/illustration-your-users.svg";

const data = [
  {
    image: GrowTogether,
    heading: "Grow Together",
    message: `Generate meaningful discussions with your audience and build a strong, loyal
     community. Think of the insightful conversations you miss out on with a feedback form.`,
  },
  {
    image: FlowingConversations,
    heading: "Flowing Conversations",
    message: `You wouldn't paginate a conversation in real life, so why do it online?
     Our threads have just-in-time loading for a more natural flow.`,
  },
  {
    image: YourUsers,
    heading: "Your Users",
    message: `It takes no time at all to integrate Huddle with your app's authentication
     solution. This means, once signed in to your app, your users can start
     chatting immediately.`,
  },
];

function Feature({ image, heading, message }, index = 0) {
  const feature = document.createElement("article");
  const container = document.createElement("container");
  const img = document.createElement("img");
  const content = document.createElement("div");
  const title = document.createElement("h2");
  const description = document.createElement("p");

  feature.className = "feature" + (index !== 1 ? " reverse" : "");
  container.className = "container";
  content.className = "content";

  img.src = image;
  img.alt = "";

  title.textContent = heading;
  description.textContent = message;

  content.append(title, description);
  container.append(img, content);
  feature.append(container);

  return feature;
}

export default function Features() {
  const features = document.createElement("section");

  features.className = "features";
  features.append(...data.map(Feature));

  return features;
}
