import { Link } from 'react-router-dom';
import { houses } from '../data';
import { HouseCard } from '../components/HouseCard';
import { ArrowRight, CheckCircle2, Shield, Hammer, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 flex items-center justify-center min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
            alt="Beautiful house" 
            className="w-full h-full object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight max-w-4xl mx-auto"
          >
            Дом, в котором хочется жить
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-200 mb-10 max-w-2xl mx-auto font-light"
          >
            Проектируем и строим современные одноэтажные дома под ключ. 
            Качество, надежность и уют в каждом квадратном метре.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/catalog" 
              className="bg-white text-neutral-900 px-8 py-4 rounded-full font-medium text-lg hover:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              Смотреть проекты
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/contacts" 
              className="bg-transparent border border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center"
            >
              Связаться с нами
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-neutral-500 text-lg">
              Мы строим не просто здания, а создаем пространство для счастливой жизни вашей семьи.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Гарантия 15 лет', desc: 'На фундамент и несущие конструкции' },
              { icon: CheckCircle2, title: 'Проекты под ключ', desc: 'От фундамента до внутренней отделки' },
              { icon: Hammer, title: 'Свое производство', desc: 'Строгий контроль качества материалов' },
              { icon: Users, title: 'Опытная команда', desc: 'В штате архитекторы и строители с опытом от 10 лет' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-50 p-8 rounded-2xl text-center"
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-neutral-900">
                  <feature.icon size={28} />
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-neutral-500 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold mb-4">Наши популярные дома</h2>
              <p className="text-neutral-500 text-lg">
                Выберите проект, который идеально подойдет для вашей семьи.
              </p>
            </div>
            <Link 
              to="/catalog" 
              className="group flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-colors"
            >
              Весь каталог
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {houses.slice(0, 5).map(house => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">Готовы построить дом мечты?</h2>
          <p className="text-neutral-300 text-lg mb-10">
            Оставьте заявку, и наш менеджер свяжется с вами для бесплатной консультации и подбора идеального проекта.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="tel" 
              placeholder="Ваш номер телефона" 
              className="bg-white/10 border border-white/20 px-6 py-4 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/50 flex-grow"
              required
            />
            <button 
              type="submit" 
              className="bg-white text-neutral-900 px-8 py-4 rounded-xl font-medium hover:bg-neutral-100 transition-colors whitespace-nowrap"
            >
              Жду звонка
            </button>
          </form>
          <p className="text-xs text-neutral-500 mt-4">
            Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
          </p>
        </div>
      </section>
    </div>
  );
}
