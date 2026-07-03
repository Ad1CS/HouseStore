import { useState } from 'react';
import { houses } from '../data';
import { Lock, Settings, Edit3, Trash2, Plus } from 'lucide-react';

export function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock auth
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Неверный пароль. (Подсказка: admin123)');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-neutral-50 px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-sm border border-neutral-100 text-center">
          <div className="bg-neutral-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-neutral-900">
            <Lock size={28} />
          </div>
          <h1 className="text-2xl font-bold mb-2">Панель управления</h1>
          <p className="text-neutral-500 mb-8 text-sm">Введите пароль для доступа к управлению каталогом.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль администратора"
              className="w-full bg-neutral-50 border border-neutral-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900 text-center"
            />
            <button 
              type="submit"
              className="w-full bg-neutral-900 text-white font-medium py-3 rounded-xl hover:bg-neutral-800 transition-colors"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-neutral-900 p-2 rounded-lg text-white">
              <Settings size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Управление каталогом</h1>
              <p className="text-sm text-neutral-500">Добавление, редактирование и удаление проектов</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-neutral-800 transition-colors">
            <Plus size={18} />
            Добавить проект
          </button>
        </div>

        <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-50 border-b border-neutral-200 text-neutral-600">
                <tr>
                  <th className="px-6 py-4 font-medium">Название</th>
                  <th className="px-6 py-4 font-medium">Площадь</th>
                  <th className="px-6 py-4 font-medium">Цена</th>
                  <th className="px-6 py-4 font-medium text-right">Действия</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {houses.map((house) => (
                  <tr key={house.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-900 flex items-center gap-3">
                      <img src={house.images[0]} alt={house.name} className="w-10 h-10 rounded-lg object-cover" />
                      {house.name}
                    </td>
                    <td className="px-6 py-4 text-neutral-600">{house.area} м²</td>
                    <td className="px-6 py-4 text-neutral-600">
                      {new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 }).format(house.price)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-neutral-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Редактировать">
                          <Edit3 size={18} />
                        </button>
                        <button className="p-2 text-neutral-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Удалить">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-neutral-400">
          *В демонстрационной версии данные не сохраняются на сервере.
        </div>

      </div>
    </div>
  );
}
