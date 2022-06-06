import { Routes, Route, HashRouter} from 'react-router-dom'
import Conmemoracion from './components/commemoracion.js';
import MenuApp from './components/layaut/index.js'
import Pie from './components/layaut/pie.js';
import Lectura from './components/lectura.js';
import LecturaConme from './components/LecturaConme.js';
import Libros from './components/libros.js';
import Relatos from './components/relatos.js';
import Videos from './components/videos.js';

function App() {
  return (
      <HashRouter>
            <MenuApp />
              <Routes>
                <Route path='/' element={<Libros  />} />
                <Route path='/lectura/:id/:idl/:inicio/:fin' element={<Lectura />} />
                <Route path='/relatos/:id/:inicio/:fin' element={<Relatos />} />
                <Route path='/videos/:id/:idl/:inicio/:fin' element={<Videos />} />
                <Route path='/conmemoracion' element={<Conmemoracion />} />
                <Route path='/lecturaconme/:id' element={<LecturaConme />} />
                <Route path='/*' element={<Libros  />} />
              </Routes>
            <Pie />
      </HashRouter>
  );
}

export default App;
