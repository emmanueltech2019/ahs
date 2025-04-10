import { useState } from "react";

const TextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakText = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const synth = window.speechSynthesis;
      const allText = document.body.innerText; // Grab all text on the page
      const utterance = new SpeechSynthesisUtterance(allText);

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      synth.speak(utterance);
    } else {
      alert("Text-to-Speech is not supported in your browser.");
    }
  };

  const stopSpeaking = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className=" p-3 bg-[#439dd0] text-white rounded-lg cursor-pointer">
      {isSpeaking ? (
        <button onClick={stopSpeaking}>🛑 Stop Reading</button>
      ) : (
        <button onClick={speakText}>🔊 Read Page</button>
      )}
    </div>
  );
};

export default TextToSpeech;
