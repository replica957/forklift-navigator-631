
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Search, 
  Filter,
  BarChart3,
  Users,
  FileText,
  AlertTriangle,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react';

export function TrendsAnalysis() {
  const [selectedPeriod, setSelectedPeriod] = useState('3-months');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const trendingTopics = [
    {
      id: 1,
      topic: "Permis de construire électronique",
      category: "Urbanisme",
      growth: +45,
      searches: 2847,
      documents: 156,
      status: "rising",
      description: "Forte augmentation des demandes de permis de construire via les plateformes numériques"
    },
    {
      id: 2,
      topic: "Certificat de résidence numérisé",
      category: "État civil",
      growth: +32,
      searches: 1923,
      documents: 89,
      status: "rising",
      description: "Adoption croissante des services d'état civil dématérialisés"
    },
    {
      id: 3,
      topic: "Déclaration fiscale en ligne",
      category: "Fiscal",
      growth: -12,
      searches: 3456,
      documents: 234,
      status: "declining",
      description: "Légère baisse après le pic de la période déclarative"
    },
    {
      id: 4,
      topic: "Subventions aux startups",
      category: "Commerce",
      growth: +67,
      searches: 1654,
      documents: 78,
      status: "rising",
      description: "Intérêt croissant pour les programmes de soutien à l'entrepreneuriat"
    },
    {
      id: 5,
      topic: "Autorisation environnementale",
      category: "Environnement",
      growth: +23,
      searches: 987,
      documents: 45,
      status: "stable",
      description: "Demandes constantes pour les études d'impact environnemental"
    }
  ];

  const emergingTrends = [
    {
      title: "Digitalisation des services publics",
      impact: "Élevé",
      timeframe: "Court terme",
      probability: 85,
      description: "Accélération de la transformation numérique des administrations publiques"
    },
    {
      title: "Simplification des démarches administratives",
      impact: "Moyen",
      timeframe: "Moyen terme",
      probability: 72,
      description: "Réduction du nombre d'étapes dans les procédures courantes"
    },
    {
      title: "Intelligence artificielle dans l'administration",
      impact: "Élevé",
      timeframe: "Long terme",
      probability: 68,
      description: "Intégration de l'IA pour l'assistance aux citoyens et l'automatisation"
    },
    {
      title: "Guichet unique numérique",
      impact: "Très élevé",
      timeframe: "Moyen terme",
      probability: 78,
      description: "Centralisation de tous les services administratifs sur une plateforme unique"
    }
  ];

  const seasonalTrends = [
    {
      period: "Janvier - Mars",
      trends: ["Déclarations fiscales", "Renouvellement CNI", "Inscriptions scolaires"],
      peakMonth: "Février"
    },
    {
      period: "Avril - Juin",
      trends: ["Permis de construire", "Autorisations d'événements", "Licences commerciales"],
      peakMonth: "Mai"
    },
    {
      period: "Juillet - Septembre",
      trends: ["Passeports", "Autorisations de voyage", "Certificats de résidence"],
      peakMonth: "Juillet"
    },
    {
      period: "Octobre - Décembre",
      trends: ["Subventions", "Marchés publics", "Bilans annuels"],
      peakMonth: "Novembre"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'rising':
        return <ArrowUp className="w-4 h-4 text-green-600" />;
      case 'declining':
        return <ArrowDown className="w-4 h-4 text-red-600" />;
      default:
        return <Minus className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'rising':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'declining':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Très élevé':
        return 'bg-red-100 text-red-800';
      case 'Élevé':
        return 'bg-orange-100 text-orange-800';
      case 'Moyen':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filtres et recherche */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtres d'analyse des tendances
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Période d'analyse</label>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-month">1 mois</SelectItem>
                  <SelectItem value="3-months">3 mois</SelectItem>
                  <SelectItem value="6-months">6 mois</SelectItem>
                  <SelectItem value="1-year">1 an</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Catégorie</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  <SelectItem value="urbanisme">Urbanisme</SelectItem>
                  <SelectItem value="etat-civil">État civil</SelectItem>
                  <SelectItem value="fiscal">Fiscal</SelectItem>
                  <SelectItem value="commerce">Commerce</SelectItem>
                  <SelectItem value="environnement">Environnement</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Recherche</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  placeholder="Rechercher une tendance..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="trending" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="trending">Sujets Tendance</TabsTrigger>
          <TabsTrigger value="emerging">Tendances Émergentes</TabsTrigger>
          <TabsTrigger value="seasonal">Tendances Saisonnières</TabsTrigger>
          <TabsTrigger value="predictions">Prédictions</TabsTrigger>
        </TabsList>

        <TabsContent value="trending">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Sujets les plus tendance (3 derniers mois)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendingTopics.map((trend) => (
                    <div key={trend.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{trend.topic}</h4>
                            <Badge variant="secondary">{trend.category}</Badge>
                            <div className={`flex items-center gap-1 px-2 py-1 rounded-full border ${getStatusColor(trend.status)}`}>
                              {getStatusIcon(trend.status)}
                              <span className="text-xs font-medium">
                                {trend.growth > 0 ? '+' : ''}{trend.growth}%
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{trend.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Search className="w-4 h-4 text-blue-600" />
                          <span className="text-gray-600">Recherches:</span>
                          <span className="font-medium">{trend.searches.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-purple-600" />
                          <span className="text-gray-600">Documents:</span>
                          <span className="font-medium">{trend.documents}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart3 className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600">Croissance:</span>
                          <span className="font-medium">{trend.growth > 0 ? '+' : ''}{trend.growth}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="emerging">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Tendances émergentes à surveiller
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {emergingTrends.map((trend, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-semibold text-gray-900">{trend.title}</h4>
                            <Badge className={getImpactColor(trend.impact)}>{trend.impact}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-3">{trend.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm text-gray-600">Probabilité de réalisation</span>
                            <span className="text-sm font-medium">{trend.probability}%</span>
                          </div>
                          <Progress value={trend.probability} className="h-2" />
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-gray-600">Horizon:</span>
                          <span className="text-sm font-medium">{trend.timeframe}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="seasonal">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Tendances saisonnières par trimestre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {seasonalTrends.map((season, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">{season.period}</h4>
                        <Badge variant="outline">Pic: {season.peakMonth}</Badge>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600 mb-2">Principales tendances:</p>
                        <div className="space-y-1">
                          {season.trends.map((trend, trendIndex) => (
                            <div key={trendIndex} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              <span className="text-sm">{trend}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="predictions">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-purple-600" />
                  Prédictions basées sur l'IA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Prédictions pour les 6 prochains mois</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Augmentation des demandes numériques</span>
                        <Badge className="bg-green-100 text-green-800">+25%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Réduction du temps de traitement</span>
                        <Badge className="bg-blue-100 text-blue-800">-15%</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Nouvelles procédures dématérialisées</span>
                        <Badge className="bg-purple-100 text-purple-800">+8</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-900 mb-2">Recommandations stratégiques</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2"></div>
                        <span>Prioriser la numérisation des procédures urbaines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2"></div>
                        <span>Développer des interfaces mobiles pour les services populaires</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2"></div>
                        <span>Améliorer les outils d'aide à la décision pour les agents</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Opportunités identifiées</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-green-800 mb-1">Court terme (3 mois)</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Simplification des formulaires</li>
                          <li>• Intégration des paiements en ligne</li>
                          <li>• Notifications automatiques</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-800 mb-1">Long terme (12 mois)</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Assistant virtuel intelligent</li>
                          <li>• Prédiction des délais de traitement</li>
                          <li>• Personnalisation des services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
