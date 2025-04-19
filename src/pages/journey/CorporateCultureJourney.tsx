
import React, { useState } from 'react';
import JourneyLayout from '@/components/journey/JourneyLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProgressBar from '@/components/journey/ProgressBar';
import RewardCard from '@/components/journey/RewardCard';
import Badge from '@/components/journey/Badge';
import RewardPopup from '@/components/journey/RewardPopup';
import { Trophy, Star, Gift, CheckCircle, Clock } from 'lucide-react';

// Quiz questions
const quizQuestions = [
  {
    type: 'intro',
    title: "Bienvenido a 'Conquista Acme'",
    description: "Demuestra cuánto sabes de nuestra empresa y gana premios",
  },
  {
    type: 'multiple-choice',
    question: "¿En qué año fue fundada Acme?",
    options: ["1995", "2005", "2010", "2015"],
    correctAnswer: "2005",
    points: 50,
    badge: "Historiador",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    type: 'checkbox',
    question: "¿Cuáles de los siguientes son valores de Acme?",
    options: ["Innovación", "Competitividad", "Colaboración", "Individualismo", "Transparencia", "Jerarquía"],
    correctAnswers: ["Innovación", "Colaboración", "Transparencia"],
    points: 75,
    badge: "Embajador de cultura",
    coupon: "Cupón para cafetería"
  },
  {
    type: 'drag-drop',
    question: "Relaciona cada departamento con su responsabilidad principal",
    items: {
      "Marketing": "Atracción de clientes",
      "Ventas": "Conversión de leads",
      "Producto": "Desarrollo de soluciones",
      "Soporte": "Retención de clientes"
    },
    points: 100
  },
  {
    type: 'timed-quiz',
    questions: [
      {
        question: "¿Quién es el CEO actual de Acme?",
        options: ["Juan Pérez", "María López", "Carlos García", "Ana Martínez"],
        correctAnswer: "María López"
      },
      {
        question: "¿Cuántas oficinas tiene Acme globalmente?",
        options: ["3", "5", "7", "9"],
        correctAnswer: "7"
      },
      {
        question: "¿Cuál es el producto estrella de Acme?",
        options: ["Acme CRM", "Acme Analytics", "Acme Platform", "Acme Social"],
        correctAnswer: "Acme Platform"
      }
    ],
    timeLimit: 30, // seconds
    points: 150
  },
  {
    type: 'result'
  }
];

