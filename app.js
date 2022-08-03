const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
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
  result.textContent = `${data.joke} ID: ${data.id}`;
};

fetchDadJoke();
