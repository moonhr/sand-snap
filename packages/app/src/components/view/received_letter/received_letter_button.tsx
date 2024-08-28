import React from "react";
import { useView } from "../../../app/(organism)/view/context/view.context";

export const ReceivedLetterButton = () => {
  const { onLetterView, setOnLetterView, receivedLetter, setReceivedLetter } =
    useView();

  const handleCheckReceivedMessage = () => {
    setReceivedLetter(true);
    setOnLetterView(false);
  };

  return (
    <div>
      {/* 상위 컴포넌트에서 onLetterView를 true로 변경하면 버튼이 활성화됨. */}
      <button onClick={handleCheckReceivedMessage} disabled={!onLetterView}>
        편지가 왔도다! 누르소서
      </button>
    </div>
  );
};
