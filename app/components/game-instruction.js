const GameInstructions = () => {
  return (
    <div className="p-4 sm:p-6 mb-1  bg-gray-100 rounded-xl shadow-md max-w-md mx-auto ">
      <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">
        🧩 Hogyan játssz?
      </h2>
      <p className="text-sm sm:text-base mb-2 text-justify">
        A <strong>Wordle</strong> egy szórakoztató szó- és logikai játék. A cél,
        hogy 5 próbálkozásból kitaláld a titkos 5 betűs magyar szót.
      </p>
      <ul className="list-disc pl-5 space-y-0 text-sm sm:text-base">
        <li>
          <strong>1.</strong> Minden tipp egy 5 betűs magyar szó.
        </li>
        <li>
          <strong>2.</strong> A visszajelzések segítenek:
          <span className="ml-1 inline-block bg-green-400 text-white px-2 py-0.5 rounded text-xs">
            Zöld
          </span>{" "}
          = jó helyen,
          <span className="ml-1 inline-block bg-yellow-200 text-black px-2 py-0.5 rounded text-xs">
            Sárga
          </span>{" "}
          = benne van, de rossz helyen,
          <span className="ml-1 inline-block bg-slate-400 text-white px-2 py-0.5 rounded text-xs">
            Szürke
          </span>{" "}
          = nincs benne.
        </li>
        <li>
          <strong>3.</strong> Ha 5 próbálkozás után nem találtad el, vesztettél.
        </li>
        <li>
          <strong>4.</strong> Ha eltaláltad, nyertél!
        </li>
      </ul>
    </div>
  );
};

export default GameInstructions;
