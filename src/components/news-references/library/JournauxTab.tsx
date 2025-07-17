
import React from 'react';
import { ActionButtons } from './ActionButtons';
import { ResourceCard } from './ResourceCard';
import { Newspaper } from 'lucide-react';

export function JournauxTab() {
  const journaux = [
    {
      id: 1,
      title: "Journal Officiel de la République Algérienne",
      author: "République Algérienne",
      publisher: "Imprimerie Officielle",
      year: "2024",
      pages: 50,
      category: "Officiel",
      description: "Publication officielle des textes réglementaires"
    },
    {
      id: 2,
      title: "Bulletin Officiel des Annonces Légales",
      author: "Ministère de la Justice",
      publisher: "Imprimerie Officielle",
      year: "2024",
      pages: 30,
      category: "Légal",
      description: "Annonces légales et judiciaires"
    }
  ];

  return (
    <div className="space-y-6">
      <ActionButtons resourceType="journal" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {journaux.map((journal) => (
          <ResourceCard 
            key={journal.id}
            id={journal.id}
            title={journal.title}
            author={journal.author}
            publisher={journal.publisher}
            year={journal.year}
            pages={journal.pages}
            category={journal.category}
            description={journal.description}
            icon={<Newspaper className="w-5 h-5" />}
            iconBgColor="bg-gray-100"
            iconColor="text-gray-600"
            actionLabel="Consulter"
          />
        ))}
      </div>
    </div>
  );
}
