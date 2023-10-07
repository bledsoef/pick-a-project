import Link from "next/link";

export function NavBar() {
    return (<div className="w-full absolute top-0 bg-blue-300 h-20 flex row-auto items-center">
        <p className="self-center w-1/6 text-3xl m-8 font-semibold">BreakFinn</p>
        <div className="flex row-auto justify-end items-center h-full w-full">
            <Link href={"/generate"} className=" text-2xl m-8 font-semibold">Generate Project</Link>
            <Link href={"/submit"} className=" text-2xl m-8 font-semibold">Submit Project</Link>

        </div>
    </div>)
}