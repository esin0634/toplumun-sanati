import React from "react"
import { Intro } from "@/app/components/Intro"
import { Navbar } from "@/app/components/Navbar"


export default function Home() {
    return (
        <div className=" flex flex-col h-screen">
            <Navbar />
            <Intro />
        </div>
  )
}
