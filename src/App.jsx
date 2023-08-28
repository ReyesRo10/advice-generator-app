import { AdviceCard } from './components/AdviceCard';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className='bg-dark-blue h-screen w-full flex flex-col items-center justify-center px-4'>
      <AdviceCard />
      <Footer />
    </main>
  );
}

export default App;
