
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  PenTool, 
  Bot, 
  Download, 
  Eye, 
  Save, 
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Book,
  Scale,
  FileCheck,
  Printer
} from 'lucide-react';

interface DocumentTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  complexity: 'Simple' | 'Moyen' | 'Complexe';
  estimatedTime: string;
  fields: string[];
}

interface GeneratedDocument {
  id: string;
  title: string;
  type: string;
  status: 'draft' | 'review' | 'completed';
  progress: number;
  wordCount: number;
  createdAt: string;
  lastModified: string;
}

export function DocumentComposer() {
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);

  const templates: DocumentTemplate[] = [
    {
      id: '1',
      name: 'Contrat de Travail',
      category: 'Droit du Travail',
      description: 'Contrat de travail à durée indéterminée conforme au droit algérien',
      complexity: 'Moyen',
      estimatedTime: '15-20 minutes',
      fields: ['Employeur', 'Employé', 'Poste', 'Salaire', 'Durée', 'Clauses spéciales']
    },
    {
      id: '2',
      name: 'Acte de Vente Immobilière',
      category: 'Droit Immobilier',
      description: 'Acte de vente d\'un bien immobilier avec toutes les clauses légales',
      complexity: 'Complexe',
      estimatedTime: '30-45 minutes',
      fields: ['Vendeur', 'Acquéreur', 'Bien', 'Prix', 'Conditions', 'Garanties']
    },
    {
      id: '3',
      name: 'Statuts de Société',
      category: 'Droit Commercial',
      description: 'Statuts de société à responsabilité limitée (SARL)',
      complexity: 'Complexe',
      estimatedTime: '45-60 minutes',
      fields: ['Dénomination', 'Capital', 'Objet social', 'Associés', 'Gérance', 'Assemblées']
    },
    {
      id: '4',
      name: 'Requête Administrative',
      category: 'Droit Administratif',
      description: 'Requête devant le tribunal administratif',
      complexity: 'Moyen',
      estimatedTime: '20-30 minutes',
      fields: ['Requérant', 'Administration', 'Objet', 'Moyens', 'Conclusions']
    }
  ];

  const documents: GeneratedDocument[] = [
    {
      id: '1',
      title: 'Contrat de Travail - Ahmed Benali',
      type: 'Contrat de Travail',
      status: 'completed',
      progress: 100,
      wordCount: 1247,
      createdAt: '2024-01-15',
      lastModified: '2024-01-15'
    },
    {
      id: '2',
      title: 'Acte de Vente - Villa Hydra',
      type: 'Acte de Vente Immobilière',
      status: 'review',
      progress: 85,
      wordCount: 2156,
      createdAt: '2024-01-14',
      lastModified: '2024-01-15'
    },
    {
      id: '3',
      title: 'Statuts SARL - TechCorp',
      type: 'Statuts de Société',
      status: 'draft',
      progress: 60,
      wordCount: 1834,
      createdAt: '2024-01-13',
      lastModified: '2024-01-14'
    }
  ];

  const handleGenerateDocument = (template: DocumentTemplate) => {
    setSelectedTemplate(template);
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulation de génération
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'review': return 'bg-orange-500';
      case 'draft': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'review': return <AlertCircle className="w-4 h-4 text-orange-600" />;
      case 'draft': return <FileText className="w-4 h-4 text-blue-600" />;
      default: return <FileText className="w-4 h-4 text-gray-600" />;
    }
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Simple': return 'bg-green-100 text-green-800';
      case 'Moyen': return 'bg-orange-100 text-orange-800';
      case 'Complexe': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50 to-blue-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-emerald-600" />
            Rédaction Complète de Documents IA
          </CardTitle>
          <p className="text-gray-600">
            Génération automatique de documents juridiques complets avec IA avancée
          </p>
        </CardHeader>
      </Card>

      <Tabs defaultValue="templates" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="templates">Modèles Disponibles</TabsTrigger>
          <TabsTrigger value="composer">Compositeur IA</TabsTrigger>
          <TabsTrigger value="documents">Mes Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Book className="w-5 h-5 text-blue-600" />
                Bibliothèque de Modèles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {templates.map((template) => (
                  <div key={template.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{template.name}</h3>
                      <Badge className={getComplexityColor(template.complexity)}>
                        {template.complexity}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <Badge variant="outline" className="text-xs">
                        {template.category}
                      </Badge>
                      <p className="text-sm text-gray-600">{template.description}</p>
                      <p className="text-xs text-gray-500">
                        Temps estimé: {template.estimatedTime}
                      </p>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-medium">Champs requis:</p>
                      <div className="flex flex-wrap gap-1">
                        {template.fields.map((field, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {field}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      className="w-full"
                      onClick={() => handleGenerateDocument(template)}
                    >
                      <PenTool className="w-4 h-4 mr-2" />
                      Générer le Document
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="composer" className="space-y-6">
          {isGenerating ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-blue-600 animate-spin" />
                  Génération en cours...
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Génération: {selectedTemplate?.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {generationProgress}%
                    </span>
                  </div>
                  <Progress value={generationProgress} className="w-full" />
                  <div className="text-sm text-gray-600">
                    {generationProgress < 30 && "Analyse des données d'entrée..."}
                    {generationProgress >= 30 && generationProgress < 60 && "Génération du contenu..."}
                    {generationProgress >= 60 && generationProgress < 90 && "Application des clauses légales..."}
                    {generationProgress >= 90 && "Finalisation du document..."}
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Compositeur IA Intelligent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Bot className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Prêt à créer votre document</h3>
                  <p className="text-gray-600 mb-4">
                    Sélectionnez un modèle dans l'onglet "Modèles Disponibles" pour commencer
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <Scale className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <h4 className="font-medium">Conformité Légale</h4>
                      <p className="text-sm text-gray-600">100% conforme au droit algérien</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-medium">Validation Auto</h4>
                      <p className="text-sm text-gray-600">Vérification automatique des clauses</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <h4 className="font-medium">IA Générative</h4>
                      <p className="text-sm text-gray-600">Contenu adapté et personnalisé</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-green-600" />
                Documents Générés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.map((doc) => (
                  <div key={doc.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(doc.status)}
                        <h3 className="font-semibold">{doc.title}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{doc.type}</Badge>
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(doc.status)}`}></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                      <span>{doc.wordCount} mots</span>
                      <span>Créé le {doc.createdAt}</span>
                      <span>Modifié le {doc.lastModified}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <Progress value={doc.progress} className="flex-1 mr-4" />
                      <span className="text-sm font-medium">{doc.progress}%</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-3 h-3 mr-1" />
                        Voir
                      </Button>
                      <Button variant="outline" size="sm">
                        <PenTool className="w-3 h-3 mr-1" />
                        Modifier
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-3 h-3 mr-1" />
                        Télécharger
                      </Button>
                      <Button variant="outline" size="sm">
                        <Printer className="w-3 h-3 mr-1" />
                        Imprimer
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
