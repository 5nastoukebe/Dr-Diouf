import { Mail, Phone, MapPin, GraduationCap, Briefcase, Award, BookOpen } from 'lucide-react';

export default function CVPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white">
          <h2 className="text-4xl font-bold mb-4">Curriculum Vitae</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>email@universite.fr</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Laboratoire d'Océanographie, France</span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-cyan-500">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Formation</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="text-lg font-semibold text-gray-800">Doctorat en Océanographie</p>
                <p className="text-gray-600">Université de la Mer, 2015-2018</p>
                <p className="text-sm text-gray-500 mt-1">Thèse: "Dynamique des courants océaniques et leur impact sur le climat"</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="text-lg font-semibold text-gray-800">Master en Sciences de l'Atmosphère</p>
                <p className="text-gray-600">Université de Paris, 2013-2015</p>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <p className="text-lg font-semibold text-gray-800">Licence en Physique</p>
                <p className="text-gray-600">Université de Lyon, 2010-2013</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-cyan-500">
              <Briefcase className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Expérience Professionnelle</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-cyan-400 pl-4">
                <p className="text-lg font-semibold text-gray-800">Chargé de Recherche CNRS</p>
                <p className="text-gray-600">Laboratoire d'Océanographie et du Climat, 2020-présent</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                  <li>Direction de projets de recherche sur les interactions océan-atmosphère</li>
                  <li>Modélisation climatique et analyse de données satellitaires</li>
                  <li>Encadrement d'étudiants en thèse et post-doctorants</li>
                </ul>
              </div>
              <div className="border-l-4 border-cyan-400 pl-4">
                <p className="text-lg font-semibold text-gray-800">Post-Doctorant</p>
                <p className="text-gray-600">Institut de Recherche Marine, 2018-2020</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
                  <li>Étude des tourbillons océaniques et leur rôle dans le transport de chaleur</li>
                  <li>Participation à des campagnes océanographiques en Atlantique Nord</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-cyan-500">
              <Award className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Distinctions & Prix</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">Prix Jeune Chercheur en Océanographie</p>
                <p className="text-sm text-gray-600">Société Française d'Océanographie, 2021</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-800">Bourse Marie Curie</p>
                <p className="text-sm text-gray-600">Commission Européenne, 2019</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-4 pb-2 border-b-2 border-cyan-500">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Compétences</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-800 mb-2">Techniques</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Modélisation océanique (NEMO, MITgcm)</li>
                  <li>Analyse de données satellitaires</li>
                  <li>Python, MATLAB, Fortran</li>
                  <li>Machine Learning appliqué au climat</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">Langues</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  <li>Français (langue maternelle)</li>
                  <li>Anglais (courant)</li>
                  <li>Espagnol (intermédiaire)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
