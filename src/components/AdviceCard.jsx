import dividerDesktop from '../assets/pattern-divider-desktop.svg';
import dividerMobile from '../assets/pattern-divider-mobile.svg';
import dice from '../assets/icon-dice.svg';
import { useAdviceSlip } from '../hooks/useAdviceSlip.js';

export function AdviceCard() {
  const { id, advice, refreshAdvice } = useAdviceSlip();

  const handleClick = async () => {
    refreshAdvice();
  };
  return (
    <section className='bg-dark-graylish w-full max-w-md p-10 sm:10 rounded-large text-center relative'>
      {id && (
        <h1 className='text-neon-green text-xs font-extrabold uppercase tracking-large mb-6'>
          advice #{id}
        </h1>
      )}
      {advice && (
        <p className='text-light-cyan font-extrabold text-3xl '>{advice}</p>
      )}

      <img
        className='my-6 hidden md:block mx-auto'
        src={dividerDesktop}
        alt='divider'
      />

      <img
        className='my-6 md:hidden mx-auto'
        src={dividerMobile}
        alt='divider'
      />

      <button
        className='bg-neon-green p-5 border-none rounded-full absolute left-1/2 -translate-x-1/2 -bottom-[30px] cursor-pointer ease-in-out duration-300 hover:shadow-[0_0_20px_1px_rgba(82,255,168,1)]'
        onClick={handleClick}
        aria-label='Name'
      >
        <img src={dice} alt='dice' />
      </button>
    </section>
  );
}
