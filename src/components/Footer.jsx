import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-400 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
       
        <div>
          <h3 className="text-white font-semibold mb-4 text-lg">
            About Disney+
          </h3>
          <p className="max-w-xs text-sm leading-relaxed">
            Disney+ is your ultimate streaming destination for movies, series,
            and exclusive originals from Disney, Pixar, Marvel, Star Wars,
            National Geographic, and more.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Series
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Originals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Subscription
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

      
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-5 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Disney+. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
