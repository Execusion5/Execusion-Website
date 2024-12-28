import branding from '@/images/branding.svg';
import Image from 'next/image';
export default function Branding() {
    return (
        <Image src={branding} alt='branding' />
    );
}
