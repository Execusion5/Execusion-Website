import SectionBlock from "@/components/landing/SectionBlock";
import SectionTitle from "@/components/landing/SectionTitle";
import Branding from "@/components/svg/Branding";
import Dev from "@/components/svg/Dev";
import Uiux from "@/components/svg/Uiux";


export default function Services() {

    const services = [
        {
            name: 'UI/UX',
            description: 'User friendly clean UI design with a conversion focused UX design making both user and business happy',
            icon: Uiux
        },
        {
            name: 'MERN Stack Development',
            description: 'Modern, scalable, SEO friendly web development prioritizing performance and security to make your business successful',
            icon: Dev,
        },
        {
            name: 'Branding',
            description: 'Brand that elevate your business. Logo, color scheme,  type scale element that represent your brand',
            icon: Branding,
        }
    ];

    return (
        <section id="services" className="mb-[20%]">
            <SectionBlock center={true}>Services</SectionBlock>
            <SectionTitle>What We Execute</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10">
                {
                    services.map(({ name, description, icon: Icon }) => <div key={name} className="bg-[#111111] p-10 rounded-3xl border border-gray">
                        <div>
                            <Icon />
                        </div>
                        <p className="text-2xl my-5">{name}</p>
                        <p className="text-gray text-justify">{description}</p>
                    </div>)
                }
            </div>
        </section>
    );
}
