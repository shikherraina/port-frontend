"use client";
import { useEffect } from "react";
export default function Page() {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    if (!BACKEND_URL) {
      console.warn("Backend URL not set");
      return;
    }
    fetch(`${BACKEND_URL}/health`)
      .then((res) => res.json())
      .then((data) => console.log("Backend health:", data))
      .catch((err) => console.error("Error fetching backend health:", err));
  }, [BACKEND_URL]);

  return <div>Work in progress...</div>;
}
