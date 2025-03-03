import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const flipAnimation = keyframes`
  0% { transform: rotateX(0deg); opacity: 1; }
  50% { transform: rotateX(90deg); opacity: 0; }
  100% { transform: rotateX(0deg); opacity: 1; }
`;

const TimeSquareWrapper = styled.div`
  border-radius: 1rem;
  background-color: aliceblue;
  border: 3px solid #292928;
  padding: 1rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 8rem;
  height: fit-content;
  perspective: 1000px;

  h2 {
    font-size: 4rem;
    animation: ${flipAnimation} 0.6s ease-in-out;
  }
  p {
    font-size: 2rem;
  }
`;

function TimeSquare({ type, time }) {
  const [displayTime, setDisplayTime] = useState(time);

  useEffect(() => {
    setDisplayTime(time);
  }, [time]);

  return (
    <TimeSquareWrapper>
      <h2>{displayTime}</h2>
      <p>{type}</p>
    </TimeSquareWrapper>
  );
}

export default TimeSquare;
