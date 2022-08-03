const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
const id = document.querySelector(".id");
const statusCode = document.querySelector(".status");
const url = "https://icanhazdadjoke.com/";

btn.addEventListener("click", () => {
  fetchDadJoke();
});

const fetchDadJoke = async () => {
  result.textContent = "loading....";
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        "User-Agent": "Gene is Learning",
      },
    });
    if (!response.ok) {
      throw new Error("something happened dude");
    }
    const data = await response.json();

    result.textContent = `${data.joke}`;
    id.textContent = `Joke ID: ${data.id}`;
    statusCode.textContent = `Request Status: ${data.status}`;
  } catch (err) {
    result.textContent = "sorry there was an error my man";
  }
};

fetchDadJoke();
