"use client";
import React, { useState, useEffect } from "react";
import { useView } from "./context/view.context";
import { useSocket } from "../../context/socket_context";
import { WriteLetterButton } from "@app/src/components/view/write_letter/write_letter_button";
import { WirteLetterView } from "@app/src/components/view/write_letter/write_letter_view";
import { ReceivedLetterButton } from "@app/src/components/view/received_letter/received_letter_button";
import { ReceivedLetterView } from "@app/src/components/view/received_letter/received_letter_view";

const View: React.FC = () => {
  const socket = useSocket();
  const {
    onLetterView,
    setOnLetterView,
    receivedLetter,
    setReceivedLetter,
    sendLetter,
    setSendLetter,
  } = useView();

  const [receivedMessage, setReceivedMessage] = useState<string | null>(null);

  useEffect(() => {
    if (socket) {
      socket.emit("initial_data");

      socket.on("latte", (message: { [key: string]: string }) => {
        setOnLetterView(true);
        setReceivedMessage(message.content);
      });
    }

    return () => {
      socket?.off("latte");
      socket?.disconnect();
    };
  }, [socket]);

  return (
    <main className="w-[692px] h-[494px] bg-sky-200">
      <h2>Welcome to the Letter Page</h2>
      {onLetterView ? <ReceivedLetterButton /> : null}
      {receivedLetter ? (
        <ReceivedLetterView letterMessage={receivedMessage!} />
      ) : null}
      <WriteLetterButton />
      {sendLetter ? <WirteLetterView /> : null}
    </main>
  );
};

export default View;
