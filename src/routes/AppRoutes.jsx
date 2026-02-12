import { HashRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"

//rutas públicas
import {PublicLayout} from "../layouts/PublicLayout.jsx"
const HomePage = lazy(() => import("../pages/HomePage/HomePage"))
const About = lazy(() => import("../pages/About/About"))
const Contact = lazy(() => import("../pages/Contact/Contact"))
const Skills = lazy(() => import("../pages/Skills/Skills"))
const Proyects = lazy(() => import("../pages/Proyects/Proyects"))
const ErrorPage = lazy(() => import("../pages/ErrorPage/ErrorPage"))

export const AppRoutes = () => {

return (
    <HashRouter>
      <Suspense fallback={<h2>Cargando...</h2>}>
      <Routes>
  
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/proyects" element={<Proyects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
            <Route path="/error" element={<ErrorPage />} />
      </Routes>
      </Suspense>
    </HashRouter>  
  )
}
