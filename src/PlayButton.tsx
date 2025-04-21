import { FiPause, FiPlay } from "react-icons/fi";
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
        <PauseButton onClick={controller.resume}>
          <FiPlay />
          <span>계속하기</span>
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
        <PauseButton onClick={controller.restart}>
          <FiPlay />
          <span>새 게임</span>
        </PauseButton>
      );
  }
};
export default PlayButton;
