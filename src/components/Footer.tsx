import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12 mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Crop & Weed Detection AI</h3>
            <p className="text-sm text-green-200">Empowering farmers with AI-driven agricultural solutions</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-green-300">About Us</a></li>
              <li><a href="/how-it-works" className="hover:text-green-300">How It Works</a></li>
              <li><a href="/try-it" className="hover:text-green-300">Try Now</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:text-green-300">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-green-300">FAQ</a></li>
              <li><a href="/privacy" className="hover:text-green-300">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300">Twitter</a>
              <a href="#" className="hover:text-green-300">Facebook</a>
              <a href="#" className="hover:text-green-300">Instagram</a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm">
          <p>© 2025 Pest & Weed Detection AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
