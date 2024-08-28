import React from "react";
import { useView } from "../../../app/(organism)/view/context/view.context";

export const ReceivedLetterView = () =>{
  const { onLetterView, setOnLetterView, receivedLetter, setReceivedLetter } =
    useView();

  return (
    <div>
      
    </div>
  )
}