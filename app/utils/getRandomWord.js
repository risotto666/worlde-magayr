import { wordList } from "../lib/words";

// Dátumalapú szóválasztás (minden nap ugyanaz a szó, mindenkinél)
export function getDailyWord() {
  const today = new Date();
  const dayIndex = Math.floor(today.getTime() / (1000 * 60 * 60 * 24));
  const index = dayIndex % wordList.length;
  return wordList[index];
}
