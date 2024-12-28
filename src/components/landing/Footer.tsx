import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-black border-t border-gray">
            <div className="container px-0 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                    <span className="ml-3 text-xl">Execusion</span>
                </a>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Execusion</p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <div className="flex gap-x-4">
                        <Github />
                        <Linkedin />
                    </div>
                </span>
            </div>
        </footer>
    );
}
