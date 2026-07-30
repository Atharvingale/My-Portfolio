import React, { useEffect, useState } from "react";
import { BOOT_LINES } from "../data";

const Terminal = () => {
  const [displayed, setDisplayed] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= BOOT_LINES.length) return;
    const line = BOOT_LINES[lineIdx];

    if (charIdx <= line.length) {
      const t = setTimeout(() => {
        setCurrentText(line.slice(0, charIdx));
        setCharIdx((v) => v + 1);
      }, lineIdx === BOOT_LINES.length - 1 ? 45 : 14);
      return () => clearTimeout(t);
    }
    // line finished
    const pause = setTimeout(() => {
      setDisplayed((prev) => [...prev, line]);
      setCurrentText("");
      setCharIdx(0);
      setLineIdx((v) => v + 1);
    }, 80);
    return () => clearTimeout(pause);
  }, [charIdx, lineIdx]);

  return (
    <div className="terminal" data-testid="hero-terminal" role="status" aria-live="polite">
      <div className="terminal-head">
        <div className="dots"><span /><span /><span /></div>
        <div>SYS.BOOT // NODE-ARRAY_07</div>
      </div>
      {displayed.map((l, i) => (
        <div key={i} className={`terminal-line ${l.startsWith(">") ? "ready" : ""}`}>{l}</div>
      ))}
      {lineIdx < BOOT_LINES.length && (
        <div className={`terminal-line ${BOOT_LINES[lineIdx]?.startsWith(">") ? "ready" : ""}`}>
          {currentText}
          <span className="blink">█</span>
        </div>
      )}
    </div>
  );
};

export default Terminal;
