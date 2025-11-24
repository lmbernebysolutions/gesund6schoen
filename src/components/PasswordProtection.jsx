import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

const PasswordProtection = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem('site_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded password for preview protection
    // You can change 'berneby' to any password you prefer
    if (password === 'berneby') {
      sessionStorage.setItem('site_auth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Falsches Passwort');
    }
  };

  // If authenticated, render the actual website
  if (isAuthenticated) {
    return children;
  }

  // Otherwise, render the lock screen
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center px-4 font-sans">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl w-full max-w-md text-center border border-gray-100">
        <div className="w-20 h-20 bg-[#D4AF37]/10 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock size={40} />
        </div>
        <h2 className="text-3xl font-bold mb-3 text-[#1A1A1A]">Vorschau geschützt</h2>
        <p className="text-gray-500 mb-8">
          Diese Website befindet sich im Testmodus. <br/>
          Bitte geben Sie das Passwort ein.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              className={`
                w-full px-6 py-4 rounded-xl border bg-gray-50 text-lg
                focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10 outline-none transition-all
                ${error ? 'border-red-500 bg-red-50' : 'border-gray-200'}
              `}
              placeholder="Passwort eingeben"
              autoFocus
            />
          </div>
            {error && (
              <div className="text-red-500 text-sm font-medium animate-shake">
                {error}
              </div>
            )}
          <button
            type="submit"
            className="w-full py-4 bg-[#1A1A1A] text-white rounded-xl font-bold text-lg hover:bg-black transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            Anmelden
          </button>
        </form>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Berneby Solutions
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;

