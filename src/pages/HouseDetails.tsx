import { useParams, Link } from 'react-router-dom';
import { houses } from '../data';
import { Maximize2, DoorOpen, CheckCircle2, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { clsx } from 'clsx';

export function HouseDetails() {
  const { id } = useParams<{ id: string }>();
  const house = houses.find(h => h.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!house) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Проект не найден</h2>
        <p className="text-neutral-500 mb-8">К сожалению, запрашиваемый проект дома не существует.</p>
        <Link to="/catalog" className="bg-neutral-900 text-white px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors">
          Вернуться в каталог
        </Link>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0
  }).format(house.price);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Top Banner with Image */}
      <div className="w-full h-[50vh] relative bg-neutral-900">
        <img 
          src={house.images[activeImage]} 
          alt={house.name} 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <Link to="/catalog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-sm font-medium">
            <ArrowLeft size={16} />
            Назад в каталог
          </Link>
          <h1 className="font-serif text-5xl font-bold mb-2">{house.name}</h1>
          <p className="text-2xl font-light text-white/90">{formattedPrice}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <ImageIcon size={24} className="text-neutral-400" />
                Галерея проекта
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {house.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={clsx(
                      "relative rounded-xl overflow-hidden aspect-video transition-all",
                      activeImage === idx ? "ring-4 ring-neutral-900" : "opacity-70 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`${house.name} - фото ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </section>

            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold mb-6">О проекте</h2>
              <div className="prose prose-neutral prose-lg max-w-none text-neutral-600 leading-relaxed">
                <p>{house.fullDescription}</p>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Особенности</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {house.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-neutral-50 p-4 rounded-xl">
                    <CheckCircle2 size={20} className="text-green-600 flex-shrink-0" />
                    <span className="font-medium text-neutral-800">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-neutral-50 p-8 rounded-3xl sticky top-28 border border-neutral-100">
              <h3 className="text-xl font-bold mb-6">Характеристики</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-3 text-neutral-500">
                    <Maximize2 size={20} />
                    <span>Площадь</span>
                  </div>
                  <span className="font-bold text-lg">{house.area} м²</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-3 text-neutral-500">
                    <DoorOpen size={20} />
                    <span>Комнаты</span>
                  </div>
                  <span className="font-bold text-lg">{house.rooms}</span>
                </div>
              </div>

              <div className="bg-neutral-900 text-white p-6 rounded-2xl mb-6">
                <h4 className="font-medium mb-2 opacity-80">Стоимость под ключ</h4>
                <p className="text-3xl font-bold">{formattedPrice}</p>
                <p className="text-xs opacity-60 mt-2">Не является публичной офертой</p>
              </div>

              <form className="space-y-4">
                <h4 className="font-bold">Запросить смету</h4>
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full bg-white border border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full bg-white border border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
                <button type="button" className="w-full bg-neutral-900 text-white font-medium py-4 rounded-xl hover:bg-neutral-800 transition-colors">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
