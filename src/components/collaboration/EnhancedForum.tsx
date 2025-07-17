import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ForumActionModal } from '@/components/modals/ForumActionModal';
import {
  MessageSquare,
  Users,
  UserPlus,
  Search,
  Plus,
  TrendingUp,
  Clock,
  Eye,
  MessageCircle,
  Star,
  Filter
} from 'lucide-react';

export function EnhancedForum() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState<'discussion' | 'join' | 'register'>('discussion');

  const handleOpenModal = (action: 'discussion' | 'join' | 'register') => {
    setModalAction(action);
    setShowModal(true);
  };

  const forumData = [
    {
      id: 1,
      title: "Interprétation de l'article 1240 du Code civil",
      author: "M. Benali",
      category: "Droit Civil",
      replies: 12,
      views: 156,
      lastActivity: "2025-01-02 14:30",
      status: "active",
      tags: ["responsabilité", "dommages", "jurisprudence"]
    },
    {
      id: 2,
      title: "Nouvelle jurisprudence en droit commercial",
      author: "Mme Dubois",
      category: "Droit Commercial",
      replies: 8,
      views: 89,
      lastActivity: "2025-01-02 11:15",
      status: "resolved",
      tags: ["commercial", "contrat", "jurisprudence"]
    },
    {
      id: 3,
      title: "Procédure d'urgence en référé",
      author: "Dr. Martin",
      category: "Procédure",
      replies: 15,
      views: 203,
      lastActivity: "2025-01-01 16:45",
      status: "active",
      tags: ["référé", "urgence", "procédure"]
    },
    {
      id: 4,
      title: "Application du nouveau Code de procédure civile",
      author: "Prof. Amara",
      category: "Procédure Civile",
      replies: 23,
      views: 340,
      lastActivity: "2025-01-03 09:20",
      status: "active",
      tags: ["procédure civile", "réforme", "application"]
    },
    {
      id: 5,
      title: "Droit de la famille - Garde d'enfants",
      author: "Mme Kaci",
      category: "Droit de la Famille",
      replies: 18,
      views: 278,
      lastActivity: "2025-01-02 16:45",
      status: "active",
      tags: ["famille", "garde", "enfants"]
    },
    {
      id: 6,
      title: "Contrats commerciaux internationaux",
      author: "Dr. Ziani",
      category: "Droit International",
      replies: 31,
      views: 456,
      lastActivity: "2025-01-01 11:30",
      status: "resolved",
      tags: ["international", "commerce", "contrats"]
    },
    {
      id: 7,
      title: "Réforme du droit du travail 2024",
      author: "M. Brahimi",
      category: "Droit du Travail",
      replies: 42,
      views: 789,
      lastActivity: "2025-01-03 14:15",
      status: "active",
      tags: ["travail", "réforme", "2024"]
    },
    {
      id: 8,
      title: "Propriété intellectuelle et nouvelles technologies",
      author: "Mme Saidi",
      category: "Propriété Intellectuelle",
      replies: 27,
      views: 521,
      lastActivity: "2025-01-02 13:50",
      status: "active",
      tags: ["propriété", "technologie", "innovation"]
    }
  ];

  const filteredDiscussions = forumData.filter(discussion =>
    discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    discussion.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    discussion.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header avec boutons d'action */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Forum de Discussion Juridique</h2>
          <p className="text-gray-600">Échangez avec des professionnels du droit</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleOpenModal('register')}>
            <UserPlus className="w-4 h-4 mr-2" />
            S'inscrire
          </Button>
          <Button variant="outline" onClick={() => handleOpenModal('join')}>
            <Users className="w-4 h-4 mr-2" />
            Rejoindre
          </Button>
          <Button onClick={() => handleOpenModal('discussion')}>
            <Plus className="w-4 h-4 mr-2" />
            Nouvelle Discussion
          </Button>
        </div>
      </div>
      
      {/* Barre de recherche */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          placeholder="Rechercher dans les discussions..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Statistiques du forum */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">1,248</p>
                <p className="text-sm text-gray-600">Discussions</p>
              </div>
              <MessageSquare className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">3,567</p>
                <p className="text-sm text-gray-600">Membres</p>
              </div>
              <Users className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">8,912</p>
                <p className="text-sm text-gray-600">Réponses</p>
              </div>
              <MessageCircle className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">156</p>
                <p className="text-sm text-gray-600">Actifs aujourd'hui</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">Toutes les discussions</TabsTrigger>
          <TabsTrigger value="popular">Populaires</TabsTrigger>
          <TabsTrigger value="recent">Récentes</TabsTrigger>
          <TabsTrigger value="resolved">Résolues</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredDiscussions.map((discussion) => (
            <Card key={discussion.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                        {discussion.title}
                      </h3>
                      <Badge variant={discussion.status === 'active' ? 'default' : 'secondary'}>
                        {discussion.status === 'active' ? 'Actif' : 'Résolu'}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span>Par {discussion.author}</span>
                      <Badge variant="outline">{discussion.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {discussion.lastActivity}
                      </div>
                    </div>
                    
                    <div className="flex gap-2 flex-wrap">
                      {discussion.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right text-sm text-gray-600">
                    <div className="flex items-center gap-1 mb-1">
                      <MessageCircle className="w-4 h-4" />
                      {discussion.replies} réponses
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {discussion.views} vues
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="popular" className="space-y-4">
          {forumData
            .sort((a, b) => b.views - a.views)
            .slice(0, 5)
            .map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                        <Badge variant={discussion.status === 'active' ? 'default' : 'secondary'}>
                          {discussion.status === 'active' ? 'Actif' : 'Résolu'}
                        </Badge>
                        <Star className="w-4 h-4 text-yellow-500" />
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>Par {discussion.author}</span>
                        <Badge variant="outline">{discussion.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {discussion.lastActivity}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 flex-wrap">
                        {discussion.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-right text-sm text-gray-600">
                      <div className="flex items-center gap-1 mb-1">
                        <MessageCircle className="w-4 h-4" />
                        {discussion.replies} réponses
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {discussion.views} vues
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          {forumData
            .sort((a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime())
            .slice(0, 5)
            .map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                        <Badge variant={discussion.status === 'active' ? 'default' : 'secondary'}>
                          {discussion.status === 'active' ? 'Actif' : 'Résolu'}
                        </Badge>
                        <Clock className="w-4 h-4 text-green-500" />
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>Par {discussion.author}</span>
                        <Badge variant="outline">{discussion.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {discussion.lastActivity}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 flex-wrap">
                        {discussion.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-right text-sm text-gray-600">
                      <div className="flex items-center gap-1 mb-1">
                        <MessageCircle className="w-4 h-4" />
                        {discussion.replies} réponses
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {discussion.views} vues
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="resolved" className="space-y-4">
          {forumData
            .filter(discussion => discussion.status === 'resolved')
            .map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                        <Badge variant="secondary">Résolu</Badge>
                        <Badge variant="outline" className="bg-green-50 text-green-700">Solution trouvée</Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <span>Par {discussion.author}</span>
                        <Badge variant="outline">{discussion.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {discussion.lastActivity}
                        </div>
                      </div>
                      
                      <div className="flex gap-2 flex-wrap">
                        {discussion.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-right text-sm text-gray-600">
                      <div className="flex items-center gap-1 mb-1">
                        <MessageCircle className="w-4 h-4" />
                        {discussion.replies} réponses
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {discussion.views} vues
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>

      {/* Modal */}
      <ForumActionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        action={modalAction}
      />
    </div>
  );
}
