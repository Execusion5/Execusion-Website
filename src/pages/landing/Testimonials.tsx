import SectionBlock from "@/components/landing/SectionBlock";
import SectionTitle from "@/components/landing/SectionTitle";
import { TestimonialSlider } from "@/components/landing/TestimonialSlider";

export function Testimonials() {
    return (
        <section className="mb-[20%]">
            <SectionBlock center={true}>Testimonials</SectionBlock>
            <SectionTitle>What Our Client Says</SectionTitle>
            <TestimonialSlider />
        </section>
    );
}
