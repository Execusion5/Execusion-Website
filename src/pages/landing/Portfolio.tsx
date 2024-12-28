import { PortfolioGrid } from "@/components/landing/PortfolioGrid";
import SectionBlock from "@/components/landing/SectionBlock";
import SectionTitle from "@/components/landing/SectionTitle";

export default function Portfolio() {
    return (
        <section id="portfolio" className="mb-[20%] relative">
            <SectionBlock center={true}>Services</SectionBlock>
            <SectionTitle>Executed Projects</SectionTitle>
            <PortfolioGrid />
        </section>
    );
}
