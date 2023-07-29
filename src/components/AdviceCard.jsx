import { useAdviceSlip } from '../hooks/useAdviceSlip.js';
import React from 'react';

export function AdviceCard() {
  const { id, advice, refreshAdvice } = useAdviceSlip();

  const handleClick = async () => {
    refreshAdvice();
  };
  return (
    <>
      <h1>Advice generator app</h1>
      {id && <h3>{id}</h3>}
      {advice && <p>{advice}</p>}
      <button onClick={handleClick}>Get new adivce</button>
    </>
  );
}
