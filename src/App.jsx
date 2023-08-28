import { AdviceCard } from './components/AdviceCard';
import { Footer } from './components/Footer';

function App() {
  return (
    <div
      className='bg-dark-blue h-screen w-full flex flex-col items-center justify-center px-4'
      role='app'
    >
      <AdviceCard />
      <Footer />
    </div>
  );
}

export default App;
