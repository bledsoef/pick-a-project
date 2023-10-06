import Image from 'next/image'
import { NavBar } from "@/components/NavBar"
import { Generator } from "@/components/Generator"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 w-full h-full  bg-gray-100">
      <Generator/>
    </main>
  )
}
