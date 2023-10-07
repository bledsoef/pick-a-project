"use client";
import { useState } from "react"
import { Waiting } from "./Waiting";
import { getBackend, getMobile, getType, getFrontend, getDatabase, getProject } from "@/viewmodel/Getters";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function Generator() {
    const randomize = async (e) => {
        // choose the database to use
        setProjectWaiting(true)
        const projects = await getProject()

        // wait to build suspense OOOO
        await sleep(1000)
        setProjectWaiting(false)
        // show result

        setProject(projects[Math.floor(Math.random() * projects.length)])
        // get the type of application we will be building
        setApplicationWaiting(true)
        const types = await getType()

        // wait to build suspense OOOO
        await sleep(1000)
        setApplicationWaiting(false)
        // show result
        var app = types[Math.floor(Math.random() * types.length)].type
        setApplication(app)
        if (app == "Mobile") {
          // get the mobile stack we will be using
          setMobileWaiting(true)
          const mobileStack = await getMobile()

          // wait to build suspense OOOO
          await sleep(1000)
          setMobileWaiting(false)
          // show result

          setMobile(mobileStack[Math.floor(Math.random() * types.length)])

        } else {
          // choose the frontend technologies to use
          setFrontendWaiting(true)
          const frontendStack = await getFrontend()

          // wait to build suspense OOOO
          await sleep(1000)
          setFrontendWaiting(false)
          // show result

          setFrontend(frontendStack[Math.floor(Math.random() * types.length)])
          
          // choose the backend technologies to use
          setBackendWaiting(true)
          const backendStack = await getBackend()

          // wait to build suspense OOOO
          await sleep(1000)
          setBackendWaiting(false)
          // show result

          setBackend(backendStack[Math.floor(Math.random() * types.length)])
        }

        // choose the database to use
        setDatabaseWaiting(true)
        const databases = await getDatabase()

        // wait to build suspense OOOO
        await sleep(1000)
        setDatabaseWaiting(false)
        // show result

        setDatabase(databases[Math.floor(Math.random() * types.length)])
    }

    const [application, setApplication] = useState("")
    const [backend, setBackend] = useState("")
    const [frontend, setFrontend] = useState("")
    const [mobile, setMobile] = useState("")
    const [project, setProject] = useState("")
    const [database, setDatabase] = useState("")

    const [applicationWaiting, setApplicationWaiting] = useState(false)
    const [mobileWaiting, setMobileWaiting] = useState(false)
    const [frontendWaiting, setFrontendWaiting] = useState(false)
    const [backendWaiting, setBackendWaiting] = useState(false)
    const [databaseWaiting, setDatabaseWaiting] = useState(false)
    const [projectWaiting, setProjectWaiting] = useState(false)

    return (
      <div className="flex min-h-screen flex-col items-center p-10 w-3/4">
        <p className=" text-2xl mb-10">Generate a project to build with a random framework, stack, and language to help break Finn!</p>
        
        {!project && !projectWaiting && <button onClick={randomize} className=" font-black drop-shadow-md text-5xl bg-blue-300 rounded-lg p-10">
            GENERATE
        </button>}
        {projectWaiting && <Waiting text="Generating project information"/>}
        {project && (
          <div className=" bg-blue-300 rounded-lg p-4 m-3 w-full">
            <p className="text-4xl font-bold">Project</p>
            <p className="text-3xl "><strong>Name:</strong> {project.name}</p>
            <p className="text-3xl "><strong>Description:</strong> {project.description}</p>
          </div>
        )}
        {applicationWaiting && <Waiting text="Generating platform type"/>}
        {application && (
          <div className=" bg-blue-300 rounded-lg p-4 m-3 w-full">
            <p className="text-4xl font-bold">Platform</p>
            <p className="text-3xl "><strong>Type:</strong> {application}</p>
          </div>
        )}              
        {mobileWaiting && <Waiting text="Generating mobile stack"/>}
        {mobile && (
          <div className=" bg-blue-300 rounded-lg p-4 m-3 w-full">
            <p className="text-4xl font-bold">Mobile</p>
            <p className="text-3xl "><strong>Device:</strong> {mobile.device}</p>
            <p className="text-3xl "><strong>Language:</strong> {mobile.language}</p>
            <p className="text-3xl "><strong>Framework:</strong> {mobile.framework}</p>
          </div>
        )}
        
        {frontendWaiting && <Waiting text="Generating frontend technologies"/>}
        {frontend && (
          <div className=" bg-blue-300 rounded-lg p-4 m-3 w-full">
            <p className="text-4xl font-bold">Frontend</p>
            <p className="text-3xl "><strong>Language:</strong> {frontend.language}</p>
            <p className="text-3xl "><strong>Framework:</strong> {frontend.framework}</p>
          </div>
        )}

        {backendWaiting && <Waiting text="Generating backend technologies"/>}
        {backend && (
          <div className=" bg-blue-300 rounded-lg p-4 m-3 w-full">
            <p className="text-4xl font-bold">Backend</p>
            <p className="text-3xl "><strong>Language:</strong> {backend.language}</p>
            <p className="text-3xl "><strong>Framework:</strong> {backend.framework}</p>
          </div>
        )}

        
        {databaseWaiting && <Waiting text="Generating database"/>}
        {database && (
          <div className=" bg-blue-300 rounded-lg p-4 m-3 w-full">
            <p className="text-4xl font-bold">Database</p>
            <p className="text-3xl "><strong>Name:</strong> {database.name}</p>
          </div>
        )}        

      </div>
    )
  }