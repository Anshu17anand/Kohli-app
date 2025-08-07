// src/app/quiz/page.tsx
'use client';

import { useState } from 'react';
import Link from "next/link";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
}

const quizQuestions: Question[] = [
  // Easy Questions (2 remain)
  {
    id: 1,
    question: "What is Virat Kohli's nickname?",
    options: ["King Kohli", "Run Machine", "Chiku", "All of the above"],
    correctAnswer: 3, // "All of the above"
    difficulty: "easy"
  },
  {
    id: 2,
    question: "In which year did Virat Kohli make his international debut?",
    options: ["2006", "2008", "2010", "2012"],
    correctAnswer: 1, // 2008
    difficulty: "easy"
  },
  // Harder replacement for Q3
  {
    id: 3,
    question: "What was Virat Kohli's score in his first-ever IPL century?",
    options: ["100", "107", "113", "109"],
    correctAnswer: 2, // 113
    difficulty: "easy"
  },
  
  // Medium Questions (4)
  {
    id: 4,
    question: "How many centuries has Virat Kohli scored in ODI cricket?",
    options: ["45", "50", "55", "60"],
    correctAnswer: 1, // 50
    difficulty: "medium"
  },
  {
    id: 5,
    question: "What is Virat Kohli's highest score in Test cricket?",
    options: ["243", "254", "254*", "245"],
    correctAnswer: 2, // 254*
    difficulty: "medium"
  },
  {
    id: 6,
    question: "Which year did Virat Kohli become the captain of India's Test team?",
    options: ["2014", "2015", "2016", "2017"],
    correctAnswer: 1, // 2015
    difficulty: "medium"
  },
  // Harder replacement for Q7
  {
    id: 7,
    question: "Who was Virat Kohli's first wicket in international cricket?",
    options: ["Kevin Pietersen", "Brendon McCullum", "Alastair Cook", "Tillakaratne Dilshan"],
    correctAnswer: 3, // Tillakaratne Dilshan
    difficulty: "medium"
  },
  
  // Hard Questions (3)
  {
    id: 8,
    question: "What is Virat Kohli's career batting average in Test cricket?",
    options: ["48.93", "49.29", "49.53", "49.93"],
    correctAnswer: 1, // 49.29
    difficulty: "hard"
  },
  {
    id: 9,
    question: "How many double centuries has Virat Kohli scored in international cricket?",
    options: ["6", "7", "8", "9"],
    correctAnswer: 1, // 7
    difficulty: "hard"
  },
  {
    id: 10,
    question: "Against which team did Virat Kohli score his first Test double century?",
    options: ["Australia", "Bangladesh", "West Indies", "England"],
    correctAnswer: 2, // West Indies
    difficulty: "hard"
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [correctByDifficulty, setCorrectByDifficulty] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
  });

  const handleAnswerSelect = (answerIndex: number) => {
    if (!answered) {
      setSelectedAnswer(answerIndex);
    }
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
      if (isCorrect) {
        setScore(score + 1);
        setCorrectByDifficulty(prev => ({
          ...prev,
          [quizQuestions[currentQuestion].difficulty]: prev[quizQuestions[currentQuestion].difficulty] + 1
        }));
      }
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnswered(false);
      } else {
        setShowResult(true);
      }
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
      if (isCorrect) {
        setScore(score + 1);
        setCorrectByDifficulty(prev => ({
          ...prev,
          [quizQuestions[currentQuestion].difficulty]: prev[quizQuestions[currentQuestion].difficulty] + 1
        }));
      }
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
    setCorrectByDifficulty({ easy: 0, medium: 0, hard: 0 });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-white';
    }
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "Excellent! You're a true Kohli fan! 🏏";
    if (percentage >= 60) return "Good job! You know your cricket! 🏆";
    if (percentage >= 40) return "Not bad! Keep learning about Kohli! 📚";
    return "Better luck next time! Study more about King Kohli! 💪";
  };

  if (showResult) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 relative">
        <Link
          href="/"
          className="absolute top-6 left-8 z-30 bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg border-2 border-red-900 transition-colors"
        >
          &larr; Back
        </Link>
        <div className="bg-gray-900 rounded-lg p-8 max-w-md w-full text-center relative">
          <h1 className="text-3xl font-bold mb-6 text-red-600">Quiz Complete!</h1>
          <div className="mb-6">
            <div className="text-6xl font-bold text-red-500 mb-2">{score}/{quizQuestions.length}</div>
            <div className="text-xl text-gray-300">
              {Math.round((score / quizQuestions.length) * 100)}%
            </div>
          </div>
          <div className="mb-6">
            <p className="text-lg">{getScoreMessage(score, quizQuestions.length)}</p>
          </div>
          <div className="space-y-2 mb-6">
            <div className="flex justify-between">
              <span>Easy Questions:</span>
              <span className="text-green-400">
                {correctByDifficulty.easy}/{quizQuestions.filter(q => q.difficulty === 'easy').length}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Medium Questions:</span>
              <span className="text-yellow-400">
                {correctByDifficulty.medium}/{quizQuestions.filter(q => q.difficulty === 'medium').length}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Hard Questions:</span>
              <span className="text-red-400">
                {correctByDifficulty.hard}/{quizQuestions.filter(q => q.difficulty === 'hard').length}
              </span>
            </div>
          </div>
          <button
            onClick={resetQuiz}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 relative">
      <Link
        href="/"
        className="absolute top-6 left-8 z-30 bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-semibold shadow-lg border-2 border-red-900 transition-colors"
      >
        &larr; Back
      </Link>
      <div className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-red-600 mb-2">Kohli Quiz</h1>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </span>
            <span className={`font-semibold ${getDifficultyColor(question.difficulty)}`}>
              {question.difficulty.toUpperCase()}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'border-red-500 bg-red-900/20'
                    : 'border-gray-600 hover:border-gray-500 hover:bg-gray-800'
                }`}
              >
                <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-gray-400">
            Score: {score}
          </div>
          <button
            onClick={currentQuestion === quizQuestions.length - 1 ? handleSubmit : handleNext}
            disabled={selectedAnswer === null}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              selectedAnswer === null
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700 text-white'
            }`}
          >
            {currentQuestion === quizQuestions.length - 1 ? 'Submit Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
}