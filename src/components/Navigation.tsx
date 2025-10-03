import { Waves } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'cv', label: 'CV' },
    { id: 'research', label: 'Recherche & Publications' },
    { id: 'students', label: 'Étudiants Encadrés' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Photo de profil"
              className="w-16 h-16 rounded-full border-2 border-cyan-300 object-cover shadow-lg"
            />
            <div className="flex items-center space-x-3">
              <Waves className="h-8 w-8 text-cyan-300" />
              <div>
                <h1 className="text-2xl font-bold">Dr. Nom Prénom</h1>
                <p className="text-sm text-cyan-200">Chercheur en Océanographie & Atmosphère</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'bg-white text-blue-900 font-semibold shadow-md'
                    : 'text-white hover:bg-blue-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
