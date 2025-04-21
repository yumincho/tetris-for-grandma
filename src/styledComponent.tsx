import styled from "@emotion/styled";
import { Property } from "csstype";

export const Stack = styled.div<{
  direction?: Property.FlexDirection;
  justifyContent?: Property.JustifyContent;
  alignItems?: Property.AlignItems;
  spacing?: number;
  marginBottom?: number;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.spacing || 0}px;
  margin-bottom: ${(props) => props.marginBottom || 0}px;
`;

const buttonSize = 44;

export const ControlButton = styled.button`
  height: ${buttonSize}px;
  width: ${buttonSize}px;
  border: 2px solid #ddd;
  padding: 0;
`;

export const GameOverDialog = styled.dialog`
  display: block;
  padding: 2rem;
  border: 2px solid #ddd;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  &:backdrop {
    backdrop-filter: blur(4px);
    background: rgb(0 0 0 / 10%);
  }
`;

export const FullGameBoard = styled(Stack)<{ disabled?: boolean }>`
  display: flex;
  gap: 1rem;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

export const PauseButton = styled.button`
  display: flex;
  border: 2px solid #ddd;
  height: fit-content;
  align-items: center;
  width: 8rem;

  span {
    flex: 1;
  }
`;
