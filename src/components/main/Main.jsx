import React, { useState } from "react";
import {
  ActionButton,
  Instruction,
  MainWrapper,
  RecordingMessage,
  Text,
} from "./Main.styles";

export const Main = () => {
  const [userSpeech, setUserSpeech] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  if ("webkitSpeechRecognition" in window) {
    // eslint-disable-next-line no-undef
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "es-ES";
    recognition.continuos = true;
    recognition.onresult = (event) => {
      for (const result of event.results) {
        setUserSpeech(result[0].transcript);
      }
    };
  } else {
    console.log("Speech Recognition Not Available");
  }

  const handleRec = () => {
    recognition.start();
    setIsRecording(true);
    setUserSpeech("");
  };

  const handleStop = () => {
    recognition.stop();
    setIsRecording(false);
  };

  return (
    <MainWrapper>
      <Instruction>
        Presiona REC y di algunas palabras en español. Presiona STOP para
        obtener el texto de la grabación.
      </Instruction>
      {isRecording ? (
        <>
          <ActionButton onClick={handleStop}>STOP</ActionButton>
          <RecordingMessage>Recording...</RecordingMessage>
        </>
      ) : (
        <ActionButton onClick={handleRec}>REC</ActionButton>
      )}
      <Text>{userSpeech}</Text>
    </MainWrapper>
  );
};
