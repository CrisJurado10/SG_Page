import { Navbar } from './components/layout/Navbar';
import { HeroParallax } from './components/features/HeroParallax';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroParallax />
        <div className="h-[150vh] bg-white flex items-start justify-center pt-20">
          <h2 className="text-3xl font-bold text-gray-800">Espacio para el Masonry Grid</h2>
        </div>
      </main>
    </div>
  )
}

export default App;