import { cn } from "@/lib/utils";

export default function SectionBlock({ children, center }: { children: string, center?: boolean; }) {
    return (
        <div className={cn('mb-10', { 'text-center': center, 'text-left': !center })}>
            <p className={'px-4 py-3 rounded-lg text-sm border inline'}>{children}</p>
        </div>
    );
}
