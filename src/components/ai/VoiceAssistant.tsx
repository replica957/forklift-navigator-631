
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  Languages, 
  Play, 
  Pause,
  Settings,
  Headphones
} from 'lucide-react';

export function VoiceAssistant() {
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ar', name: 'العربية', flag: '🇩🇿' },
    { code: 'dz', name: 'Darija Algérien', flag: '🇩🇿' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const conversations = [
    {
      id: 1,
      question: "Quels sont les délais de recours en droit administratif ?",
      response: "Les délais de recours contentieux sont généralement de 2 mois à compter de la notification de la décision administrative.",
      language: 'fr',
      timestamp: 'Il y a 5 minutes'
    },
    {
      id: 2,
      question: "ما هي إجراءات الطعن في القرارات الإدارية؟",
      response: "إجراءات الطعن تتضمن تقديم طلب إلى المحكمة الإدارية خلال مهلة شهرين من تاريخ التبليغ.",
      language: 'ar',
      timestamp: 'Il y a 10 minutes'
    }
  ];

  const handleStartListening = () => {
    setIsListening(true);
    setIsRecording(true);
    // Simulation d'écoute
    setTimeout(() => {
      setTranscript("Expliquez-moi les procédures de divorce en Algérie");
      setIsListening(false);
      setIsRecording(false);
      
      // Simulation de réponse
      setTimeout(() => {
        setResponse("En Algérie, les procédures de divorce suivent le Code de la famille...");
        setIsSpeaking(true);
        
        setTimeout(() => {
          setIsSpeaking(false);
        }, 3000);
      }, 1000);
    }, 3000);
  };

  const handleStopListening = () => {
    setIsListening(false);
    setIsRecording(false);
  };

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
  };

  return (
    <div className="space-y-6">
      {/* Contrôles principaux */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Headphones className="w-6 h-6 text-blue-600" />
            Assistant Vocal Multilingue
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Bouton principal d'écoute */}
            <div className="flex items-center gap-4">
              <Button
                size="lg"
                onClick={isListening ? handleStopListening : handleStartListening}
                className={`w-16 h-16 rounded-full ${
                  isListening 
                    ? 'bg-red-500 hover:bg-red-600 animate-pulse' 
                    : 'bg-blue-500 hover:bg-blue-600'
                }`}
              >
                {isListening ? (
                  <MicOff className="w-8 h-8" />
                ) : (
                  <Mic className="w-8 h-8" />
                )}
              </Button>
              
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Badge variant={isListening ? "destructive" : "secondary"}>
                    {isListening ? "Écoute en cours..." : "Prêt à écouter"}
                  </Badge>
                  {isSpeaking && (
                    <Badge className="bg-green-500 text-white">
                      <Volume2 className="w-3 h-3 mr-1" />
                      Réponse vocale
                    </Badge>
                  )}
                </div>
                {isRecording && (
                  <div className="text-sm text-gray-500 mt-1">
                    Parlez maintenant...
                  </div>
                )}
              </div>
            </div>

            {/* Sélecteur de langue */}
            <div className="flex items-center gap-2">
              <Languages className="w-5 h-5 text-gray-600" />
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant={currentLanguage === lang.code ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleLanguageChange(lang.code)}
                    className="gap-1"
                  >
                    <span>{lang.flag}</span>
                    <span className="hidden sm:inline">{lang.name}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conversation en temps réel */}
      {(transcript || response) && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Conversation en cours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {transcript && (
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <Mic className="w-4 h-4 text-blue-600" />
                  <span className="font-medium text-blue-800">Votre question:</span>
                </div>
                <p className="text-gray-800">{transcript}</p>
              </div>
            )}
            
            {response && (
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <Volume2 className="w-4 h-4 text-green-600" />
                  <span className="font-medium text-green-800">Assistant IA:</span>
                  <Button variant="outline" size="sm">
                    <Play className="w-3 h-3 mr-1" />
                    Réécouter
                  </Button>
                </div>
                <p className="text-gray-800">{response}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Historique des conversations */}
      <Card>
        <CardHeader>
          <CardTitle>Historique des conversations vocales</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversations.map((conv) => (
              <div key={conv.id} className="border rounded-lg p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">
                    {languages.find(l => l.code === conv.language)?.flag} {languages.find(l => l.code === conv.language)?.name}
                  </Badge>
                  <span className="text-sm text-gray-500">{conv.timestamp}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Q:</span> {conv.question}
                  </div>
                  <div className="text-sm text-gray-700">
                    <span className="font-medium">R:</span> {conv.response}
                  </div>
                </div>
                
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm">
                    <Play className="w-3 h-3 mr-1" />
                    Rejouer
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mic className="w-3 h-3 mr-1" />
                    Continuer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Paramètres vocaux */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Paramètres vocaux
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Vitesse de lecture</label>
              <select className="w-full p-2 border rounded">
                <option>Normale</option>
                <option>Lente</option>
                <option>Rapide</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Voix</label>
              <select className="w-full p-2 border rounded">
                <option>Voix féminine</option>
                <option>Voix masculine</option>
                <option>Voix neutre</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Sensibilité micro</label>
              <select className="w-full p-2 border rounded">
                <option>Normale</option>
                <option>Élevée</option>
                <option>Faible</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
