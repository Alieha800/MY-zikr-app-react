'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);

  const handleEmailAuth = () => {
    // TODO: Implement email authentication
    console.log('Email authentication');
  };

  const handleGoogleAuth = () => {
    // TODO: Implement Google authentication
    console.log('Google authentication');
  };

  const handleAppleAuth = () => {
    // TODO: Implement Apple authentication
    console.log('Apple authentication');
  };

  return (
    <div className="h-screen bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 flex flex-col items-center justify-center px-6 py-8 overflow-hidden">
      {/* Logo and Header Section */}
      <div className="text-center mb-12 w-full">
        {/* Logo Image */}
        <div className="mb-4 flex justify-center">
          <img src="/my-zikr-logo.png" alt="My.Zikr Logo" className="w-40 md:w-48 h-40 md:h-48 object-contain" style={{ filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))' }} />
        </div>

        {/* Greeting */}
        <p className="text-white text-lg md:text-xl mb-8 font-light text-center">
          Salam Alaykoum and welcome!
        </p>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl text-white font-bold mb-4 text-center">
          {isLogin ? 'Log In' : 'Register'}
        </h2>

        {/* Subtitle/Toggle Link */}
        <p className="text-white text-base md:text-lg text-center">
          {isLogin ? "Don't have an account? " : "Already Registered? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="underline hover:text-gray-300 transition-colors font-medium"
          >
            {isLogin ? 'Register here' : 'Log in here'}
          </button>
        </p>
      </div>

      {/* Authentication Buttons */}
      <div className="w-full max-w-sm space-y-4">
        {/* Email Authentication Button */}
        <button
          onClick={handleEmailAuth}
          className="w-full py-4 px-6 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:!text-gray-900 hover:!font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg group"
        >
          <svg className="w-5 h-5 fill-white group-hover:!fill-gray-900 transition-colors duration-300" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span className="group-hover:!text-gray-900 group-hover:!font-bold transition-all duration-300 text-center">{isLogin ? 'Sign in with an e-mail' : 'Sign up with an e-mail'}</span>
        </button>

        {/* Google Authentication Button */}
        <button
          onClick={handleGoogleAuth}
          className="w-full py-4 px-6 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:!text-gray-900 hover:!font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg group"
        >
          <img src="/google icon.png" alt="Google" className="w-5 h-5 object-contain" />
          <span className="group-hover:!text-gray-900 group-hover:!font-bold transition-all duration-300 text-center">{isLogin ? 'Sign in with Google' : 'Sign up with Google'}</span>
        </button>

        {/* Apple Authentication Button */}
        <button
          onClick={handleAppleAuth}
          className="w-full py-4 px-6 bg-transparent border border-white text-white rounded-lg hover:bg-white hover:!text-gray-900 hover:!font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-base md:text-lg group"
        >
          <svg className="w-5 h-5 fill-white group-hover:!fill-gray-900 transition-colors duration-300" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          <span className="group-hover:!text-gray-900 group-hover:!font-bold transition-all duration-300 text-center">{isLogin ? 'Sign in with Apple' : 'Sign up with Apple'}</span>
        </button>
      </div>

      {/* Back to Home Link */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="text-white hover:text-gray-300 transition-colors underline text-sm"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
