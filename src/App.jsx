import { Routes, Route } from "react-router-dom";
import CompanyRegister from "./components/CompanyRegister";
import CompanyLogin from './components/CompanyLogin';
import EmployeeRegister from './components/EmployeeRegister'
import Dashboard from "./components/Dashboard";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<CompanyRegister/>}></Route>
            <Route path="/employeeRegister" element={<EmployeeRegister/>}></Route>
            <Route path="/companyLogin" element={<CompanyLogin/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
    )
}