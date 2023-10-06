"use client";
import { useState } from "react"
import { getBackend, getMobile, getType, getFrontend, getDatabase, getProject } from "@/viewmodel/ViewModel";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function Generator() {
    const randomize = async (e) => {
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

        // choose the database to use
        setProjectWaiting(true)
        const projects = await getProject()

        // wait to build suspense OOOO
        await sleep(1000)
        setProjectWaiting(false)
        // show result

        setProject(projects[Math.floor(Math.random() * types.length)])
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
      <div className="flex min-h-screen flex-col items-center justify-between p-24 w-full">
        <p className=" text-2xl">Generate a project to build with a random framework, stack, and language to help break Finn!</p>
        
        {!application && !applicationWaiting && <button onClick={randomize} className=" font-black drop-shadow-md text-5xl bg-blue-400 rounded-lg p-10">
            GENERATE
        </button>}

        {applicationWaiting && <p className="text-5xl ">Generating application type...</p>}
        {application && <p className="text-5xl ">{application}</p>}
        
        {mobileWaiting && <p className="text-5xl ">Generating mobile stack...</p>}
        {mobile && <p className="text-5xl ">{mobile.device}/{mobile.language}/{mobile.framework}</p>}
        
        {frontendWaiting && <p className="text-5xl ">Generating frontend technologies...</p>}
        {frontend && <p className="text-5xl ">{frontend.language}/{frontend.framework}</p>}
        
        {backendWaiting && <p className="text-5xl ">Generating backend technologies...</p>}
        {backend && <p className="text-5xl ">{backend.language}/{backend.framework}</p>}
        
        {databaseWaiting && <p className="text-5xl ">Generating database...</p>}
        {database && <p className="text-5xl ">{database.name}</p>}
        
        {projectWaiting && <p className="text-5xl ">Generating project description...</p>}
        {project && <p className="text-5xl ">{project.description}</p>}

        <p className=" text-2xl">If you don't know it, get to learning!</p>
      </div>
    )
  }