"use client";

import { useState } from "react";
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  return (
    <div>
      <div>
        <h1>🌌 Unleash Anime Inspiration With A Tap! 🎯</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="Enter anime name..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Get Quote</button>
      </form>
      <p>Created by Korrier with ❤️</p>
    </div>
  );
}
