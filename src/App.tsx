import { Navbar } from './components/layout/Navbar';
import { HeroParallax } from './components/features/HeroParallax';
import { MasonryGrid } from './components/features/MasonryGrid';
import { Footer } from './components/layout/Footer';

function App() {
  return (

    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <HeroParallax />
        <MasonryGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App;