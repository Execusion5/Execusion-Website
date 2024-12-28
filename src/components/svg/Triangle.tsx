import triangle from '@/images/Polygon.svg';
import Image from 'next/image';

export default function Triangle() {
    return (
        <Image src={triangle} alt='triangle' />
    );
}
