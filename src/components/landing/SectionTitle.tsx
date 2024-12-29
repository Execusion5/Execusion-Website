export default function SectionTitle({ children }: { children: string; }) {
    return (
        <p className="font-bold text-2xl md:text-4xl text-center mb-10">{children}</p>
    );
}
