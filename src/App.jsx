import NavBar from './components/Navbar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'

function App() {
  return (
    <div className='container-app'>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a Video Club Coderhouse"} />
    </div>
  )
}

export default App
