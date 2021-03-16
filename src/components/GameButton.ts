import styled from "styled-components";
import {Team} from "../types/enums";
import {getButtonImage, gameGrey, gameWhite} from "../services/colorsProvider";
import rightBall from "../resources/bulle_Droite.png";
import leftBall from "../resources/bulle_Gauche.png";
import "../App.css"

export const GameButton = styled.button`
  color:${gameWhite};
  background-image: url(${(props: {team:Team|undefined}) => getButtonImage(props.team)});
  background-size: 100% 100%;
  width: 10vw;
  height: calc(var(--upper-height) / 4);
  font-size: 1.5vw;
  &:hover:enabled {
    color: ${gameGrey};
  }
  &:disabled {
    opacity: 0.3;
  }
`;

export const LeftBallButton = styled.button`
    color:transparent;
    background-image: url(${leftBall});
    background-size: 100% 100%;
    width : 100%;
    height : 90%;
    margin : auto auto;
    font-size: 0.75vw;
    text-align: left;
    padding: 0.25vw; 
    &:hover:enabled {
        color:${gameGrey}
    }  
`;

export const RightBallButton = styled.button`
    color:transparent;
    background-image: url(${rightBall});
    background-size: 100% 100%;
    width : 100%;
    height : 90%;
    margin : auto auto;
    font-size: 0.75vw;
    text-align: right;
    padding: 0.25vw;    
    &:hover:enabled {
        color:${gameGrey}
    }  
`;