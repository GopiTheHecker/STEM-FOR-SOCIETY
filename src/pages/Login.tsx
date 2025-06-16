import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  return <div className="min-h-screen flex">
      {/* Left side - Sky background with DNA logo and people */}
      <div className="flex-1 relative overflow-hidden">
        {/* Sky Background */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url('/lovable-uploads/0107c03e-de5d-4312-a1ec-89a132b9e0aa.png')`
      }}>
          {/* Light overlay for better contrast */}
          <div className="absolute inset-0 bg-blue-200/20"></div>
        </div>

        {/* DNA Helix Logo in center-left */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          
        </div>
      </div>

      {/* Right side - Login Form with glass effect */}
      <div className="w-full max-w-md bg-white/90 backdrop-blur-sm flex flex-col justify-center px-8 py-12 relative">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Login as Student
            </h2>
            <p className="text-gray-600 text-sm">
              Enter your credentials to proceed further
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-4 bg-gray-50 border-0 rounded-lg placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base" />
            </div>

            <div>
              <Input type="password" placeholder="Confirm Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-4 bg-gray-50 border-0 rounded-lg placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" checked={rememberPassword} onCheckedChange={checked => setRememberPassword(checked as boolean)} className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500" />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Remember Password
                </label>
              </div>
              <button type="button" className="text-sm text-gray-500 hover:text-gray-700">
                Forget Password?
              </button>
            </div>

            <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-lg font-semibold text-base tracking-wide transition-colors">
              LOGIN
            </Button>
          </form>

          {/* Social Login */}
          <div className="text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white/90 text-gray-500">or sign in with</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="#1DA1F2" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
                <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center">
            <span className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <button className="text-blue-500 hover:text-blue-600 font-medium">
                Create Account
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>;
};
export default Login;