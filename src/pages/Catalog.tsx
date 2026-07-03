import { houses } from '../data';
import { HouseCard } from '../components/HouseCard';
import { motion } from 'motion/react';

export function Catalog() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Каталог проектов
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 text-lg max-w-3xl"
          >
            Изучите наши готовые проекты одноэтажных домов. Мы продумали каждую деталь, 
            чтобы ваша жизнь за городом была максимально комфортной.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map((house, index) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>

      </div>
    </div>
  );
}
