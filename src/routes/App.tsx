import { useState } from 'react'
import rainbowFernLogo from '../assets/fern-colors-web.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mt-0 mr-auto ml-auto mb-0 relative">
      <div className="flex-auto rounded-xl bg-white">
        <div>
          <a href="#" target="_blank">
            <img src={rainbowFernLogo} className="logo rainbowfern" alt="Rainbowfern logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
