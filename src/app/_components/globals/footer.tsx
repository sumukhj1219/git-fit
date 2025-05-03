import React from "react";
import { GithubIcon, MailIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-800 bg-neutral-950/5 text-neutral-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div className="flex flex-col space-y-2">
          <span className="text-white font-semibold text-lg">Git Fit</span>
          <p className="text-neutral-500">AI-powered commit message generator for modern teams.</p>
        </div>

        <div className="flex flex-col space-y-2 md:items-center">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="https://github.com/sumukhj1219" target="_blank" className="hover:text-white transition">GitHub</a>
        </div>

        <div className="flex flex-col space-y-2 md:items-end">
          <a href="mailto:sumukhjoshi75@gmail.com" className="flex items-center gap-2 hover:text-white transition">
            <MailIcon className="w-4 h-4" /> support@gitfit.dev
          </a>
          <a href="https://github.com/sumukhj1219" className="flex items-center gap-2 hover:text-white transition">
            <GithubIcon className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Git Fit. Built with ❤️ by you.
      </div>
    </footer>
  );
};

export default Footer;
