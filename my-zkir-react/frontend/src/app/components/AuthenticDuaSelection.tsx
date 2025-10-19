'use client';

import React, { useState } from 'react';

interface AuthenticDuaSelectionProps {
  onBack?: () => void;
}

const AuthenticDuaSelection: React.FC<AuthenticDuaSelectionProps> = ({
  onBack
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const duaCategories = [
    'Anxiety',
    'Sadness',
    'To protect kids',
    'When entering home',
    'For forgiveness',
    'For guidance',
    'When entering Toilet',
    'Morning and evening duas',
    'For sickness',
    'When waking up at night',
    'Another one'
  ];

  // Dua content data for each category
  const duaContent: { [key: string]: {
    arabic: string;
    transliteration: string;
    translation: string;
    source: string;
  }} = {
    'To protect kids': {
      arabic: 'أُعِيذُكُمَا بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ',
      transliteration: 'U\'īdhukumā bi-kalimāti l-lāhi t-tāmmati min kulli shayṭānin wa hāmmatin, wa min kulli ʿaynin lāmmatin.',
      translation: 'I seek protection for you from the perfect words of Allah against every devil, from every harmful animal (or thing) and from every evil eye.',
      source: '[1] al-Bukhari N°6312, voir Fath al-Bari 11/113, et Muslim (N°2711, 4/2083).'
    },
    'Anxiety': {
      arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ',
      transliteration: 'Allaahumma innee a\'oodhu bika minal-hammi wal-hazan',
      translation: 'O Allah, I seek refuge in You from anxiety and grief.',
      source: '[1] al-Bukhari N°6369, Muslim N°2706.'
    },
    'Sadness': {
      arabic: 'اللَّهُمَّ إِنِّي عَبْدُكَ ابْنُ عَبْدِكَ ابْنُ أَمَتِكَ نَاصِيَتِي بِيَدِكَ مَاضٍ فِيَّ حُكْمُكَ عَدْلٌ فِيَّ قَضَاؤُكَ',
      transliteration: 'Allāhumma innī \'abduka bnu \'abdika bnu amatika nāṣiyatī biyadika māḍin fiyya ḥukmuka \'adlun fiyya qaḍā\'uka',
      translation: 'O Allah, I am Your servant, son of Your servant, son of Your maidservant. My forelock is in Your hand, Your command over me is forever executed and Your decree over me is just.',
      source: 'Musnad Ahmad 3712'
    },
    'When entering home': {
      arabic: 'بِسْمِ اللَّهِ وَلَجْنَا وَبِسْمِ اللَّهِ خَرَجْنَا وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
      transliteration: 'Bismi llāhi walajna wa bismi llāhi kharajna wa \'alā llāhi rabbinā tawakkalnā',
      translation: 'In the name of Allah we enter and in the name of Allah we leave, and upon Allah, our Lord, we place our trust.',
      source: 'Abu Dawud 5096'
    },
    'For forgiveness': {
      arabic: 'رَبِّ اغْفِرْ لِي ذَنْبِي وَخَطَئِي وَجَهْلِي',
      transliteration: 'Rabbi ghfir lee dhanbee wa khata\'ee wa jahlee',
      translation: 'My Lord, forgive my sins, my mistakes, and my ignorance.',
      source: '[1] al-Bukhari N°6398, Muslim N°2719.'
    },
    'For guidance': {
      arabic: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ',
      transliteration: 'Allāhumma hdinī fīman hadayta wa \'āfinī fīman \'āfayta wa tawallanī fīman tawallayta',
      translation: 'O Allah, guide me among those You have guided, grant me security among those You have granted security and take me into Your care among those You have taken into Your care.',
      source: 'Abu Dawud 1425'
    },
    'When entering Toilet': {
      arabic: 'بِسْمِ اللَّهِ اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ',
      transliteration: 'Bismi llāhi allāhumma innī a\'ūdhu bika mina l-khubthi wa l-khabā\'ith',
      translation: 'In the name of Allah. O Allah, I seek refuge in You from the male and female devils.',
      source: 'Sahih al-Bukhari 142, Sahih Muslim 375'
    },
    'Morning and evening duas': {
      arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ',
      transliteration: 'Aṣbaḥnā wa aṣbaḥa l-mulku lillāhi wa l-ḥamdu lillāhi',
      translation: 'We have reached the morning and at this very time unto Allah belongs all sovereignty, and all praise is for Allah.',
      source: 'Sahih Muslim 2723'
    },
    'For sickness': {
      arabic: 'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَاسَ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا',
      transliteration: 'Allāhumma rabba n-nās adhhabi l-ba\'s ishfi anta sh-shāfi lā shifā\'a illā shifā\'uka shifā\'an lā yughādiru saqaman',
      translation: 'O Allah, Lord of mankind, remove the harm and heal, for You are the Healer. There is no healing except Your healing, a healing that leaves no illness behind.',
      source: 'Sahih al-Bukhari 5742, Sahih Muslim 2191'
    },
    'When waking up at night': {
      arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      transliteration: 'Lā ilāha illā llāhu waḥdahu lā sharīka lahu lahu l-mulku wa lahu l-ḥamdu wa huwa \'alā kulli shay\'in qadīr',
      translation: 'There is no deity but Allah alone, with no partner. To Him belongs all sovereignty and praise, and He is over all things omnipotent.',
      source: 'Sahih al-Bukhari 6325'
    },
    'Another one': {
      arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ',
      transliteration: 'Subḥāna llāhi wa bi-ḥamdihi',
      translation: 'Glory be to Allah and praise be to Him.',
      source: 'Sahih al-Bukhari 6405'
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleDuaAction = (action: string) => {
    console.log('Dua action:', action, 'for category:', selectedCategory);
    if (action === 'Another one') {
      setSelectedCategory('');
    } else if (action === 'Main menu') {
      setSelectedCategory('');
    }
    // Handle other actions like save, share, etc.
  };

  return (
    <div className="h-screen bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-center p-6 flex-shrink-0 relative">
        {/* Back Arrow */}
        <button
          onClick={onBack}
          className="absolute left-6 text-white text-2xl hover:text-green-400 transition-colors z-10"
        >
          ←
        </button>

        {/* Centered Button */}
        <div className="flex justify-center">
          <div className="bg-[#18392B] hover:bg-[#1F4A36] rounded-full px-6 py-3 transition-colors shadow-lg flex items-center space-x-3">
            <img src="/tout.png" alt="Icon" className="w-8 h-8 object-contain" />
            <h1 className="text-white text-lg font-medium">Authentic dua</h1>
          </div>
        </div>
      </div>

      {/* Main Content - Scrollable */}
      <div className="flex-1 px-6 overflow-y-auto">
        {/* Chat Bubble */}
        <div className="mb-8">
          <div className="bg-emerald-800/80 rounded-2xl rounded-tl-sm p-6 max-w-md mx-auto">
            <p className="text-white text-base leading-relaxed">
              That's great! I can help you with duas from Hisnul Muslim and from the Holy Qur'an. Please choose below with dua you would like to read.
            </p>
          </div>
        </div>

        {/* Dua Categories Grid */}
        <div className="space-y-3">
          {/* First Row - 3 buttons */}
          <div className="grid grid-cols-3 gap-3">
            {duaCategories.slice(0, 3).map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-2 px-3 rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Second Row - 2 buttons */}
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {duaCategories.slice(3, 5).map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-2 px-3 rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Third Row - 2 buttons */}
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {duaCategories.slice(5, 7).map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-2 px-3 rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Fourth Row - 2 buttons */}
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {duaCategories.slice(7, 9).map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-2 px-3 rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Fifth Row - 2 buttons */}
          <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
            {duaCategories.slice(9, 11).map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-2 px-3 rounded-full text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dua Content Display - Shows when category is selected */}
        {selectedCategory && duaContent[selectedCategory] && (
          <div className="mt-8">
            {/* Category Title */}
            <div className="mb-6 text-center">
              <h2 className="text-white text-lg font-medium mb-1">
                {selectedCategory}
              </h2>
              <p className="text-blue-300 text-sm">Dua for {selectedCategory.toLowerCase()}</p>
            </div>

            {/* Dua Text Display - Matching screenshot layout */}
            <div className="bg-slate-900/50 rounded-2xl p-6 mb-6 mx-4">
              {/* Arabic Text - Large and right-aligned */}
              <div className="text-right mb-6">
                <p className="text-white text-xl leading-relaxed font-arabic">
                  {duaContent[selectedCategory].arabic}
                </p>
              </div>

              {/* Transliteration - Blue italic */}
              <div className="mb-4">
                <p className="text-blue-300 text-base italic leading-relaxed font-medium">
                  {duaContent[selectedCategory].transliteration}
                </p>
              </div>

              {/* English Translation */}
              <div className="mb-6">
                <p className="text-white text-base leading-relaxed">
                  {duaContent[selectedCategory].translation}
                </p>
              </div>

              {/* Reference */}
              <div className="text-right">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {duaContent[selectedCategory].source}
                </p>
              </div>
            </div>

            {/* Audio Controls - Centered and properly sized */}
            <div className="flex justify-center items-center space-x-6 mb-6">
              {/* Previous button */}
              <button className="text-white hover:text-green-400 transition-colors p-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>

              {/* Play/Pause button - Large and prominent */}
              <button className="bg-green-800 hover:bg-green-900 text-white rounded-full p-3 transition-colors mx-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
                </svg>
              </button>

              {/* Next button */}
              <button className="text-white hover:text-green-400 transition-colors p-2">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation - Now scrollable with content */}
      <div className="pb-6 pt-4">
        <div className="flex items-center justify-center space-x-4">
          {/* Compass Element */}
          <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-white/20">
            <span className="text-white text-lg">🧭</span>
          </div>

          {/* Back to Home */}
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors"
          >
            <span>←</span>
            <span className="text-sm">Back to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthenticDuaSelection;
