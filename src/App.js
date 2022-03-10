import { ChakraProvider } from "@chakra-ui/react"
import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login"
import Success from "./Success"

export default function App() {
  const [user, setUser] = useState(false)

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />} />
          <Route path="/success" element={<Success user={user} />} />
          <Route path="*" element={<p>Wrong Path: 404!</p>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  )
}
