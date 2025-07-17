
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Users, 
  Settings, 
  Database, 
  BarChart, 
  Lock, 
  FileText, 
  Search,
  ChevronRight,
  Clock,
  AlertTriangle,
  CheckCircle,
  Activity,
  Server,
  Eye,
  Download,
  Play,
  Book,
  Zap,
  Target,
  TrendingUp,
  Globe,
  Smartphone
} from 'lucide-react';

export function AdminGuideSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedModule, setSelectedModule] = useState('all');

  const adminModules = [
    {
      id: 'user-management',
      title: "Gestion des utilisateurs",
      icon: Users,
      color: "text-blue-600",
      description: "Administration complète des comptes et des rôles",
      progress: 95,
      articles: [
        { 
          id: 1,
          title: "Créer et gérer les comptes utilisateurs", 
          duration: "15 min", 
          priority: "Critique",
          description: "Guide complet pour la création et la gestion des comptes",
          views: 1890,
          complexity: "Avancé",
          content: `
# Gestion des comptes utilisateurs

## Création de nouveaux comptes
1. **Accès au module** : Administration > Gestion des utilisateurs
2. **Nouveau compte** : Cliquer sur "Ajouter un utilisateur"
3. **Informations requises** :
   - Email (unique dans le système)
   - Nom et prénom
   - Type de compte (Citoyen, Juriste, Administrateur)
   - Département/Organisation

## Attribution des rôles
- **Citoyen** : Consultation et recherche de base
- **Juriste** : Accès étendu + contribution
- **Administrateur** : Droits complets de gestion

## Gestion des comptes existants
- Modification des informations
- Réinitialisation des mots de passe
- Suspension/réactivation
- Historique des connexions
          `
        },
        { 
          id: 2,
          title: "Attribution des rôles et permissions", 
          duration: "20 min", 
          priority: "Critique",
          description: "Système de permissions granulaires et sécurisées",
          views: 1650,
          complexity: "Expert",
          content: `
# Système de rôles et permissions

## Hiérarchie des rôles
1. **Super Administrateur** : Accès total au système
2. **Administrateur** : Gestion des utilisateurs et contenu
3. **Modérateur** : Validation du contenu
4. **Juriste Confirmé** : Contribution et révision
5. **Juriste** : Contribution limitée
6. **Citoyen** : Consultation uniquement

## Permissions par module
- **Textes juridiques** : Lecture, écriture, validation
- **Procédures** : Création, modification, suppression
- **Actualités** : Publication, modération
- **Rapports** : Accès, génération, export

## Gestion des permissions spéciales
- Accès aux données sensibles
- Droits d'export massif
- Administration système
- Surveillance et audit
          `
        },
        { 
          id: 3,
          title: "Surveillance des activités utilisateurs", 
          duration: "12 min", 
          priority: "Haute",
          description: "Monitoring en temps réel et analyse des comportements",
          views: 980,
          complexity: "Intermédiaire",
          content: `
# Surveillance des activités

## Tableau de bord de monitoring
- **Connexions actives** : Utilisateurs en ligne
- **Activités récentes** : Dernières actions
- **Statistiques d'usage** : Fréquence et patterns
- **Alertes de sécurité** : Comportements suspects

## Logs et audit
- Historique complet des actions
- Traçabilité des modifications
- Géolocalisation des connexions
- Détection d'anomalies

## Rapports d'activité
- Rapports quotidiens/hebdomadaires
- Analyses de tendances
- Métriques de performance
- Export des données
          `
        }
      ]
    },
    {
      id: 'system-config',
      title: "Configuration système",
      icon: Settings,
      color: "text-green-600",
      description: "Paramétrage avancé de la plateforme",
      progress: 88,
      articles: [
        { 
          id: 4,
          title: "Paramètres généraux du système", 
          duration: "25 min", 
          priority: "Haute",
          description: "Configuration globale de la plateforme",
          views: 1420,
          complexity: "Avancé",
          content: `
# Configuration système générale

## Paramètres de base
- **Nom de l'organisation** : Personnalisation de la marque
- **Langues disponibles** : Français, Arabe, Anglais
- **Fuseau horaire** : Configuration régionale
- **Formats de date** : Standards locaux

## Paramètres de performance
- **Cache système** : Optimisation des performances
- **Limitations de débit** : Gestion de la charge
- **Timeouts** : Délais d'expiration
- **Maintenance programmée** : Fenêtres de maintenance

## Intégrations externes
- **APIs gouvernementales** : Connexions officielles
- **Services de notification** : Email, SMS, push
- **Systèmes de sauvegarde** : Réplication des données
- **CDN et performances** : Distribution de contenu
          `
        },
        { 
          id: 5,
          title: "Configuration de la sécurité", 
          duration: "30 min", 
          priority: "Critique",
          description: "Mise en place des mesures de sécurité avancées",
          views: 2100,
          complexity: "Expert",
          content: `
# Configuration de la sécurité

## Authentification
- **Multi-facteurs (2FA)** : Obligatoire pour les admins
- **SSO** : Intégration avec les systèmes existants
- **Politiques de mots de passe** : Complexité et renouvellement
- **Sessions** : Durée et gestion des tokens

## Chiffrement et protection
- **HTTPS/TLS** : Chiffrement des communications
- **Chiffrement des données** : Base de données et fichiers
- **Signatures numériques** : Intégrité des documents
- **Sauvegarde sécurisée** : Chiffrement des backups

## Monitoring de sécurité
- **Détection d'intrusion** : IDS/IPS
- **Audit de sécurité** : Logs et alertes
- **Scan de vulnérabilités** : Tests réguliers
- **Plan de réponse aux incidents** : Procédures d'urgence
          `
        }
      ]
    },
    {
      id: 'content-management',
      title: "Gestion du contenu",
      icon: FileText,
      color: "text-purple-600",
      description: "Administration du contenu juridique et éditorial",
      progress: 92,
      articles: [
        { 
          id: 6,
          title: "Workflow de validation des textes", 
          duration: "18 min", 
          priority: "Haute",
          description: "Processus de validation et publication",
          views: 1680,
          complexity: "Avancé",
          content: `
# Workflow de validation

## Processus de soumission
1. **Soumission** : Utilisateur propose un texte
2. **Vérification automatique** : Contrôles techniques
3. **Révision manuelle** : Validation par un modérateur
4. **Approbation finale** : Validation par un administrateur
5. **Publication** : Mise en ligne du contenu

## Critères de validation
- **Exactitude juridique** : Vérification des sources
- **Formatage** : Respect des standards
- **Métadonnées** : Complétude des informations
- **Droits d'auteur** : Vérification des licences

## Outils de modération
- Interface de révision
- Annotations et commentaires
- Historique des modifications
- Système de notifications
          `
        },
        { 
          id: 7,
          title: "Gestion des métadonnées", 
          duration: "22 min", 
          priority: "Moyenne",
          description: "Organisation et structuration des informations",
          views: 890,
          complexity: "Intermédiaire",
          content: `
# Gestion des métadonnées

## Types de métadonnées
- **Descriptives** : Titre, description, mots-clés
- **Techniques** : Format, taille, version
- **Administratives** : Auteur, date, permissions
- **Structurelles** : Relations, hiérarchies

## Standards et taxonomies
- **Classification juridique** : Codes de matières
- **Thésaurus** : Vocabulaire contrôlé
- **Standards internationaux** : Dublin Core, MARC
- **Indexation automatique** : IA et NLP

## Outils de gestion
- Éditeur de métadonnées
- Import/export en lots
- Validation automatique
- Recherche et navigation
          `
        }
      ]
    },
    {
      id: 'analytics-reporting',
      title: "Analytics et rapports",
      icon: BarChart,
      color: "text-orange-600",
      description: "Analyses avancées et génération de rapports",
      progress: 85,
      articles: [
        { 
          id: 8,
          title: "Tableaux de bord administrateur", 
          duration: "16 min", 
          priority: "Moyenne",
          description: "Monitoring en temps réel des métriques clés",
          views: 1340,
          complexity: "Intermédiaire",
          content: `
# Tableaux de bord administrateur

## Métriques principales
- **Utilisateurs actifs** : Connexions et sessions
- **Contenu** : Publications, consultations, téléchargements
- **Performance** : Temps de réponse, disponibilité
- **Sécurité** : Tentatives d'intrusion, alertes

## Widgets disponibles
- Graphiques de tendances
- Compteurs en temps réel
- Alertes et notifications
- Cartes géographiques

## Personnalisation
- Arrangement des widgets
- Périodes d'analyse
- Filtres personnalisés
- Export et partage
          `
        }
      ]
    }
  ];

  const securityChecklist = [
    { item: "Configuration HTTPS/SSL", status: "completed", priority: "Critique" },
    { item: "Authentification multi-facteurs", status: "completed", priority: "Critique" },
    { item: "Politique de mots de passe", status: "completed", priority: "Haute" },
    { item: "Chiffrement des données", status: "completed", priority: "Critique" },
    { item: "Audit de sécurité mensuel", status: "pending", priority: "Haute" },
    { item: "Formation sécurité équipe", status: "in-progress", priority: "Moyenne" },
    { item: "Plan de continuité d'activité", status: "pending", priority: "Haute" },
    { item: "Tests de pénétration", status: "completed", priority: "Critique" }
  ];

  const systemHealth = [
    { metric: "Uptime", value: "99.9%", status: "excellent", trend: "+0.1%" },
    { metric: "Temps de réponse", value: "1.2s", status: "good", trend: "-0.3s" },
    { metric: "Charge CPU", value: "45%", status: "good", trend: "+5%" },
    { metric: "Utilisation mémoire", value: "67%", status: "warning", trend: "+12%" },
    { metric: "Espace disque", value: "78%", status: "warning", trend: "+3%" },
    { metric: "Connexions actives", value: "1,250", status: "excellent", trend: "+125" }
  ];

  const filteredModules = selectedModule === 'all' 
    ? adminModules 
    : adminModules.filter(module => module.id === selectedModule);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critique': return 'bg-red-100 text-red-800';
      case 'Haute': return 'bg-orange-100 text-orange-800';
      case 'Moyenne': return 'bg-yellow-100 text-yellow-800';
      case 'Basse': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600';
      case 'in-progress': return 'text-yellow-600';
      case 'pending': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getHealthColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'warning': return 'text-yellow-600';
      case 'critical': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <Shield className="w-8 h-8 text-red-600" />
          Guide administrateur complet
        </h2>
        <p className="text-gray-600 text-lg">
          Documentation complète pour l'administration avancée de Dalil.dz
        </p>
      </div>

      {/* Barre de recherche et filtres */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex gap-2 flex-1">
              <Input
                placeholder="Rechercher dans la documentation admin..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button>
                <Search className="w-4 h-4" />
              </Button>
            </div>
            <select 
              value={selectedModule}
              onChange={(e) => setSelectedModule(e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              <option value="all">Tous les modules</option>
              {adminModules.map(module => (
                <option key={module.id} value={module.id}>{module.title}</option>
              ))}
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Tableau de bord système */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-600" />
            État du système en temps réel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {systemHealth.map((health, index) => (
              <div key={index} className="p-3 border rounded-lg text-center">
                <div className="text-sm text-gray-600 mb-1">{health.metric}</div>
                <div className={`text-lg font-bold ${getHealthColor(health.status)} mb-1`}>
                  {health.value}
                </div>
                <div className="text-xs text-gray-500">{health.trend}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="guides" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="security">Sécurité</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
        </TabsList>

        <TabsContent value="guides" className="space-y-6">
          {/* Progression de la formation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-600" />
                Progression de la formation administrateur
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {adminModules.map((module, index) => (
                  <div key={module.id} className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <module.icon className={`w-4 h-4 ${module.color}`} />
                      <h4 className="font-medium text-sm">{module.title}</h4>
                    </div>
                    <Progress value={module.progress} className="mb-2" />
                    <div className="text-xs text-gray-600">{module.progress}% complété</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Modules administrateur */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredModules.map((module) => (
              <Card key={module.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <module.icon className={`w-6 h-6 ${module.color}`} />
                    {module.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600">{module.description}</p>
                  <div className="flex items-center gap-2">
                    <Progress value={module.progress} className="flex-1" />
                    <span className="text-xs text-gray-600">{module.progress}%</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {module.articles.map((article) => (
                      <div key={article.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors group">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm">
                              {article.title}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{article.description}</p>
                          <div className="flex items-center gap-3 text-xs">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-gray-500" />
                              <span className="text-gray-500">{article.duration}</span>
                            </div>
                            <Badge className={`text-xs ${getPriorityColor(article.priority)}`}>
                              {article.priority}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3 text-gray-500" />
                              <span className="text-gray-500">{article.views} vues</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost">
                            <Play className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Download className="w-3 h-3" />
                          </Button>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-red-600" />
                  Liste de contrôle sécurité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {securityChecklist.map((check, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {check.status === 'completed' ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : check.status === 'in-progress' ? (
                          <Activity className="w-5 h-5 text-yellow-600" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-red-600" />
                        )}
                        <div>
                          <span className="font-medium text-sm">{check.item}</span>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge className={`text-xs ${getPriorityColor(check.priority)}`}>
                              {check.priority}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Badge className={
                        check.status === 'completed' ? 'bg-green-100 text-green-800' : 
                        check.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }>
                        {check.status === 'completed' ? 'Terminé' : 
                         check.status === 'in-progress' ? 'En cours' : 'En attente'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Protocoles de sécurité avancés</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: "Gestion des incidents de sécurité", status: "Opérationnel", icon: AlertTriangle },
                    { title: "Procédures de sauvegarde d'urgence", status: "Testé", icon: Database },
                    { title: "Plan de continuité d'activité", status: "Validé", icon: Server },
                    { title: "Audit et conformité RGPD", status: "Conforme", icon: Shield },
                    { title: "Tests de pénétration", status: "Planifié", icon: Target },
                    { title: "Formation équipe sécurité", status: "En cours", icon: Users }
                  ].map((protocol, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <protocol.icon className="w-4 h-4 text-blue-600" />
                        <div>
                          <h4 className="font-medium text-sm">{protocol.title}</h4>
                          <p className="text-xs text-gray-600">Documentation détaillée disponible</p>
                        </div>
                      </div>
                      <Badge variant="outline">{protocol.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="maintenance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600" />
                Tâches de maintenance automatisées
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    task: "Sauvegarde quotidienne", 
                    frequency: "Quotidienne à 02:00", 
                    lastRun: "Aujourd'hui 02:00",
                    status: "Succès",
                    nextRun: "Demain 02:00"
                  },
                  { 
                    task: "Optimisation base de données", 
                    frequency: "Hebdomadaire", 
                    lastRun: "Dimanche 23:00",
                    status: "Succès",
                    nextRun: "Dimanche 23:00"
                  },
                  { 
                    task: "Nettoyage des logs", 
                    frequency: "Mensuelle", 
                    lastRun: "1er du mois",
                    status: "Succès",
                    nextRun: "1er prochain"
                  },
                  { 
                    task: "Mise à jour sécurité", 
                    frequency: "Selon disponibilité", 
                    lastRun: "Il y a 3 jours",
                    status: "En attente",
                    nextRun: "À planifier"
                  },
                  { 
                    task: "Monitoring des performances", 
                    frequency: "Continu", 
                    lastRun: "En cours",
                    status: "Actif",
                    nextRun: "Continu"
                  },
                  { 
                    task: "Scan de vulnérabilités", 
                    frequency: "Hebdomadaire", 
                    lastRun: "Lundi 01:00",
                    status: "Succès",
                    nextRun: "Lundi 01:00"
                  }
                ].map((maintenance, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium">{maintenance.task}</h4>
                        <Badge className={
                          maintenance.status === 'Succès' ? 'bg-green-100 text-green-800' :
                          maintenance.status === 'En attente' ? 'bg-yellow-100 text-yellow-800' :
                          maintenance.status === 'Actif' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }>
                          {maintenance.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">Fréquence: {maintenance.frequency}</p>
                      <p className="text-xs text-gray-500">Dernière exécution: {maintenance.lastRun}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Prochaine exécution</p>
                      <p className="text-xs text-gray-600">{maintenance.nextRun}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Métriques de performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Utilisateurs actifs (24h)</span>
                      <span className="text-green-600">+12%</span>
                    </div>
                    <div className="text-2xl font-bold">1,250</div>
                    <Progress value={75} className="mt-2" />
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Requêtes/minute</span>
                      <span className="text-blue-600">-5%</span>
                    </div>
                    <div className="text-2xl font-bold">847</div>
                    <Progress value={60} className="mt-2" />
                  </div>
                  <div className="p-3 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Temps de réponse moyen</span>
                      <span className="text-green-600">-200ms</span>
                    </div>
                    <div className="text-2xl font-bold">1.2s</div>
                    <Progress value={40} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  Répartition géographique
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { region: "Alger", users: "450", percentage: "36%" },
                    { region: "Oran", users: "280", percentage: "22%" },
                    { region: "Constantine", users: "190", percentage: "15%" },
                    { region: "Annaba", users: "140", percentage: "11%" },
                    { region: "Autres", users: "190", percentage: "16%" }
                  ].map((region, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border rounded">
                      <span className="font-medium">{region.region}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-600">{region.users} utilisateurs</span>
                        <Badge variant="outline">{region.percentage}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Section d'aide rapide pour administrateurs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Actions rapides administrateur
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button className="h-auto p-4 flex flex-col gap-2">
              <Users className="w-6 h-6" />
              <span>Gestion utilisateurs</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Database className="w-6 h-6" />
              <span>Sauvegarde manuelle</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <BarChart className="w-6 h-6" />
              <span>Rapports système</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Settings className="w-6 h-6" />
              <span>Configuration</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
