import { useEffect, useRef } from "react";
import { Controller } from "react-tetris";
import {
  ControlButton,
  FullGameBoard,
  GameOverDialog,
  Stack,
} from "./styledComponent";
import {
  FiChevronDown,
  FiChevronLeft,
  FiChevronRight,
  FiCrosshair,
  FiRotateCw,
  FiStar,
} from "react-icons/fi";
import PlayButton from "./PlayButton";
import { State } from "react-tetris/lib/models/Game";

const TetrisInner = ({
  Gameboard,
  PieceQueue,
  points,
  linesCleared,
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
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    console.log("state", state);
    console.log("dialogRef", dialogRef);
    dialogRef.current?.close();
    if (!!dialogRef && state === "LOST") {
      dialogRef.current?.showModal();
    }
  }, [state]);

  const handleRestart = () => {
    dialogRef.current?.close();
    controller.restart();
  };

  return (
    <div>
      <Stack justifyContent="space-between" marginBottom={24}>
        <Stack direction="column" spacing={4} alignItems="flex-start">
          <Stack spacing={4}>
            <FiStar /> 점수: {points}
          </Stack>
          <Stack spacing={4}>
            <FiCrosshair /> 지운 줄 개수: {linesCleared}
          </Stack>
        </Stack>
        <PlayButton state={state} controller={controller} />
      </Stack>
      <FullGameBoard direction="column" disabled={state === "PAUSED"}>
        <Stack>
          <Gameboard />
          <PieceQueue />
        </Stack>

        <Stack justifyContent="space-between" alignItems="center">
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
        </Stack>
      </FullGameBoard>
      {state === "LOST" && (
        <GameOverDialog ref={dialogRef}>
          <h2>게임 종료!</h2>
          <button onClick={handleRestart}>새 게임 시작하기</button>
        </GameOverDialog>
      )}
    </div>
  );
};
export default TetrisInner;
