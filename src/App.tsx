import { useState } from 'react';
import Navigation from './components/Navigation';
import CVPage from './components/CVPage';
import ResearchPage from './components/ResearchPage';
import StudentsPage from './components/StudentsPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('cv');

  const renderPage = () => {
    switch (currentPage) {
      case 'cv':
        return <CVPage />;
      case 'research':
        return <ResearchPage />;
      case 'students':
        return <StudentsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <CVPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pb-12">
        {renderPage()}
      </main>
      <footer className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-cyan-200">
            Dr. Nom Prénom - Chercheur en Océanographie & Sciences de l'Atmosphère
          </p>
          <p className="text-xs text-cyan-300 mt-2">
            Laboratoire d'Océanographie et du Climat - CNRS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
