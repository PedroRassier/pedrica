import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SvgLoader = styled.svg`
  width: 100px;
  height: 100px;
  animation: ${rotate} 1.5s linear infinite;
`;

export function DogLoader() {
  return (
    <LoaderWrapper>
      <SvgLoader viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="brown"
          strokeWidth="5"
          fill="none"
        />
        <text x="50" y="55" fontSize="20" textAnchor="middle" fill="brown">
          🐶
        </text>
      </SvgLoader>
    </LoaderWrapper>
  );
}
