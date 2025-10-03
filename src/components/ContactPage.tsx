import { Mail, Phone, Linkedin, Instagram, MessageCircle, GraduationCap, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white text-center">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Dr. Nom Prénom"
            className="w-32 h-32 rounded-full border-4 border-white mx-auto mb-4 object-cover shadow-xl"
          />
          <h2 className="text-4xl font-bold mb-2">Contactez-moi</h2>
          <p className="text-blue-100">Je suis disponible pour collaborations, projets de recherche et mentorat</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="mailto:email@universite.fr"
              className="flex items-center space-x-4 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="bg-blue-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Email</p>
                <p className="text-lg text-gray-800 group-hover:text-blue-600">email@universite.fr</p>
              </div>
            </a>

            <a
              href="tel:+33123456789"
              className="flex items-center space-x-4 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="bg-green-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Téléphone</p>
                <p className="text-lg text-gray-800 group-hover:text-green-600">+33 1 23 45 67 89</p>
              </div>
            </a>

            <a
              href="https://wa.me/33123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-gradient-to-br from-green-50 to-lime-50 rounded-lg border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="bg-green-500 p-3 rounded-full group-hover:scale-110 transition-transform">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">WhatsApp</p>
                <p className="text-lg text-gray-800 group-hover:text-green-600">+33 1 23 45 67 89</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/votre-profil"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-300 hover:border-blue-500 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="bg-blue-700 p-3 rounded-full group-hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">LinkedIn</p>
                <p className="text-lg text-gray-800 group-hover:text-blue-700">Voir mon profil</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/votre-compte"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg border-2 border-pink-200 hover:border-pink-400 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Instagram</p>
                <p className="text-lg text-gray-800 group-hover:text-pink-600">@votre-compte</p>
              </div>
            </a>

            <a
              href="https://scholar.google.com/citations?user=VOTRE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg border-2 border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="bg-sky-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-semibold">Google Scholar</p>
                <p className="text-lg text-gray-800 group-hover:text-sky-600">Publications & Citations</p>
              </div>
            </a>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-3">
              <MapPin className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-2">Adresse Professionnelle</p>
                <p className="text-gray-700">
                  Laboratoire d'Océanographie et du Climat<br />
                  CNRS - Centre National de la Recherche Scientifique<br />
                  123 Avenue des Sciences<br />
                  75000 Paris, France
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Horaires de Bureau</h3>
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Lundi - Vendredi:</span> 9h00 - 17h00</p>
              <p className="text-sm text-gray-600">
                Pour les rendez-vous, merci de me contacter par email avec au moins 48h d'avance.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm">
              Vous avez un projet de collaboration ou une opportunité de recherche ?
            </p>
            <p className="text-blue-600 font-semibold mt-2">
              N'hésitez pas à me contacter, je réponds généralement sous 48h.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
