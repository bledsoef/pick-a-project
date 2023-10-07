import { Audio } from 'react-loader-spinner'

export function Waiting({text}) {
    return (
        <div>
            <div className="flex flex-col w-full items-center justify-center">
                <p className="text-3xl mb-3">{text}</p>
                <Audio
                height="60"
                width="60"
                radius="9"
                color="black"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
                />

            </div>
        </div>
    )
}