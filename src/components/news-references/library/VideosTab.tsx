
import React from 'react';
import { ActionButtons } from './ActionButtons';
import { ResourceCard } from './ResourceCard';
import { Play } from 'lucide-react';

export function VideosTab() {
  const videos = [
    {
      id: 1,
      title: "Conférence : Le nouveau code de procédure",
      speaker: "Pr. Karim Benali",
      duration: "1h 30min",
      year: "2024",
      category: "Procédure",
      description: "Présentation des nouvelles dispositions procédurales"
    },
    {
      id: 2,
      title: "Séminaire : Droit des investissements",
      speaker: "Dr. Samia Redjimi",
      duration: "2h 15min",
      year: "2024",
      category: "Économique",
      description: "Les enjeux juridiques de l'investissement en Algérie"
    }
  ];

  return (
    <div className="space-y-6">
      <ActionButtons resourceType="video" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <ResourceCard 
            key={video.id}
            id={video.id}
            title={video.title}
            speaker={video.speaker}
            duration={video.duration}
            year={video.year}
            category={video.category}
            description={video.description}
            icon={<Play className="w-5 h-5" />}
            iconBgColor="bg-red-100"
            iconColor="text-red-600"
            actionLabel="Regarder"
          />
        ))}
      </div>
    </div>
  );
}
