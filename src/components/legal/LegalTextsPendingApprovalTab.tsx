
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Clock, 
  CheckCircle, 
  XCircle, 
  Eye, 
  User,
  Calendar,
  FileText,
  AlertTriangle,
  Filter
} from 'lucide-react';

export function LegalTextsPendingApprovalTab() {
  const [searchTerm, setSearchTerm] = useState('');

  const pendingTexts = [
    {
      id: 1,
      title: "Loi n° 2025-001 sur la modernisation administrative",
      type: "Loi",
      submittedBy: "Ahmed Benali",
      submittedDate: "15 jan 2025",
      category: "Administrative",
      status: "En cours d'examen",
      priority: "Haute",
      description: "Modernisation des procédures administratives et digitalisation des services publics",
      workflowStep: "Examen préliminaire",
      daysWaiting: 3
    },
    {
      id: 2,
      title: "Décret exécutif n° 2025-045 sur l'environnement",
      type: "Décret",
      submittedBy: "Fatima Cherif",
      submittedDate: "12 jan 2025",
      category: "Environnement",
      status: "Validation technique",
      priority: "Moyenne",
      description: "Nouvelles mesures de protection environnementale",
      workflowStep: "Validation technique",
      daysWaiting: 6
    },
    {
      id: 3,
      title: "Arrêté ministériel n° 2025-125 sur l'éducation",
      type: "Arrêté",
      submittedBy: "Karim Meziane",
      submittedDate: "10 jan 2025",
      category: "Éducation",
      status: "Approbation finale",
      priority: "Urgente",
      description: "Réforme du système éducatif national",
      workflowStep: "Approbation administrative finale",
      daysWaiting: 8
    },
    {
      id: 4,
      title: "Code de l'investissement numérique",
      type: "Code",
      submittedBy: "Amina Bouaziz",
      submittedDate: "8 jan 2025",
      category: "Économique",
      status: "En cours d'examen",
      priority: "Haute",
      description: "Cadre juridique pour l'investissement dans le secteur numérique",
      workflowStep: "Examen préliminaire",
      daysWaiting: 10
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours d\'examen':
        return 'bg-blue-100 text-blue-800';
      case 'Validation technique':
        return 'bg-orange-100 text-orange-800';
      case 'Approbation finale':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgente':
        return 'bg-red-100 text-red-800';
      case 'Haute':
        return 'bg-orange-100 text-orange-800';
      case 'Moyenne':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleApprove = (textId: number) => {
    console.log('Approuver le texte:', textId);
  };

  const handleReject = (textId: number) => {
    console.log('Rejeter le texte:', textId);
  };

  const handleView = (textId: number) => {
    console.log('Voir le texte:', textId);
  };

  return (
    <div className="space-y-6">
      {/* Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-blue-600">4</p>
            <p className="text-sm text-gray-600">En attente</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <AlertTriangle className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-orange-600">1</p>
            <p className="text-sm text-gray-600">Priorité urgente</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-green-600">12</p>
            <p className="text-sm text-gray-600">Approuvés ce mois</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-purple-600">6.5</p>
            <p className="text-sm text-gray-600">Délai moyen (jours)</p>
          </CardContent>
        </Card>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex gap-2 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Rechercher dans les textes en attente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </Button>
        </div>
      </div>

      {/* Liste des textes en attente */}
      <div className="space-y-4">
        {pendingTexts.map((text) => (
          <Card key={text.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-lg">{text.title}</CardTitle>
                    <Badge variant="outline">{text.type}</Badge>
                    <Badge className={getPriorityColor(text.priority)}>
                      {text.priority}
                    </Badge>
                  </div>
                  <CardDescription className="mb-3">
                    {text.description}
                  </CardDescription>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Soumis par:</span>
                      <p className="font-medium flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {text.submittedBy}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Date:</span>
                      <p className="font-medium flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {text.submittedDate}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500">Catégorie:</span>
                      <p className="font-medium">{text.category}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">En attente:</span>
                      <p className="font-medium">{text.daysWaiting} jours</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Badge className={getStatusColor(text.status)}>
                    {text.status}
                  </Badge>
                  <div className="text-xs text-gray-500 text-right">
                    Étape: {text.workflowStep}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  Workflow d'approbation des textes juridiques
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleView(text.id)}
                  >
                    <Eye className="w-4 h-4 mr-1" />
                    Examiner
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => handleReject(text.id)}
                  >
                    <XCircle className="w-4 h-4 mr-1" />
                    Rejeter
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700"
                    onClick={() => handleApprove(text.id)}
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Approuver
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Workflow d'approbation */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Workflow d'approbation des textes juridiques</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
              <div>
                <h4 className="font-semibold text-blue-900">Examen préliminaire</h4>
                <p className="text-sm text-blue-700">Vérification de la forme et du contenu (2-3 jours)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
              <div>
                <h4 className="font-semibold text-blue-900">Validation technique</h4>
                <p className="text-sm text-blue-700">Examen par l'expert technique (5-7 jours)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
              <div>
                <h4 className="font-semibold text-blue-900">Approbation administrative finale</h4>
                <p className="text-sm text-blue-700">Validation finale et publication (3-5 jours)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
