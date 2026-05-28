import './App.css'
import { useNavigate } from 'react-router'

function App() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen px-6 py-12 text-stone-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        <span className="badge">Shuru Theme</span>
        <h1 className="display">Hello world</h1>
        <p className="body-text max-w-2xl text-stone-700">
          This project now uses the Shuru global theme, the Playwrite GB J font loaded from <code>src/assets/font/Playwrite_GB_J</code>, and shared component styles.
        </p>
        <div className="flex flex-wrap gap-4">
          <button type="button" className="btn-primary" onClick={() => navigate('/primary')}>Primary</button>
          <button type="button" className="btn-outline" onClick={() => navigate('/outline')}>Outline</button>
          <button type="button" className="btn-ghost" onClick={() => navigate('/ghost')}>Ghost</button>
        </div>
        <div className="callout">
          <p className="heading-3">Version ready in .env</p>
          <p className="small-text mt-2">
            Access env values from <code>src/config/shuru_env.ts</code> across the app.
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
