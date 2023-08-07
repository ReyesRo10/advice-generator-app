import { useEffect, useState } from 'react';
import { getAdviceSlip } from '../services/slips.js';

export function useAdviceSlip() {
  const [id, setID] = useState();
  const [advice, setAdvice] = useState();

  const refreshAdvice = async () => {
    const slip = await getAdviceSlip();
    setID(slip.id);
    setAdvice(slip.advice);
  };
  useEffect(() => {
    refreshAdvice();
  }, []);

  return { id, advice, refreshAdvice };
}
