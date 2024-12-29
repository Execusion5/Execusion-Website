import SectionBlock from '@/components/landing/SectionBlock';
import SectionTitle from '@/components/landing/SectionTitle';
import ExecutorsSvg from '@/components/svg/ExecutorsSvg';

export default function Executors() {
    return (
        <section id='about' className='mb-[20%]'>
            <SectionTitle>Meet Our Executors</SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:flex-row items-center'>
                <div className='order-2 lg:order-1 bg-[#111111] px-8 py-12 flex flex-col justify-between h-[400px] rounded-lg border border-gray'>
                    <SectionBlock>About Us</SectionBlock>
                    <div>
                        <h1 className='text-3xl mb-5'>Execute : We Build to Run</h1>
                        <p className='text-gray'>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah  </p>
                    </div>
                </div>

                <div className='order-1 lg:order-2'>
                    <ExecutorsSvg />
                </div>
            </div>
        </section>
    );
}
