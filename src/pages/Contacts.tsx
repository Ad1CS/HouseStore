import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contacts() {
  return (
    <div className="min-h-screen bg-neutral-50 pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Контакты
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 text-lg"
          >
            Свяжитесь с нами для консультации или записи на просмотр готовых объектов.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100"
          >
            <h2 className="text-2xl font-bold mb-8">Напишите нам</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Тема сообщения</label>
                <select className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900">
                  <option>Консультация по проекту</option>
                  <option>Расчет стоимости</option>
                  <option>Запись на экскурсию</option>
                  <option>Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Комментарий</label>
                <textarea 
                  rows={4}
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 resize-none"
                ></textarea>
              </div>

              <button type="button" className="w-full bg-neutral-900 text-white font-medium py-4 rounded-xl hover:bg-neutral-800 transition-colors">
                Отправить сообщение
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
              <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-100 p-3 rounded-xl text-neutral-900">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Офис продаж</p>
                    <p className="text-neutral-500">г. Москва, ул. Строителей, д. 10, БЦ "Монолит", 4 этаж</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-100 p-3 rounded-xl text-neutral-900">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-neutral-500">+7 (800) 123-45-67 <br/><span className="text-sm">(Звонок по РФ бесплатный)</span></p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-100 p-3 rounded-xl text-neutral-900">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-medium">E-mail</p>
                    <p className="text-neutral-500">info@stroydom-example.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-neutral-100 p-3 rounded-xl text-neutral-900">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-neutral-500">Пн-Пт: 10:00 - 19:00<br/>Сб-Вс: 11:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fake Map */}
            <div className="w-full h-64 bg-neutral-200 rounded-3xl overflow-hidden relative border border-neutral-100">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Map" className="w-full h-full object-cover opacity-60 grayscale" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg font-medium text-neutral-900 flex items-center gap-2">
                   <MapPin size={18} />
                   Мы находимся здесь
                 </div>
               </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
