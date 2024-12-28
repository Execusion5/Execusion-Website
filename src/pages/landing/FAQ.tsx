import FAQList from "@/components/landing/FAQList";
import SectionBlock from "@/components/landing/SectionBlock";
import SectionTitle from "@/components/landing/SectionTitle";

export default function FAQ() {
    return (
        <section className="mb-[20%]">
            <SectionBlock center={true}>FAQ</SectionBlock>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <FAQList />
        </section>
    );
}
