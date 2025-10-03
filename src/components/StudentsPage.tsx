import { GraduationCap, Users, BookOpen, CheckCircle } from 'lucide-react';

export default function StudentsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-white">
          <h2 className="text-4xl font-bold mb-2">Étudiants Encadrés</h2>
          <p className="text-blue-100">Supervision et mentorat académique</p>
        </div>

        <div className="p-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center border border-blue-200">
              <GraduationCap className="h-10 w-10 text-blue-600 mx-auto mb-2" />
              <p className="text-3xl font-bold text-blue-900">8</p>
              <p className="text-sm text-gray-700">Doctorants</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg text-center border border-cyan-200">
              <Users className="h-10 w-10 text-cyan-600 mx-auto mb-2" />
              <p className="text-3xl font-bold text-cyan-900">12</p>
              <p className="text-sm text-gray-700">Masters</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-6 rounded-lg text-center border border-blue-200">
              <BookOpen className="h-10 w-10 text-blue-600 mx-auto mb-2" />
              <p className="text-3xl font-bold text-blue-900">5</p>
              <p className="text-sm text-gray-700">Post-Doctorants</p>
            </div>
          </div>

          <section>
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b-2 border-cyan-500">
              <GraduationCap className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Thèses en Cours</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-lg font-bold text-gray-800">Marie Dupont</p>
                    <p className="text-sm text-blue-600 font-semibold">2022 - 2025 (en cours)</p>
                  </div>
                  <span className="bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">3ème année</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  "Rôle des tourbillons océaniques dans le transport de carbone en Atlantique Nord"
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Co-encadrement: Dr. Jean Martin (Laboratoire X, 40%)
                </p>
                <p className="text-xs text-gray-500">
                  Financement: Bourse ministérielle | Publications: 2 articles (1 en révision)
                </p>
              </div>

              <div className="bg-cyan-50 border-l-4 border-cyan-500 p-5 rounded-r-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-lg font-bold text-gray-800">Thomas Bernard</p>
                    <p className="text-sm text-cyan-600 font-semibold">2023 - 2026 (en cours)</p>
                  </div>
                  <span className="bg-cyan-200 text-cyan-800 text-xs px-3 py-1 rounded-full font-semibold">2ème année</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  "Modélisation haute résolution des échanges air-mer en Méditerranée"
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Encadrement principal (100%)
                </p>
                <p className="text-xs text-gray-500">
                  Financement: ANR OCEAN-CLIMATE | Publications: 1 article soumis
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-lg font-bold text-gray-800">Sofia Martinez</p>
                    <p className="text-sm text-blue-600 font-semibold">2024 - 2027 (en cours)</p>
                  </div>
                  <span className="bg-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full font-semibold">1ère année</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  "Impact du changement climatique sur la stratification océanique"
                </p>
                <p className="text-sm text-gray-600 mb-2">
                  Co-encadrement: Pr. Anne Dubois (Université Y, 30%)
                </p>
                <p className="text-xs text-gray-500">
                  Financement: Contrat doctoral | En phase de revue bibliographique
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b-2 border-cyan-500">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-800">Thèses Soutenues</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-lg font-bold text-gray-800">Pierre Lefebvre</p>
                    <p className="text-sm text-green-600 font-semibold">2019 - 2022 | Soutenue: Juin 2022</p>
                  </div>
                  <span className="bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">Mention Très Honorable</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  "Variabilité inter-annuelle des flux de chaleur océaniques et implications climatiques"
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Devenu: Chargé de Recherche à l'IFREMER | 4 publications dont 2 en premier auteur
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-lg font-bold text-gray-800">Léa Rousseau</p>
                    <p className="text-sm text-green-600 font-semibold">2018 - 2021 | Soutenue: Septembre 2021</p>
                  </div>
                  <span className="bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">Félicitations du Jury</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  "Observations et modélisation des upwellings côtiers: cas de la côte atlantique"
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Devenue: Post-doc à l'Université de Cambridge | 5 publications, Prix de thèse SFO 2022
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-lg font-bold text-gray-800">Marc Petit</p>
                    <p className="text-sm text-green-600 font-semibold">2017 - 2020 | Soutenue: Décembre 2020</p>
                  </div>
                  <span className="bg-green-200 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">Mention Très Honorable</span>
                </div>
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  "Assimilation de données satellitaires dans les modèles océaniques"
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Devenu: Ingénieur de recherche Météo-France | 3 publications
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b-2 border-cyan-500">
              <Users className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Étudiants de Master (Sélection)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-gray-800">Emma Chevalier - M2 (2024)</p>
                <p className="text-sm text-gray-600 mt-1">
                  "Analyse des vagues de chaleur marine en Méditerranée"
                </p>
                <p className="text-xs text-blue-600 mt-2">Poursuit en thèse au laboratoire</p>
              </div>

              <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                <p className="font-semibold text-gray-800">Lucas Moreau - M2 (2024)</p>
                <p className="text-sm text-gray-600 mt-1">
                  "Impact des cyclones tropicaux sur la température océanique"
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-gray-800">Camille Dubois - M2 (2023)</p>
                <p className="text-sm text-gray-600 mt-1">
                  "Validation de données altimétriques en océan côtier"
                </p>
                <p className="text-xs text-blue-600 mt-2">Note: 18/20</p>
              </div>

              <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                <p className="font-semibold text-gray-800">Antoine Blanc - M2 (2023)</p>
                <p className="text-sm text-gray-600 mt-1">
                  "Machine learning pour la prédiction de SST"
                </p>
                <p className="text-xs text-blue-600 mt-2">Note: 17/20</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b-2 border-cyan-500">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Post-Doctorants Accueillis</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-lg font-bold text-gray-800">Dr. Anna Schmidt</p>
                    <p className="text-sm text-blue-600 font-semibold mb-2">2023 - 2024 (12 mois)</p>
                    <p className="text-sm text-gray-700 mb-2">
                      Projet: Couplage océan-atmosphère dans les modèles régionaux
                    </p>
                    <p className="text-xs text-gray-600">
                      3 publications en collaboration | Obtenu poste permanent en Allemagne
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-5 rounded-lg border border-cyan-200">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-lg font-bold text-gray-800">Dr. Karim Hassan</p>
                    <p className="text-sm text-cyan-600 font-semibold mb-2">2021 - 2023 (24 mois)</p>
                    <p className="text-sm text-gray-700 mb-2">
                      Projet H2020: Modélisation biogéochimique marine
                    </p>
                    <p className="text-xs text-gray-600">
                      5 publications | Actuellement MCF à l'Université de Toulon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Opportunités de Thèse et Post-Doc</h3>
            <p className="text-gray-700 mb-4">
              Je recherche régulièrement des candidats motivés pour des projets de thèse et post-doctorat en océanographie et sciences de l'atmosphère.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p><span className="font-semibold">Profils recherchés:</span> Formation en physique, océanographie, sciences du climat, mathématiques appliquées</p>
              <p><span className="font-semibold">Compétences:</span> Programmation (Python/MATLAB), modélisation numérique, analyse de données</p>
              <p><span className="font-semibold">Contact:</span> email@universite.fr</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
