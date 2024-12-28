import ContactForm from "@/components/landing/ContactForm";
import SectionBlock from "@/components/landing/SectionBlock";
import SectionTitle from "@/components/landing/SectionTitle";

export default function ContactUs() {
    return (
        <section id="contact" className="mb-[20%]">
            <SectionBlock center={true}>Contact Us</SectionBlock>
            <SectionTitle>Ready To Execute?</SectionTitle>
            <ContactForm />
        </section>
    );
}
