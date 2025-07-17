import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Clock, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  TrendingUp,
  Calendar,
  Bell,
  BarChart3,
  Eye,
  Download,
  Share2,
  Star,
  MessageSquare,
  Scale,
  Users,
  Activity
} from 'lucide-react';

interface ProcedureInProgress {
  id: string;
  title: string;
  status: 'En cours' | 'En attente' | 'Terminée' | 'Bloquée';
  progress: number;
  nextStep: string;
  deadline: string;
  institution: string;
}

const mockProceduresInProgress: ProcedureInProgress[] = [
  {
    id: '1',
    title: 'Création SARL "Tech Innovations"',
    status: 'En cours',
    progress: 65,
    nextStep: 'Dépôt des statuts au CNRC',
    deadline: '2024-02-15',
    institution: 'CNRC'
  },
  {
    id: '2',
    title: 'Demande de permis de construire',
    status: 'En attente',
    progress: 30,
    nextStep: 'Attente validation urbanisme',
    deadline: '2024-03-01',
    institution: 'APC'
  },
  {
    id: '3',
    title: 'Renouvellement agrément',
    status: 'Bloquée',
    progress: 15,
    nextStep: 'Document manquant: attestation fiscale',
    deadline: '2024-01-30',
    institution: 'Ministère du Commerce'
  }
];

const recentActivity = [
  {
    id: 1,
    type: "update",
    title: "Mise à jour du Code du Travail",
    description: "Article 15 modifié - Nouvelles dispositions sur le télétravail",
    time: "Il y a 2 heures",
    user: "Ministère du Travail",
    status: "published"
  },
  {
    id: 2,
    type: "procedure",
    title: "Nouvelle procédure ajoutée",
    description: "Procédure de demande de nationalité - Version 2024",
    time: "Il y a 4 heures",
    user: "Ahmed Benali",
    status: "draft"
  },
  {
    id: 3,
    type: "analysis",
    title: "Rapport d'analyse généré",
    description: "Tendances législatives - Premier trimestre 2024",
    time: "Il y a 6 heures",
    user: "Système",
    status: "completed"
  },
  {
    id: 4,
    type: "comment",
    title: "Nouveau commentaire",
    description: "Discussion sur l'article 45 du Code de Commerce",
    time: "Il y a 8 heures",
    user: "Fatima Kaddour",
    status: "active"
  }
];

const notifications = [
  {
    id: 1,
    title: "Nouveau texte juridique publié",
    message: "Loi n° 24-03 relative aux start-ups",
    time: "Il y a 30 minutes",
    type: "info",
    unread: true
  },
  {
    id: 2,
    title: "Échéance de tâche",
    message: "Révision du rapport d'analyse - Due demain",
    time: "Il y a 1 heure",
    type: "warning",
    unread: true
  },
  {
    id: 3,
    title: "Validation requise",
    message: "Procédure PR-2024-15 en attente d'approbation",
    time: "Il y a 2 heures",
    type: "urgent",
    unread: false
  }
];

const myTasks = [
  {
    id: 1,
    title: "Analyser l'impact de la loi 24-03",
    priority: "high",
    status: "inProgress",
    progress: 65,
    dueDate: "2024-02-15",
    assignedTo: "Vous"
  },
  {
    id: 2,
    title: "Réviser les procédures administratives",
    priority: "medium",
    status: "pending",
    progress: 0,
    dueDate: "2024-02-20",
    assignedTo: "Équipe juridique"
  },
  {
    id: 3,
    title: "Préparer le rapport mensuel",
    priority: "low",
    status: "completed",
    progress: 100,
    dueDate: "2024-02-01",
    assignedTo: "Vous"  
  }
];

const recentDocuments = [
  {
    id: 1,
    name: "Code du Travail - Version 2024",
    type: "Loi",
    lastModified: "Il y a 2 heures",
    size: "2.4 MB",
    views: 156,
    category: "Droit social"
  },
  {
    id: 2,
    name: "Procédure de naturalisation",
    type: "Procédure",
    lastModified: "Il y a 1 jour",
    size: "1.8 MB",
    views: 89,
    category: "Immigration"
  },
  {
    id: 3,
    name: "Jurisprudence commerciale Q1 2024",
    type: "Jurisprudence",
    lastModified: "Il y a 3 jours",
    size: "5.2 MB",
    views: 234,
    category: "Droit commercial"
  }
];

export function PersonalDashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'inProgress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'active': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'info': return <Bell className="w-4 h-4 text-blue-600" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case 'urgent': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <Bell className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Petit tableau de bord déplacé en premier */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-600" />
            Tableau de bord personnel
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="recentActivity" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="recentActivity">Activité récente</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="myTasks">Mes tâches</TabsTrigger>
              <TabsTrigger value="recentDocuments">Documents récents</TabsTrigger>
            </TabsList>

            <TabsContent value="recentActivity" className="space-y-4 mt-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    {activity.type === 'update' && <FileText className="w-4 h-4 text-green-600" />}
                    {activity.type === 'procedure' && <Scale className="w-4 h-4 text-green-600" />}
                    {activity.type === 'analysis' && <BarChart3 className="w-4 h-4 text-green-600" />}
                    {activity.type === 'comment' && <MessageSquare className="w-4 h-4 text-green-600" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{activity.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-gray-500">{activity.time}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{activity.user}</span>
                      <Badge className={getStatusColor(activity.status)} variant="secondary">
                        {activity.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4 mt-6">
              {notifications.map((notification) => (
                <div key={notification.id} className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${notification.unread ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'}`}>
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-medium truncate ${notification.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <span className="text-xs text-gray-500 mt-2 block">{notification.time}</span>
                  </div>
                  {notification.unread && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                  )}
                </div>
              ))}
            </TabsContent>

            <TabsContent value="myTasks" className="space-y-4 mt-6">
              {myTasks.map((task) => (
                <div key={task.id} className="p-4 border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-medium text-gray-900 flex-1">{task.title}</h4>
                    <div className="flex gap-2">
                      <Badge className={getPriorityColor(task.priority)} variant="secondary">
                        {task.priority}
                      </Badge>
                      <Badge className={getStatusColor(task.status)} variant="secondary">
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Progression</span>
                      <span className="font-medium">{task.progress}%</span>
                    </div>
                    <Progress value={task.progress} className="w-full" />
                  </div>

                  <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {task.dueDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {task.assignedTo}
                    </span>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="recentDocuments" className="space-y-4 mt-6">
              {recentDocuments.map((doc) => (
                <div key={doc.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{doc.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Badge variant="outline">{doc.type}</Badge>
                      <span>•</span>
                      <span>{doc.size}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {doc.views}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{doc.lastModified}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" title="Ouvrir le document">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" title="Télécharger le document">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" title="Partager le document">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" title="Ajouter aux favoris">
                      <Star className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Période d'analyse - maintenant après le tableau de bord personnel */}
      <Card>
        <CardHeader>
          <CardTitle>Période d'analyse</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">Section période d'analyse...</p>
        </CardContent>
      </Card>
    </div>
  );
}
