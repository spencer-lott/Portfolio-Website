import React from 'react'
import { Route, Routes } from "react-router-dom"
import './App.css'
import { BootstrapNav } from './components/nav/Navbar'
import { ApplicationViews } from './views/ApplicationViews'

function App() {

  return (
        <Routes>
            <Route path="*" element={
                <>
                    <BootstrapNav />
                    <ApplicationViews />
                </>
            } />
            </Routes>
  )
}

export default App;

