function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.(com|net|org|io)$/;
  return regex.test(email);
}

export default function NewsLetter() {
  const newsLetter = document.createElement("form");
  const heading = document.createElement("h2");
  const description = document.createElement("p");
  const formContainer = document.createElement("div");
  const inputContainer = document.createElement("div");
  const input = document.createElement("input");
  const error = document.createElement("span");
  const button = document.createElement("button");

  newsLetter.className = "news-letter";
  newsLetter.onsubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const input = form[0];

    const isValid = isValidEmail(input.value);
    if (isValid) input.value = "";

    form.classList.toggle("error", !isValid);

    console.log(form);
  };

  heading.textContent = "Newsletter";

  description.textContent = `To recieve tips on how to grow your community, sign up to our
   weekly newsletter. We’ll never send you spam or pass on your email address`;

  formContainer.className = "form";
  inputContainer.className = "input";

  input.id = "email";
  input.name = "email";
  input.autocomplete = "email";

  error.className = "error";
  error.textContent = "Check your email please.";

  button.className = "btn--primary";
  button.type = "submit";
  button.textContent = "Subscribe";

  inputContainer.append(input, error);
  formContainer.append(inputContainer, button);
  newsLetter.append(heading, description, formContainer);

  return newsLetter;
}
