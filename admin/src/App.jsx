import './App.css'
import Header from './component/Header/Header'
import Admin from './Pages/Admin'
function App() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Admin />  {/*Render Admin component */}
    </div>
  )
}

export default App
