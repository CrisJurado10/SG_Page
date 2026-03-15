import { Navbar } from './components/layout/Navbar';
import { HeroParallax } from './components/features/HeroParallax';
import { MasonryGrid } from './components/features/MasonryGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroParallax />
        <MasonryGrid />
      </main>
    </div>
  )
}

export default App;