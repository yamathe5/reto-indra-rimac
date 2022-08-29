import { Navigate, Route, Routes } from "react-router-dom";

import ArmaTuPlanPage from "./pages/ArmaTuPlanPage";
import GraciasPage from "./pages/GraciasPage";

export default function AuthenticatedApp(){
  return(
    <>
      <Routes>
        <Route index element={<Navigate to="arma-tu-plan" />} />
        <Route path="/arma-tu-plan" element={<ArmaTuPlanPage />} />
        <Route path="/gracias" element={<GraciasPage />} />
      </Routes>
    </>
  )
}