import { FiCheck, FiPause } from "react-icons/fi";
import { Controller } from "react-tetris";
import { State } from "react-tetris/lib/models/Game";
import { PauseButton } from "./styledComponent";

const PlayButton = ({
  state,
  controller,
}: {
  state: State;
  controller: Controller;
}) => {
  switch (state) {
    case "PAUSED":
      return (
        <PauseButton>
          <FiPause />
          <span>멈춤</span>
        </PauseButton>
      );
    case "PLAYING":
      return (
        <PauseButton onClick={controller.pause}>
          <FiPause />
          <span>멈추기</span>
        </PauseButton>
      );
    case "LOST":
      return (
        <PauseButton>
          <FiCheck />
          <span>게임 종료</span>
        </PauseButton>
      );
  }
};
export default PlayButton;
