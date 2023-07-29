const ADVICESLIP_ENDPOINT = 'https://api.adviceslip.com/advice';

export const getAdviceSlip = async () => {
  const res = await fetch(ADVICESLIP_ENDPOINT);
  const data = await res.json();
  const { slip } = data;
  return slip;
};
