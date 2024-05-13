import { FooterPage, NavBarPage } from "./estructure/indexEstructure"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Tienda, Noticias, PreguntasFrecuentes } from "./pages/pagesIndex"; 
import { SideBarButton, TopButton } from "./components";
import './index.css'
function App() {
  return (
    
      <div className="App">
       
            <nav className="flex flex-row justify-between fixed top-0 left-0 right-0 z-10 max-w-screen-content bg-tertiary-opacity h-10">
              <SideBarButton />
              

              <NavBarPage />
                <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="/noticias" element={<Noticias/>} />
              <Route path="/preguntasFrecuentes" element={<PreguntasFrecuentes/>}/>
             </Routes> 
             
            </nav>
       
       
        <footer className="flex flex-col fixed bottom-0 left-0 right-0 max-w-screen-content bg-tertiary-opacity">
          <TopButton  />
          <FooterPage />
        </footer>
      </div>
   
  )
}

export default App
