import { Modal } from './modal';
import CARDSINFO from '@/bbdd/IMG_P.json';
import Image from 'next/image';

export default function ProductModal({ params: { id: proyId } }: { params: { id: string } }) {

  const cards = CARDSINFO[0].proyectos.find((card) => card.id === proyId);
  if (!cards) return null;

  return (
    <Modal>
      <div className="snap-x flex snap-mandatory h-full w-full mx-auto overflow-x-scroll overflow-y-hidden">
        <div className="snap-center snap-always w-full h-full flex-shrink-0 flex items-center justify-center">
          <Image width={1900} height={1900} alt={`${proyId}01`} src={`https://i.imgur.com/${proyId}`} priority />
        </div>
        <div className="snap-center snap-always w-full h-full flex-shrink-0 flex items-center justify-center">
        <Image width={1900} height={1900} alt={`${proyId}02`} src={`https://i.imgur.com/${proyId}`} />
        </div>
      </div>
    </Modal>
  )
};