'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Wudu steps');

  const categories = [
    'Wudu steps',
    'Ghusl steps',
    'Prayer steps',
    '99 names of Allah',
    'Istikhara steps',
    'Taahhoud',
    'Dhikr & Tasbih',
    'Another one',
    '40 Rabbana',
    'Something else'
  ];

  // Step-by-step content for each category
  const stepContent: { [key: string]: {
    title: string;
    description: string;
    steps?: string[];
    downloadUrl?: string;
  }} = {
    'Wudu steps': {
      title: 'Wudu steps',
      description: 'Purity is the gateway to prayer. Here\'s a simple guide to help you perform Wudu step-by-step with presence and mindfulness. May Allah accept your prayer. Prophet Muhammad ﷺ said: "Purity is half of faith." (Sahih Muslim 223)',
      downloadUrl: 'Download wudu step pdf'
    },
    'Ghusl steps': {
      title: 'Ghusl steps',
      description: 'Ghusl is the major ablution in Islam. Here\'s a complete guide to help you perform Ghusl properly with presence and mindfulness.',
      downloadUrl: 'Download ghusl step pdf'
    },
    'Prayer steps': {
      title: 'Prayer steps',
      description: 'Prayer is the pillar of religion. Here\'s a comprehensive guide to help you perform Salah with focus and devotion.',
      downloadUrl: 'Download prayer step pdf'
    },
    '99 names of Allah': {
      title: '99 names of Allah',
      description: 'Learning the 99 names of Allah is a beautiful way to draw closer to Him. Here\'s a guide to help you memorize and understand them.',
      downloadUrl: 'Download 99 names pdf'
    },
    'Istikhara steps': {
      title: 'Istikhara steps',
      description: 'Istikhara is the prayer of seeking guidance from Allah. Here\'s how to perform it when facing important decisions.',
      downloadUrl: 'Download istikhara pdf'
    },
    'Taahhoud': {
      title: 'Taahhoud',
      description: 'Taahhoud refers to the testimony of faith. Here\'s a guide to understanding and reciting the Shahada properly.',
      downloadUrl: 'Download taahhoud pdf'
    },
    'Dhikr & Tasbih': {
      title: 'Dhikr & Tasbih',
      description: 'Dhikr and Tasbih are beautiful forms of remembrance. Here\'s a collection of daily remembrances and glorifications.',
      downloadUrl: 'Download dhikr pdf'
    },
    'Another one': {
      title: 'Another reminder',
      description: 'Here\'s another beautiful reminder to help you in your spiritual journey. May Allah make it beneficial for you.',
      downloadUrl: 'Download reminder pdf'
    },
    '40 Rabbana': {
      title: '40 Rabbana',
      description: 'The 40 Rabbana are supplications from the Quran. Here\'s a collection to help you memorize and understand them.',
      downloadUrl: 'Download 40 rabbana pdf'
    },
    'Something else': {
      title: 'Something else',
      description: 'Here\'s another helpful reminder for your spiritual growth. May Allah make it easy for you to practice.',
      downloadUrl: 'Download reminder pdf'
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory('');
  };

  const handleDownload = (category: string) => {
    console.log('Downloading PDF for:', category);
    // TODO: Implement PDF download functionality
  };

  return (
    <div className="h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-center p-6 flex-shrink-0 relative">
        {/* Back Arrow */}
        <button
          onClick={() => window.history.back()}
          className="absolute left-6 text-white text-2xl hover:text-green-400 transition-colors z-10"
        >
          ←
        </button>

        {/* Centered Button */}
        <div className="flex justify-center">
          <div className="bg-[#18392B] hover:bg-[#1F4A36] rounded-full px-6 py-3 transition-colors shadow-lg flex items-center space-x-3">
            <img src="/reminder.png" alt="Icon" className="w-6 h-6 object-contain" />
            <h1 className="text-white text-lg font-medium">Spiritual reminder</h1>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 px-6 overflow-y-auto">
        {/* Chat Bubble */}
        <div className="mb-8">
          <div className="bg-emerald-800/80 rounded-2xl rounded-tl-sm p-6 max-w-md mx-auto">
            <p className="text-white text-base leading-relaxed">
              That's great! Please find below the Reminders I can help you with. May Allah ease your journey and help you memorise them. Ameen
            </p>
          </div>
        </div>

        {/* Categories Grid - Show when "Another one" is selected for back to categories */}
        {selectedCategory === 'Another one' && (
          <div className="mb-8">
            {/* Horizontal layout - all buttons in flex wrap */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-2 px-4 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content Display - Shows when category is selected */}
        {selectedCategory && stepContent[selectedCategory] && (
          <div className="mt-8">
            {/* Category Title */}
            <div className="mb-6 text-center">
              <h2 className="text-white text-xl font-medium mb-2">
                {stepContent[selectedCategory].title}
              </h2>
            </div>

            {/* Description */}
            <div className="bg-slate-900/50 rounded-2xl p-6 mb-6 mx-4">
              <p className="text-white text-base leading-relaxed mb-4">
                {stepContent[selectedCategory].description}
              </p>

              {/* Download Link */}
              {stepContent[selectedCategory].downloadUrl && (
                <div className="mb-4">
                  <button
                    onClick={() => handleDownload(selectedCategory)}
                    className="text-blue-300 hover:text-blue-400 underline text-sm"
                  >
                    {stepContent[selectedCategory].downloadUrl}
                  </button>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mb-6">
              <button
                onClick={handleBackToCategories}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
              >
                Another reminder
              </button>
              <button className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center space-x-2">
                <span>💬</span>
                <span>Discuss</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="pb-6 pt-4">
        <div className="flex items-center justify-center space-x-4">
          {/* Compass Element */}
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-white/20">
            <span className="text-white text-lg">🧭</span>
          </div>

          {/* Back to Home */}
          <Link
            href="/"
            className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors"
          >
            <span>←</span>
            <span className="text-sm">Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
