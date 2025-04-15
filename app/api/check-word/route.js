import { NextResponse } from "next/server";
export function getFeedback(secret, guess) {
  const feedback = Array(5).fill("gray");
  const used = Array(5).fill(false); // titkos szó betűinek használtsága

  const guessArr = guess.toUpperCase().split("");
  const secretArr = secret.toUpperCase().split("");

  // Először zöldek (jó betű, jó helyen)
  for (let i = 0; i < 5; i++) {
    if (guessArr[i] === secretArr[i]) {
      feedback[i] = "green";
      used[i] = true;
    }
  }

  // Aztán sárgák (jó betű, rossz helyen), de csak ha nem lett már használva
  for (let i = 0; i < 5; i++) {
    if (feedback[i] === "green") continue;
    for (let j = 0; j < 5; j++) {
      if (!used[j] && guessArr[i] === secretArr[j]) {
        feedback[i] = "yellow";
        used[j] = true;
        break;
      }
    }
  }

  return feedback;
}

export async function POST(req) {
  const { guess } = await req.json();
  const word = "MÁJAS"; // Később: getTodayWord()

  const feedback = getFeedback(word, guess);

  const isCorrect = guess.toUpperCase() === word;

  return NextResponse.json({ feedback, isCorrect, word });
}
