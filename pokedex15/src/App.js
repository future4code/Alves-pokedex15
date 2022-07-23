import Router from './components/Routes/Routes'
import Header from './components/Header/Header'
import GlobaState from './Global/GlobaState'

function App() {
  return (
    <div>
      <GlobaState>
        <Router />
      </GlobaState>
    </div>
  )
}

export default App
