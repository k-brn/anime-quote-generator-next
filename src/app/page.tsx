"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
export default function Home() {
  const [inputVal, setInputVal] = useState("");
  const { push } = useRouter();
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/qoute/${inputVal}`);
  };
  return (
    <div>
      <div>
        <h1>🌌 Unleash Anime Inspiration With A Tap! 🎯</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter anime name..."
          value={inputVal}
          className="text-black"
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button type="submit">Get Quote</button>
      </form>
      <p>Created by Korrier with ❤️</p>
    </div>
  );
}
