import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQList() {

    const faqs = [
        { question: "Is it accessible?", answer: "Yes. It adheres to the WAI-ARIA design pattern." },
        { question: "Is it styled?", answer: "Yes. It comes with default styles that matches the other components' aesthetic." },
        { question: "Is it animated?", answer: "Yes. It's animated by default, but you can disable it if you prefer." }
    ];

    return (
        <Accordion type="single" collapsible className="w-full">
            {
                faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-gray mb-5 py-5 px-8 bg-[#111111] rounded-lg">
                        <AccordionTrigger className="text-xl font-bold">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray text-lg">{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    );
}
