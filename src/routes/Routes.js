import React from "react";
import { Route, Routes } from 'react-router-dom'
import Checkout from '../pages/checkout/Checkout.js'
import Dashboard from '../pages/dashboard/Dashboard.js'

import Layout from '../pages/layout/Layout'

export default function AppRoutes() {

    return (<>
    <Layout />
        <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/checkout' element={<Checkout />} />
        </Routes>
    </>)
}