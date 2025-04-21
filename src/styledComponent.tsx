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

const buttonSize = 52;

export const ControlButton = styled.button`
  height: ${buttonSize}px;
  width: ${buttonSize}px;
  border: 2px solid #ddd;
  padding: 0;
`;

export const ControlBoard = styled(Stack)`
  width: 100%;
`;

export const Dialog = styled.dialog`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
  border: 2px solid #ddd;
  background-color: white;
  border-radius: 8px;
  justify-items: center;
  position: fixed;
  &:backdrop {
    background: rgb(0 0 0 / 20%);
  }
`;

export const FullGameBoard = styled(Stack)<{ disabled?: boolean }>`
  display: flex;
  gap: 1rem;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  width: 80vw;
`;

export const PauseButton = styled.button<{ backgroundColor?: string }>`
  background-color: ${(props) => props.backgroundColor || "#f5f5f5"};
  display: flex;
  border: 2px solid #ddd;
  height: fit-content;
  align-items: center;
  justify-content: center;
  min-width: 9rem;
  flex-shrink: 0;
  padding: 0.5rem 1rem;
  span {
    flex: 1;
  }
`;

export const Header = styled(Stack)`
  width: 100%;
`;
