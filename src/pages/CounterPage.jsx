import styled from "styled-components";
import Clock from "../components/Clock";
import { getTimeDifference } from "../func/getTime";
import { useEffect, useState } from "react";

const CounterPageS = styled.div`
  font-size: 4rem;
`;

function CounterPage() {
  const startDate = "2025-02-08T00:00:00"; // Data inicial fixa
  const [time, setTime] = useState(getTimeDifference(startDate, new Date()));

  useEffect(() => {
    // Atualiza imediatamente para evitar atraso na renderização inicial
    setTime(getTimeDifference(startDate, new Date()));

    const interval = setInterval(() => {
      setTime(getTimeDifference(startDate, new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]); // Dependências seguras

  return (
    <CounterPageS className="page">
      <Clock
        Ytime={time.years}
        Mtime={time.months}
        Dtime={time.days}
        Htime={time.hours}
        Mitime={time.minutes}
        Stime={time.seconds}
      />
    </CounterPageS>
  );
}

export default CounterPage;
