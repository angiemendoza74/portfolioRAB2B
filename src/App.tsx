import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Stars from './components/Stars/Stars';

export default function App() {
  return (
    <>
      <Stars />
      <Header />
      <main className="main">
        <Portfolio />
      </main>
    </>
  );
}
