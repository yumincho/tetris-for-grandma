import { useEffect, useRef } from "react";
import { Controller } from "react-tetris";
import {
  ControlBoard,
  ControlButton,
  FullGameBoard,
  Dialog,
  Header,
  PauseButton,
  Stack,
} from "./styledComponent";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiRotateCw,
  FiStar,
} from "react-icons/fi";
import PlayButton from "./PlayButton";
import { State } from "react-tetris/lib/models/Game";

const TetrisInner = ({
  Gameboard,
  points,
  state,
  controller,
}: {
  Gameboard: React.ComponentType;
  PieceQueue: React.ComponentType;
  points: number;
  linesCleared: number;
  state: State;
  controller: Controller;
}) => {
  const gameOverDialogRef = useRef<HTMLDialogElement>(null);
  const pauseDialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (state === "LOST") {
      gameOverDialogRef.current?.showModal();
    } else if (state === "PAUSED") {
      pauseDialogRef.current?.showModal();
    } else {
      gameOverDialogRef.current?.close();
      pauseDialogRef.current?.close();
    }
  }, [state]);

  const handleRestart = () => {
    gameOverDialogRef.current?.close();
    controller.restart();
  };

  const handleResume = () => {
    pauseDialogRef.current?.close();
    controller.resume();
  };

  const gameOverDialog = (
    <Dialog ref={gameOverDialogRef}>
      <h3>❤️ 게임 종료 ❤️</h3>
      <div>{points} 점</div>
      {points < 300 ? (
        <div>다음에는 더 잘할 수 있어요!</div>
      ) : points < 1000 ? (
        <div>실력이 늘고 있어요!</div>
      ) : (
        <div>대단해요!</div>
      )}
      <PauseButton onClick={handleRestart}>새 게임 시작하기</PauseButton>
    </Dialog>
  );

  const pauseDialog = (
    <Dialog ref={pauseDialogRef}>
      <PauseButton onClick={handleRestart}>새 게임 시작하기</PauseButton>
      <PauseButton onClick={handleResume} backgroundColor="#bdddff">
        <FiPlay />
        <span>계속하기</span>
      </PauseButton>
    </Dialog>
  );

  return (
    <div>
      <FullGameBoard direction="column" disabled={state === "PAUSED"}>
        <Header justifyContent="space-between" marginBottom={8}>
          <Stack spacing={4}>
            <FiStar size={24} /> 점수: {points}
          </Stack>
          <PlayButton state={state} controller={controller} />
        </Header>
        <Gameboard />

        <ControlBoard justifyContent="space-between" alignItems="center">
          <ControlButton onClick={controller.flipClockwise}>
            <FiRotateCw size={24} />
          </ControlButton>
          <Stack direction="column" spacing={8}>
            <Stack spacing={24} justifyContent="center">
              <ControlButton onClick={controller.moveLeft}>
                <FiChevronLeft size={24} />
              </ControlButton>
              <ControlButton onClick={controller.moveRight}>
                <FiChevronRight size={24} />
              </ControlButton>
            </Stack>
            <ControlButton onClick={controller.moveDown}>
              <FiChevronDown size={24} />
            </ControlButton>
          </Stack>
        </ControlBoard>
      </FullGameBoard>
      {state === "LOST" && gameOverDialog}
      {state === "PAUSED" && pauseDialog}
    </div>
  );
};
export default TetrisInner;
