import { useAdviceSlip } from '../hooks/useAdviceSlip.js';
import React from 'react';
import '../styles/adviceCard.css';

export function AdviceCard() {
  const { id, advice, refreshAdvice } = useAdviceSlip();

  const handleClick = async () => {
    refreshAdvice();
  };
  return (
    <main>
      {id && <h3 className='id'>{id}</h3>}
      {advice && <p className='advice'>{advice}</p>}
      <button onClick={handleClick}>Get new adivce</button>
    </main>
  );
}
