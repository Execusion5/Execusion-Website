import Triangle from "@/components/svg/Triangle";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
    return (
        <section id="hero" className="h-[95vh] flex items-center justify-center relative">
            <Spotlight
                className="-top-40 left-0 lg:left-80 md:-top-20"
                fill="white"
            />

            <div className="text-center flex flex-col gap-y-8">
                <h1 className="font-bold text-4xl md:text-6xl">Execute Your Dream Website</h1>
                <p className="w-full md:w-4/6 mx-auto text-gray">We design and develop custom <span className="text-white">MERN Stack</span> website for Businesses. A one-stop shop for all webservices</p>
                <div>
                    <Button size="lg" className="bg-main">Explore Your Project</Button>
                    <div className="flex justify-center mt-5 gap-x-5 text-sm">
                        <Triangle />
                        <p className="text-gray">Run <span className="text-main font-semibold">Your_Dream _Project.exe</span></p>
                    </div>
                </div>

                <div className="flex justify-center gap-x-14 md:text-xl mt-16">
                    <div>
                        <p className="text-4xl">+100</p>
                        <p className="text-gray">Projects</p>
                    </div>
                    <div>
                        <p className="text-4xl">99%</p>
                        <p className="text-gray">Satisfied Client</p>
                    </div>
                    <div>
                        <p className="text-4xl">+65</p>
                        <p className="text-gray">Clients</p>
                    </div>
                </div>
            </div>
        </section>
    );
}



