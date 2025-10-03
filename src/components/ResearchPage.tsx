import { FlaskConical, FileText, ExternalLink, TrendingUp } from 'lucide-react';

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-500 p-8 text-white">
          <h2 className="text-4xl font-bold mb-2">Recherche & Publications</h2>
          <p className="text-cyan-100">Mes travaux sur les interactions océan-atmosphère et le climat</p>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b-2 border-cyan-500">
              <TrendingUp className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Axes de Recherche</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Dynamique Océanique</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Étude des courants océaniques, des tourbillons méso-échelle et de leur impact sur la circulation thermohaline globale. Utilisation de modèles numériques haute résolution et observations satellitaires.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Interactions Océan-Atmosphère</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Analyse des échanges de chaleur et de CO₂ entre l'océan et l'atmosphère. Rôle des processus de surface dans la variabilité climatique et les événements extrêmes.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Changement Climatique</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Projections climatiques régionales et évaluation de l'impact du réchauffement sur les écosystèmes marins. Développement de méthodes de downscaling statistique.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h4 className="text-xl font-semibold text-blue-900 mb-3">Observations Marines</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Participation à des campagnes océanographiques et développement de nouvelles techniques de mesure in-situ. Intégration de données multi-sources.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b-2 border-cyan-500">
              <FlaskConical className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Projets de Recherche</h3>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-6 py-3 bg-blue-50 rounded-r-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-lg font-bold text-gray-800">OCEAN-CLIMATE (Coordinateur)</p>
                    <p className="text-sm text-gray-600 mb-2">ANR - Agence Nationale de la Recherche | 2022-2026</p>
                    <p className="text-sm text-gray-700">
                      Modélisation haute résolution des interactions océan-atmosphère en Méditerranée et leur rôle dans les événements climatiques extrêmes.
                    </p>
                    <p className="text-sm text-blue-600 font-semibold mt-2">Budget: 450 000€</p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-cyan-500 pl-6 py-3 bg-cyan-50 rounded-r-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-lg font-bold text-gray-800">ATLANTIC-HEAT (Participant)</p>
                    <p className="text-sm text-gray-600 mb-2">H2020 European Research Council | 2021-2025</p>
                    <p className="text-sm text-gray-700">
                      Quantification du transport de chaleur par l'océan Atlantique et implications pour le climat européen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-3 bg-blue-50 rounded-r-lg">
                <p className="text-lg font-bold text-gray-800">MARINE-OBS (Collaborateur)</p>
                <p className="text-sm text-gray-600 mb-2">CNRS - Programme National | 2023-2027</p>
                <p className="text-sm text-gray-700">
                  Développement d'un réseau d'observation océanographique autonome avec capteurs innovants.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center space-x-3 mb-6 pb-2 border-b-2 border-cyan-500">
              <FileText className="h-6 w-6 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Publications Sélectionnées</h3>
            </div>

            <div className="mb-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Métriques:</span> 45 publications |
                <span className="font-semibold text-blue-600"> h-index: 18</span> |
                Citations totales: 1,250+
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Nom, P., Collaborateur, A., & Auteur, B. (2024). "Mesoscale ocean eddies and their impact on heat transport in the North Atlantic."
                  <span className="text-blue-600 italic"> Nature Climate Change</span>, 14(2), 234-248.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Q1</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">IF: 25.3</span>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    DOI
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Nom, P., & Collaborateur, C. (2023). "Air-sea CO₂ fluxes in the Mediterranean: seasonal variability and climate projections."
                  <span className="text-blue-600 italic"> Journal of Geophysical Research: Oceans</span>, 128(5), e2023JC019456.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Q1</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">IF: 4.8</span>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    DOI
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Auteur, D., Nom, P., et al. (2023). "Machine learning approaches for predicting ocean temperature anomalies from satellite data."
                  <span className="text-blue-600 italic"> Geophysical Research Letters</span>, 50(8), e2022GL102345.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Q1</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">IF: 5.2</span>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    DOI
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Nom, P., Collaborateur, E., & Auteur, F. (2022). "Subsurface ocean dynamics during extreme weather events: insights from high-resolution modeling."
                  <span className="text-blue-600 italic"> Ocean Modelling</span>, 172, 102012.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Q2</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">IF: 3.1</span>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    DOI
                  </a>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-5 rounded-lg hover:shadow-md transition-shadow">
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  Nom, P. (2021). "Observed trends in ocean heat content and their implications for climate projections."
                  <span className="text-blue-600 italic"> Climate Dynamics</span>, 57(3), 891-905.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded">Q1</span>
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">IF: 4.6</span>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    DOI
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                Voir toutes les publications
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
