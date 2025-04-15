"use client";
import { useState } from "react";
import GameInstructions from "./components/game-instruction";
import { Button, Tooltip } from "flowbite-react";

export default function HomePage() {
  const [guesses, setGuesses] = useState([]);
  const [input, setInput] = useState("");
  const [feedbacks, setFeedbacks] = useState([]);

  const [word, setWord] = useState("");
  const handleSubmit = async () => {
    if (input.length !== 5) return;

    const res = await fetch("/api/check-word", {
      method: "POST",
      body: JSON.stringify({ guess: input }),
    });
    const data = await res.json();

    const newGuesses = [...guesses, input.toUpperCase()];
    const newFeedbacks = [...feedbacks, data.feedback];
    setWord(data.word);
    setGuesses(newGuesses);
    setFeedbacks(newFeedbacks);
    setInput("");

    if (data.isCorrect) {
      setTimeout(() => {
        alert("Gratulálok, nyertél!");
        resetGame();
      }, 100);
    }

    if (newGuesses.length === 5 && !data.isCorrect) {
      setTimeout(() => {
        alert(`Sajnálom, nem találtad el! 😢 A szó: ${word}`);
        resetGame();
      }, 100);
    }
    const resetGame = () => {
      setGuesses([]);
      setFeedbacks([]);
      setInput("");
    };
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      <GameInstructions />

      <div className="grid grid-rows-5 gap-2 mt-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div className="flex gap-1" key={i}>
            {Array.from({ length: 5 }).map((_, j) => {
              const letter = guesses[i]?.[j] || "";
              const feedback = feedbacks[i]?.[j] || "white";

              const colorClass = {
                green: "bg-green-500 text-white",
                yellow: "bg-yellow-400 text-black",
                gray: "bg-gray-400 text-white",
                white: "bg-white text-black",
              }[feedback];

              return (
                <div
                  key={j}
                  className={`w-12 h-12 flex items-center justify-center border border-gray-300 text-xl font-bold ${colorClass}`}
                >
                  {letter}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-6">
        <input
          type="text"
          maxLength={5}
          value={input}
          onChange={(e) => setInput(e.target.value.toUpperCase())}
          className="border p-2 w-40 text-center"
        />

        <Button
          onClick={handleSubmit}
          className="bg-blue-500 text-white disabled:opacity-55"
          disabled={input.length < 5}
        >
          Küldés
        </Button>
      </div>
    </main>
  );
}
