import { useState, useEffect } from "react";

function usePrintStatus(text) {
  const [printedText, setPrintedText] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPrintedText(text + " is ONLINEE!!");
      // console.log("PROCESSS...");
    }, 2000);
  }, [text]);

  return printedText;
}

export default usePrintStatus;
