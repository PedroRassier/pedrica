import styled from "styled-components";
import TimeSquare from "./TimeSquare";

const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  height: 80vh;
`;

function Clock({ Ytime, Mtime, Dtime, Htime, Mitime, Stime }) {
  return (
    <ClockWrapper>
      <TimeSquare type="Anos" time={Ytime} />
      <TimeSquare type="Meses" time={Mtime} />
      <TimeSquare type="Dias" time={Dtime} />
      <TimeSquare type="Horas" time={Htime} />
      <TimeSquare type="Minutos" time={Mitime} />
      <TimeSquare type="Segundos" time={Stime} />
    </ClockWrapper>
  );
}
export default Clock;
