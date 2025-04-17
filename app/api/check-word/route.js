import { getDailyWord } from "@/app/utils/getRandomWord";
import { NextResponse } from "next/server";

export function getFeedback(secret, guess) {
  const feedback = Array(5).fill("gray");
  const used = Array(5).fill(false);

  const guessArr = guess.toUpperCase().split("");
  const secretArr = secret.toUpperCase().split("");

  // Zöld betűk
  for (let i = 0; i < 5; i++) {
    if (guessArr[i] === secretArr[i]) {
      feedback[i] = "green";
      used[i] = true;
    }
  }

  // Sárga betűk
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
  const word = getDailyWord(); // <- Itt kapod meg a napi szót

  const feedback = getFeedback(word, guess);
  const isCorrect = guess.toUpperCase() === word.toUpperCase();

  return NextResponse.json({ feedback, isCorrect, word });
}
