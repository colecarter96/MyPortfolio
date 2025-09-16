

import Link from 'next/link';

export default function Header() {
    return (
        <div className="flex justify-between p-5 items-center">
            <div className="font-bold text-xl md:text-4xl lg:text-6xl tracking-tight">
                Cole Carter
            </div>

            <div className="hidden md:flex font-semibold text-sm pt-5">
                <div className="pr-2">
                    EDUCATION,
                </div>

                <div className="pr-2">
                    EXPERIENCE,
                </div>

                <div className="pr-2">
                    PROJECTS,
                </div>

                <div className="pr-2">
                    FOR FUN
                </div>
            </div>

            <button className="rounded-full bg-black text-white text-lg font-semibold h-12 p-6 flex justify-center items-center">
                Get In Touch
            </button>
        </div>
    );
}