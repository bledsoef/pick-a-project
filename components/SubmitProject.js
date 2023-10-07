"use client";
import { useState } from "react"
import { addProject } from "@/viewmodel/Updaters";

export function SubmitProject() {
    const [projectName, setProjectName] = useState("")
    const [projectDescription, setProjectDescription] = useState("")

    const submit = () => {
        addProject(projectName, projectDescription)
        setProjectName("")
        setProjectDescription("")

    }

    const changeProjectName = (e) => {
        setProjectName(e.target.value)
    }
    const changeProjectDescription = (e) => {
        setProjectDescription(e.target.value)
    }
    return (
        <div className="flex min-h-screen flex-col items-center p-24 w-full">
            <div className="w-1/2">
                <p className="m-2 font-semibold text-4xl">Submit Project Idea</p>
                <input className="p-3 rounded-lg m-2 text-xl w-full" placeholder={"Name"} onChange={changeProjectName} value={projectName} type="text"/>
                <textarea className="p-3 rounded-lg text-xl m-2 w-full" placeholder={"Description"} onChange={changeProjectDescription} value={projectDescription} type="text"/>
                <div className="w-full flex justify-center">
                    <button type="submit" onClick={submit} className="text-2xl p-3 bg-blue-300 rounded-lg m-3">Submit</button>
                </div>
            </div>
        </div>
    )
}