const CorporateCultureJourney: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [badges, setBadges] = useState<string[]>([]);
  const [coupons, setCoupons] = useState<string[]>([]);
  const [showReward, setShowReward] = useState(false);
  const [currentReward, setCurrentReward] = useState<{
    title: string;
    description: string;
    icon: React.ReactNode;
  } | null>(null);
  
  // For checkbox questions
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  
  // For timed quiz
  const [timedQuizIndex, setTimedQuizIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [timedQuizActive, setTimedQuizActive] = useState(false);
  const [timedCorrectAnswers, setTimedCorrectAnswers] = useState(0);
  
  const handleOptionSelect = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  
  const handleNext = () => {
    const currentQuiz = quizQuestions[currentStep];
    let isCorrect = false;
    
    // Check answers for different question types
    if (currentQuiz.type === 'multiple-choice') {
      if (selectedOptions[0] === currentQuiz.correctAnswer) {
        isCorrect = true;
        addPoints(currentQuiz.points);
        if (currentQuiz.badge) addBadge(currentQuiz.badge);
        if (currentQuiz.coupon) addCoupon(currentQuiz.coupon);
      }
    } else if (currentQuiz.type === 'checkbox') {
      const allCorrect = currentQuiz.correctAnswers.every(answer => selectedOptions.includes(answer));
      const noIncorrect = selectedOptions.every(selected => currentQuiz.correctAnswers.includes(selected));
      
      if (allCorrect && noIncorrect) {
        isCorrect = true;
        addPoints(currentQuiz.points);
        if (currentQuiz.badge) addBadge(currentQuiz.badge);
        if (currentQuiz.coupon) addCoupon(currentQuiz.coupon);
      }
    } else if (currentQuiz.type === 'drag-drop') {
      // Simplified for demo - assuming correct
      isCorrect = true;
      addPoints(currentQuiz.points);
    } else if (currentQuiz.type === 'timed-quiz' && timedQuizActive) {
      // Handled separately
      return;
    }
    
    // Reset selections
    setSelectedOptions([]);
    
    // Handle timed quiz activation
    if (currentStep + 1 < quizQuestions.length && quizQuestions[currentStep + 1].type === 'timed-quiz') {
      setTimedQuizActive(true);
      setTimedQuizIndex(0);
      setTimeLeft(quizQuestions[currentStep + 1].timeLimit);
      
      // Start timer
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            // Time's up - move to results
            setCurrentStep(currentStep + 2);
            setTimedQuizActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      return () => clearInterval(timer);
    }
    
    // Move to next step
    setCurrentStep(currentStep + 1);
  };
  
  const handleTimedAnswer = (option: string) => {
    const quiz = quizQuestions[currentStep];
    const question = quiz.questions[timedQuizIndex];
    
    if (option === question.correctAnswer) {
      setTimedCorrectAnswers(prev => prev + 1);
    }
    
    if (timedQuizIndex + 1 < quiz.questions.length) {
      setTimedQuizIndex(timedQuizIndex + 1);
    } else {
      // End of timed quiz
      const correctRatio = timedCorrectAnswers / quiz.questions.length;
      const earnedPoints = Math.round(quiz.points * correctRatio);
      
      addPoints(earnedPoints);
      setCurrentStep(currentStep + 1);
      setTimedQuizActive(false);
    }
  };
  
  const addPoints = (points: number) => {
    setTotalPoints(prev => prev + points);
    
    setCurrentReward({
      title: "¡Puntos ganados!",
      description: `Has ganado ${points} puntos`,
      icon: <Star className="h-6 w-6 text-yellow-500" />
    });
    setShowReward(true);
  };
  
  const addBadge = (badge: string) => {
    setBadges(prev => [...prev, badge]);
    
    setTimeout(() => {
      setCurrentReward({
        title: "¡Badge desbloqueado!",
        description: `Has obtenido el badge "${badge}"`,
        icon: <Trophy className="h-6 w-6 text-indigo-600" />
      });
      setShowReward(true);
    }, 1500);
  };
  
  const addCoupon = (coupon: string) => {
    setCoupons(prev => [...prev, coupon]);
    
    setTimeout(() => {
      setCurrentReward({
        title: "¡Cupón desbloqueado!",
        description: coupon,
        icon: <Gift className="h-6 w-6 text-green-600" />
      });
      setShowReward(true);
    }, 3000);
  };

  const progress = Math.min((currentStep / (quizQuestions.length - 1)) * 100, 100);
  
  return (
    <JourneyLayout
      title="Onboarding gamificado para empleados"
      subtitle="Aprende sobre la cultura de Acme con un juego de trivia y gana premios"
      bgColor="bg-gradient-to-br from-purple-600 to-pink-600"
    >
      {/* Main content area */}
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column: Progress and rewards */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tu progreso</CardTitle>
                  <CardDescription>Avanza en el mapa de juego para desbloquear más recompensas</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProgressBar 
                    progress={Math.round(progress)} 
                    label={`Nivel de experto Acme`} 
                    color="bg-gradient-to-r from-purple-500 to-pink-500"
                  />
                  
                  <div className="mt-4">
                    {progress < 25 && <p className="text-sm text-gray-500">Nivel: Principiante</p>}
                    {progress >= 25 && progress < 50 && <p className="text-sm text-gray-500">Nivel: Aprendiz</p>}
                    {progress >= 50 && progress < 75 && <p className="text-sm text-gray-500">Nivel: Avanzado</p>}
                    {progress >= 75 && progress < 100 && <p className="text-sm text-gray-500">Nivel: Experto</p>}
                    {progress === 100 && <p className="text-sm text-purple-600 font-medium">Nivel: Maestro Acme</p>}
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                <RewardCard
                  title="Puntos acumulados"
                  value={totalPoints}
                  icon={<Star className="h-5 w-5 text-yellow-300" />}
                  bgColor="bg-gradient-to-br from-purple-600 to-indigo-600"
                />
                
                <RewardCard
                  title="Badges"
                  value={badges.length}
                  icon={<Trophy className="h-5 w-5 text-amber-500" />}
                  bgColor="bg-gradient-to-br from-pink-500 to-rose-600"
                />
                
                <RewardCard
                  title="Cupones"
                  value={coupons.length}
                  icon={<Gift className="h-5 w-5 text-green-500" />}
                  bgColor="bg-gradient-to-br from-violet-600 to-purple-700"
                />
              </div>
              
              {/* Game map visualization */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>Mapa de Progreso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute top-0 bottom-0 left-6 border-l-2 border-dashed border-gray-300"></div>
                    
                    {quizQuestions.slice(0, -1).map((_, index) => (
                      <div key={index} className="relative flex items-center mb-6">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                          index < currentStep 
                            ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white' 
                            : index === currentStep 
                              ? 'bg-white border-2 border-purple-500 text-purple-500' 
                              : 'bg-gray-200 text-gray-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="ml-4">
                          <div className="font-medium">
                            {index === 0 ? 'Inicio' : `Nivel ${index}`}
                          </div>
                          <div className="text-sm text-gray-500">
                            {index < currentStep && '✓ Completado'}
                            {index === currentStep && '🔵 Actual'}
                            {index > currentStep && '⚪ Pendiente'}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="relative flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                        currentStep >= quizQuestions.length - 1
                          ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        🏆
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">Meta</div>
                        <div className="text-sm text-gray-500">
                          {currentStep >= quizQuestions.length - 1 ? '✓ Alcanzada' : '⚪ Pendiente'}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {badges.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Tus Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {badges.map((badge, index) => (
                        <Badge 
                          key={index} 
                          text={badge} 
                          color="bg-purple-100 text-purple-800" 
                          icon={<Trophy className="h-3 w-3" />}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          
          {/* Right column: Main quiz content */}
          <div className="lg:col-span-2">
            <Card className="border shadow-lg">
              {quizQuestions[currentStep].type === 'intro' ? (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                    <Trophy className="h-10 w-10 text-purple-600" />
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-3">
                    🎮 {quizQuestions[currentStep].title}
                  </h2>
                  <p className="text-gray-600 mb-8 text-lg">
                    {quizQuestions[currentStep].description}
                  </p>
                  
                  <Button 
                    onClick={handleNext}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    ¡Jugar ahora!
                  </Button>
                </div>
              ) : quizQuestions[currentStep].type === 'multiple-choice' ? (
                <>
                  <CardHeader>
                    <CardTitle className="text-xl">Nivel 1 - Historia de la empresa</CardTitle>
                    <CardDescription>Elige la respuesta correcta</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {quizQuestions[currentStep].image && (
                      <div className="rounded-lg overflow-hidden h-48 mb-4">
                        <img 
                          src={quizQuestions[currentStep].image} 
                          alt="Question illustration" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    
                    <div className="text-lg font-medium">
                      {quizQuestions[currentStep].question}
                    </div>
                    
                    <div className="space-y-3">
                      {quizQuestions[currentStep].options.map((option, index) => (
                        <div 
                          key={index}
                          onClick={() => setSelectedOptions([option])}
                          className={`p-4 rounded-lg cursor-pointer transition-colors ${
                            selectedOptions.includes(option) 
                              ? 'bg-purple-100 border-2 border-purple-500' 
                              : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center text-sm text-purple-600">
                        <Star className="h-4 w-4 mr-1" />
                        <span>+{quizQuestions[currentStep].points} puntos posibles</span>
                      </div>
                    </div>
                    
                    <Button
                      onClick={handleNext}
                      disabled={selectedOptions.length === 0}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      Comprobar respuesta
                    </Button>
                  </CardFooter>
                </>
              ) : quizQuestions[currentStep].type === 'checkbox' ? (
                <>
                  <CardHeader>
                    <CardTitle className="text-xl">Nivel 2 - Cultura y valores</CardTitle>
                    <CardDescription>Selecciona todos los valores que definen a Acme</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="text-lg font-medium">
                      {quizQuestions[currentStep].question}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {quizQuestions[currentStep].options.map((option, index) => (
                        <div 
                          key={index}
                          onClick={() => handleOptionSelect(option)}
                          className={`p-4 rounded-lg cursor-pointer transition-colors ${
                            selectedOptions.includes(option) 
                              ? 'bg-purple-100 border-2 border-purple-500' 
                              : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 rounded flex items-center justify-center mr-2 ${
                              selectedOptions.includes(option) ? 'bg-purple-500 text-white' : 'border border-gray-300'
                            }`}>
                              {selectedOptions.includes(option) && <CheckCircle className="h-4 w-4" />}
                            </div>
                            {option}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center text-sm text-purple-600 mr-3">
                        <Star className="h-4 w-4 mr-1" />
                        <span>+{quizQuestions[currentStep].points} puntos posibles</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-indigo-600">
                        <Trophy className="h-4 w-4 mr-1" />
                        <span>Badge: {quizQuestions[currentStep].badge}</span>
                      </div>
                    </div>
                    
                    <Button
                      onClick={handleNext}
                      disabled={selectedOptions.length === 0}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      Comprobar respuesta
                    </Button>
                  </CardFooter>
                </>
              ) : quizQuestions[currentStep].type === 'drag-drop' ? (
                <>
                  <CardHeader>
                    <CardTitle className="text-xl">Nivel 3 - Organización</CardTitle>
                    <CardDescription>Relaciona cada departamento con su función principal</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="text-lg font-medium">
                      {quizQuestions[currentStep].question}
                    </div>
                    
                    <div className="space-y-4">
                      {Object.entries(quizQuestions[currentStep].items).map(([dept, func], index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-1/2 bg-purple-100 p-3 rounded-l-lg font-medium">{dept}</div>
                          <div className="w-1/2 bg-gray-100 p-3 rounded-r-lg">{func}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <p className="text-yellow-800 text-sm">
                        En una implementación real, este sería un sistema de arrastrar y soltar. 
                        Para esta demo, asumiremos que todas las respuestas son correctas.
                      </p>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center">
                      <div className="flex items-center text-sm text-purple-600">
                        <Star className="h-4 w-4 mr-1" />
                        <span>+{quizQuestions[currentStep].points} puntos posibles</span>
                      </div>
                    </div>
                    
                    <Button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      Verificar conexiones
                    </Button>
                  </CardFooter>
                </>
              ) : quizQuestions[currentStep].type === 'timed-quiz' ? (
                <>
                  <CardHeader>
                    <CardTitle className="text-xl">Nivel final - Trivias rápidas</CardTitle>
                    <CardDescription>Responde rápidamente a estas preguntas</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="flex justify-between items-center">
                      <div className="text-sm font-medium">
                        Pregunta {timedQuizIndex + 1} de {quizQuestions[currentStep].questions.length}
                      </div>
                      <div className="flex items-center text-sm font-medium text-amber-600">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{timeLeft} segundos</span>
                      </div>
                    </div>
                    
                    <div className="text-lg font-medium">
                      {quizQuestions[currentStep].questions[timedQuizIndex].question}
                    </div>
                    
                    <div className="space-y-3">
                      {quizQuestions[currentStep].questions[timedQuizIndex].options.map((option, index) => (
                        <div 
                          key={index}
                          onClick={() => handleTimedAnswer(option)}
                          className="p-4 rounded-lg cursor-pointer transition-colors bg-gray-50 border border-gray-200 hover:bg-purple-100 hover:border-purple-300"
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </>
              ) : quizQuestions[currentStep].type === 'result' ? (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <Trophy className="h-10 w-10 text-green-600" />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3">
                    ¡Has terminado la trivia!
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Resultados finales:
                  </p>
                  
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 rounded-lg p-6 mb-6">
                    <p className="text-2xl font-bold text-purple-800 mb-2">
                      {totalPoints} puntos obtenidos
                    </p>
                    <p className="text-purple-700 mb-4">
                      ¡Felicidades! Has desbloqueado {badges.length} badges y {coupons.length} cupones
                    </p>
                    
                    <div className="flex justify-center gap-2 flex-wrap">
                      {badges.map((badge, index) => (
                        <Badge 
                          key={index} 
                          text={badge} 
                          color="bg-purple-100 text-purple-800" 
                          icon={<Trophy className="h-3 w-3" />}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button 
                      variant="outline"
                      onClick={() => {
                        setCurrentStep(0);
                        setTotalPoints(0);
                        setBadges([]);
                        setCoupons([]);
                      }}
                    >
                      Jugar otra vez
                    </Button>
                    
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      Compartir en Slack
                    </Button>
                  </div>
                </div>
              ) : null}
            </Card>
          </div>
        </div>
      </div>
      
      {/* Rewards popup */}
      {currentReward && (
        <RewardPopup 
          title={currentReward.title}
          description={currentReward.description}
          icon={currentReward.icon}
          isVisible={showReward}
          onClose={() => setShowReward(false)}
        />
      )}
    </JourneyLayout>
  );
};

export default CorporateCultureJourney;
