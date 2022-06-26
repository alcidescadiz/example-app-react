import { Routes, Route, HashRouter} from 'react-router-dom'
import Conmemoracion from './components/commemoracion.js';
import MenuApp from './components/layaut/index.js'
import Pie from './components/layaut/pie.js';
import Lectura from './components/lectura.js';
import LecturaConme from './components/LecturaConme.js';
import Libros from './components/libros.js';
import Relatos from './components/relatos.js';
import Videos from './components/videos.js';
import  {CheckedContextComponent} from './components/checkedContex/index'


function App() {
  return (
      <HashRouter>
            <CheckedContextComponent>
              <MenuApp />
              <Routes>
                  <Route  path='/' >
                    <Route index element={<Libros  />} />
                    <Route path='lectura/:id/:idl/:inicio/:fin' element={<Lectura />} />
                    <Route path='relatos/:id/:inicio/:fin' element={<Relatos />} />
                    <Route path='videos/:id/:idl/:inicio/:fin' element={<Videos />} />
                  </Route>
                  <Route path='/conmemoracion' >
                    <Route index element={<Conmemoracion />} />
                    <Route path='lecturaconme/:id' element={<LecturaConme />} />
                  </Route> 
                  <Route path='*' element={<Libros  />} />
              </Routes>
              <Pie />
            </CheckedContextComponent>
      </HashRouter>
  );
}

export default App;
