import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


type Link = {
    name: string,
    to: string;
};

export default function NavItems({ links }: { links: Link[]; }) {

    const items = links.map(({ name, to }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const pathname = usePathname();
        const isActive = pathname ? pathname.endsWith(to) : false;
        return <Link key={to} href={to} className={cn("text-white text-sm font-medium", { "text-black font-bold": isActive })}>{name}</Link>;
    });

    return (
        <>
            {items}
            <div>
                <Link href="#contact">
                    <Button className="mb-5 md:mb-0 text-sm w-[fit-content] bg-main">Contac Us</Button>
                </Link>
            </div>
        </>
    );
}