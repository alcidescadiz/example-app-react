import React, { lazy, Suspense } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Conmemoracion from "./components/commemoracion.js";
import Pie from "./components/layaut/pie.js";
import LecturaConme from "./components/LecturaConme.js";
import Videos from "./components/videos.js";
import LoadingInicial from "./components/loading";
import { CheckedContextComponent } from "./components/checkedContex/index";
const MenuApp = lazy(()=> import("./components/layaut/index.js"))
const Libros = lazy(() => import("./components/libros.js"));
const Relatos = lazy(()=> import("./components/relatos.js")) ;
const Lectura = lazy(()=> import("./components/lectura.js")) ;

function App() {
  return (
    <HashRouter>
      <CheckedContextComponent>
        <Suspense fallback={<LoadingInicial />}>
          <MenuApp />
          <Routes>
            <Route path="/">
              <Route index element={<Libros />} />
              <Route
                path="lectura/:id/:idl/:inicio/:fin"
                element={<Lectura />}
              />
              <Route path="relatos/:id/:inicio/:fin" element={<Relatos />} />
              <Route path="videos/:id/:idl/:inicio/:fin" element={<Videos />} />
            </Route>
            <Route path="/conmemoracion">
              <Route index element={<Conmemoracion />} />
              <Route path="lecturaconme/:id" element={<LecturaConme />} />
            </Route>
            <Route path="*" element={<Libros />} />
          </Routes>
          <Pie />
        </Suspense>
      </CheckedContextComponent>
    </HashRouter>
  );
}

export default App;
