import { motion } from 'motion/react';
import { Award, Target, HeartHandshake, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-white pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
          >
            Строим дома для жизни
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 text-lg"
          >
            Компания "СтройДом" работает на рынке малоэтажного строительства более 10 лет. 
            За это время мы реализовали более 300 успешных проектов, превращая мечты 
            семей о собственном уютном доме в реальность.
          </motion.p>
        </div>

        {/* Two Col Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1541888081622-17b5f10b2df7?auto=format&fit=crop&q=80&w=1200" 
              alt="Строительство дома" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold font-serif mb-4">Наш подход и технологии</h2>
            <p className="text-neutral-600 leading-relaxed">
              Мы специализируемся исключительно на одноэтажных домах. Это позволяет нам 
              отточить технологию строительства до совершенства. Отсутствие лестниц делает 
              дом безопасным для детей и пожилых людей, а продуманная планировка позволяет 
              эффективно использовать каждый квадратный метр.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              В работе мы используем только сертифицированные экологичные материалы. 
              Наши дома отличаются высокой энергоэффективностью — летом в них прохладно, 
              а зимой они отлично сохраняют тепло, снижая затраты на отопление.
            </p>
            <ul className="space-y-3 mt-6">
              {[
                'Монолитный железобетонный фундамент',
                'Энергоэффективные стены из газобетона',
                'Утепленная кровля премиум-класса',
                'Пятикамерные стеклопакеты'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-neutral-900 p-1 rounded-full text-white">
                    <ShieldCheck size={14} />
                  </div>
                  <span className="font-medium text-neutral-800">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats / Advantages */}
        <div className="bg-neutral-900 rounded-3xl p-12 text-white mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-neutral-400 text-sm">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-neutral-400 text-sm">Построенных домов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-neutral-400 text-sm">Лет гарантии</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-neutral-400 text-sm">Довольных клиентов</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-serif mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-neutral-50 p-8 rounded-2xl">
              <Award size={32} className="text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-3">Качество без компромиссов</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Многоступенчатый контроль качества на каждом этапе строительства — от заливки фундамента до финишной отделки.
              </p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-2xl">
              <HeartHandshake size={32} className="text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-3">Честность и открытость</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Фиксированная смета, отсутствие скрытых платежей. Клиент имеет доступ к объекту на любой стадии работ.
              </p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-2xl">
              <Target size={32} className="text-neutral-900 mb-6" />
              <h3 className="text-xl font-bold mb-3">Соблюдение сроков</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Мы ценим ваше время. График работ прописывается в договоре, и мы несем финансовую ответственность за просрочку.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
