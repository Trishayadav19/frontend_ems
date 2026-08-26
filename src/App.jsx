import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from "react-router-dom"
import Loginlanding from "./pages/Loginlanding"
import Dashboard from "./pages/Dashboard"
import Employee from "./pages/Employee"
import Attendance from "./pages/Attendance"
import Leave from "./pages/Leave"
import Payslips from "./pages/Payslips"
import Setting from "./pages/Setting"
import Printpayslip from "./pages/Printpayslip"
import Layout from "./pages/Layout"
import LoginForm from "./components/LoginForm"
const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/Login" element={<Loginlanding />} />
        <Route path="/login/admin" element={<LoginForm role="admin" title="Admin Portal" subtitle="Sign in to manage the organization"/>} />
        <Route path="/login/employee" element={<LoginForm role="employee" title="Employee Portal" subtitle="Sign in to access your  account"/>} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/setting" element={<Setting />} />
        </Route>

        <Route path="/print/payslips/:id" element={<Printpayslip />} />
        <Route path="*" element={<Navigate to='/dashboard' replace />} />

      </Routes> 
    </>
  )
}

export default App