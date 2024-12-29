/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";

export function TestimonialSlider() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="w-full mx-auto flex items-center bg-[#111111] border border-gray rounded-md"
        >
            <CarouselContent>
                {Array.from({ length: 4 }).map((_, index) => (
                    <CarouselItem key={index} className="basis-full sm:basis-1/2 p-4 md:p-8 border-r h-full border-gray">
                        <div className="grid grid-cols-5">
                            <div className="col-span-1 flex justify-center">
                                <div>
                                    <img src={'https://img.freepik.com/premium-photo/cartoon-game-avatar-logo-gaming-brand_902820-465.jpg'} className="rounded-full w-[40px] h-[40px] lg:w-[80px] lg:h-[80px]" />
                                </div>
                            </div>
                            <div className="col-span-4">
                                <div className="flex gap-x-2 text-sm">
                                    <p className="text-main">Kevin Kaikui</p>
                                    <p><span className="text-yellow-600">Founder (<span className="text-[#B65C35]">Founder</span>)</span> <span>{' {'}</span></p>
                                </div>
                                <p className="text-gray border-gray border-l px-3 py-1">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi, fuga ipsum maiores hic saepe optio ab voluptates doloremque nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ullam corrupti voluptatibus ipsam vel blanditiis illum, ad, impedit pariatur dolorum ex. Amet officia iste commodi culpa nostrum impedit quisquam consequatur fuga ullam, consectetur doloremque placeat, optio similique! Tempora officia soluta dicta rerum, fugiat dolorem sequi corrupti consequuntur consequatur harum distinctio.
                                </p>
                                <p><span className="text-lg">{' }'}</span></p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div className="hidden md:block">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    );
}