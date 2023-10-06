"use client";
import { useState } from "react"

export function SubmitProject() {
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")

    const changeProjectName = (e) => {
        setProjectName(e.target.value)
    }
    const changeProjectDescription = (e) => {
        setProjectDescription(e.target.value)
    }
    return (
        <div className="flex min-h-screen flex-col items-center p-24 w-full">
            <p className="font-semibold">Add project</p>
            <input className="p-3 rounded-lg m-2" placeholder={"Name"} onChange={changeProjectName} value={projectName} type="text"/>
            <input className="p-3 rounded-lg m-2" placeholder={"Description"} onChange={changeProjectDescription} value={projectDescription} type="text"/>
        </div>
    )
}