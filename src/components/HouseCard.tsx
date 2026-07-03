import { Link } from 'react-router-dom';
import { House } from '../types';
import { Maximize2, DoorOpen, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface HouseCardProps {
  house: House;
}

export function HouseCard({ house }: HouseCardProps) {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(house.price);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={house.images[0]} 
          alt={house.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-neutral-900 shadow-sm">
          {formattedPrice}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl font-bold mb-2">{house.name}</h3>
        
        <div className="flex items-center gap-6 text-sm text-neutral-500 mb-4 border-b border-neutral-100 pb-4">
          <div className="flex items-center gap-2">
            <Maximize2 size={16} />
            <span>{house.area} м²</span>
          </div>
          <div className="flex items-center gap-2">
            <DoorOpen size={16} />
            <span>{house.rooms} комнаты</span>
          </div>
        </div>
        
        <p className="text-neutral-600 text-sm mb-6 flex-grow">
          {house.shortDescription}
        </p>
        
        <Link 
          to={`/house/${house.id}`}
          className="flex items-center justify-center gap-2 w-full bg-neutral-50 text-neutral-900 py-3 rounded-xl font-medium hover:bg-neutral-900 hover:text-white transition-colors"
        >
          Подробнее
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
}
