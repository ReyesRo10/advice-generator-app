import dividerDesktop from '../assets/pattern-divider-desktop.svg';
import dividerMobile from '../assets/pattern-divider-mobile.svg';
import dice from '../assets/icon-dice.svg';
import { useAdviceSlip } from '../hooks/useAdviceSlip.js';
import '../styles/adviceCard.css';

export function AdviceCard() {
  const { id, advice, refreshAdvice } = useAdviceSlip();

  const handleClick = async () => {
    refreshAdvice();
  };
  return (
    <main className='container'>
      {id && <h1 className='id'>ADVICE #{id}</h1>}
      {advice && <p className='advice'>{advice}</p>}
      <picture>
        <sorce media='(min-width:768px)' srcSet={dividerDesktop} />
        <img src={dividerMobile} />
      </picture>
      <button onClick={handleClick}>
        <img src={dice} />
      </button>
    </main>
  );
}
