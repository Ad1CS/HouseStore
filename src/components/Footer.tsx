import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 border-t border-neutral-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-white">
              <div className="bg-white/10 p-2 rounded-lg">
                <Home size={24} />
              </div>
              <span className="font-serif text-xl font-bold">СтройДом</span>
            </Link>
            <p className="text-sm text-neutral-400">
              Строим надежные и современные одноэтажные дома для вашей счастливой жизни. 
              Качество, проверенное временем.
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Главная</Link></li>
              <li><Link to="/catalog" className="hover:text-white transition-colors">Каталог проектов</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">О компании</Link></li>
              <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Наши контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-neutral-400" />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-neutral-400" />
                <span>info@stroydom-example.ru</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-neutral-400" />
                <span>г. Москва, ул. Строителей, д. 10</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Админ-панель</h3>
            <p className="text-sm text-neutral-400 mb-4">
              Управление контентом сайта.
            </p>
            <Link to="/admin" className="text-sm border border-neutral-700 px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors inline-block">
              Войти в ПУ
            </Link>
          </div>

        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-sm text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} СтройДом. Все права защищены.</p>
          <p>Разработано в Google AI Studio</p>
        </div>
      </div>
    </footer>
  );
}
