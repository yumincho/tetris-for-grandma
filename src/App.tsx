import "./App.css";
import Tetris from "react-tetris";
import TetrisInner from "./TetrisBoard";

function App() {
  return (
    <div>
      <Tetris
        keyboardControls={{
          // Default values shown here. These will be used if no
          // `keyboardControls` prop is provided.
          down: "MOVE_DOWN",
          left: "MOVE_LEFT",
          right: "MOVE_RIGHT",
          space: "HARD_DROP",
          z: "FLIP_COUNTERCLOCKWISE",
          x: "FLIP_CLOCKWISE",
          up: "FLIP_CLOCKWISE",
          p: "TOGGLE_PAUSE",
          c: "HOLD",
          shift: "HOLD",
        }}
      >
        {({
          Gameboard,
          PieceQueue,
          points,
          linesCleared,
          state,
          controller,
        }) => {
          return (
            <TetrisInner
              Gameboard={Gameboard}
              PieceQueue={PieceQueue}
              points={points}
              linesCleared={linesCleared}
              state={state}
              controller={controller}
            />
          );
        }}
      </Tetris>
    </div>
  );
}

export default App;
