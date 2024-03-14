import React, { useState, useEffect } from "react";

const Homepage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch(
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
    )
      .then((response) => response.json())
      .then((data) => setJokes(data.jokes))
      .catch((error) => console.error("Error fetching jokes:", error));
  }, []);

  return (
    <div className="container">
      <h2>Jokes</h2>
      <ul>
        {jokes.map((joke, index) => (
          <li key={index}>{joke.joke}</li>
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
