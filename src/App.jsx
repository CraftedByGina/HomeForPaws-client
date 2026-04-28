
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './shared/Header.jsx'
import Footer from './shared/Footer.jsx'
import Home from './components/Home.jsx'
import Pets from './components/Pets.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<Pets />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
