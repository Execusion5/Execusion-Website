'use client';
import { ContactFormSchema } from '@/schemas/ContactFormSchema';
import { ContactFormData } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Error from '../ui/Error';
import { Button } from '../ui/button';

export default function ContactForm() {
    // const [formData, setFormData] = useState<ContactFormData>({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     details: '',
    // });
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            details: '',
            phone: '',
        },
    });

    const handleContact = (data: ContactFormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(handleContact)} className='grid grid-cols-1 lg:grid-cols-6 gap-5'>
            <div className='col-span-6'>
                <div className='p-4 border border-gray bg-[#111111] rounded-lg flex items-center'>
                    <p className='text-[#9333EA] font-black bg-black py-3 pl-5 rounded-l-md text-lg lg:flex gap-x-1 hidden'>C:\Enter\Full\Name<span>{' >>'}</span></p>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="outline-none bg-black text-gray px-5 py-3 w-full rounded-r-md text-lg"
                        {...register('name')}
                    />
                </div>
                {errors.email && <Error>{errors.name?.message}</Error>}
            </div>
            <div className='col-span-6 lg:col-span-3'>
                <div className='p-4 border border-gray bg-[#111111] rounded-lg flex items-center'>
                    <p className='text-[#9333EA] font-black bg-black py-3 pl-5 rounded-l-md text-lg lg:flex gap-x-1 hidden'>C:\Enter\Email<span>{' >>'}</span></p>
                    <input
                        type="email"
                        placeholder="example@domain.com"
                        className="outline-none bg-black text-gray px-5 py-3 w-full rounded-r-md text-lg"
                        {...register('email')}
                    />
                </div>
                {errors.email && <Error>{errors.email?.message}</Error>}
            </div>
            <div className='col-span-6 lg:col-span-3'>
                <div className='p-4 border border-gray bg-[#111111] rounded-lg flex items-center'>
                    <p className='text-[#9333EA] font-black bg-black py-3 pl-5 rounded-l-md text-lg lg:flex gap-x-1 hidden'>C:\Enter\Phone\Number<span>{' >>'}</span></p>
                    <input
                        type="number"
                        placeholder="01XXXXXXXXX"
                        className="outline-none bg-black text-gray px-5 py-3 w-full rounded-r-md text-lg"
                        {...register('phone')}
                    />
                </div>
                {errors.email && <Error>{errors.phone?.message}</Error>}
            </div>
            <div className='col-span-6 lg:col-span-6'>
                <div className='p-4 border border-gray bg-[#111111] rounded-lg flex items-center relative'>
                    <p className='text-[#9333EA] font-black bg-black py-3 pl-5 rounded-l-md text-lg lg:flex gap-x-1 absolute top-4 hidden'>C:\Enter\Project\Details<span>{' >>'}</span></p>
                    <textarea
                        className="outline-none bg-black text-gray px-5 pt-12 py-3 w-full rounded-r-md text-lg h-40"
                        {...register('details')}
                    />
                </div>
                {errors.email && <Error>{errors.details?.message}</Error>}
            </div>
            <div className='col-span-6 flex justify-center'>
                <Button className='bg-main' size={'lg'}>Book Now</Button>
            </div>
        </form>
    );
}