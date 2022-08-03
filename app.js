const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const id = document.querySelector(".id");
const statusCode = document.querySelector(".status");
const url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Gene is Learning",
    },
  });
  const data = await response.json();
  console.log(data);
  result.textContent = `${data.joke}`;
  id.textContent = `Joke ID: ${data.id}`;
  statusCode.textContent = `Request Status: ${data.status}`;
};

fetchDadJoke();
