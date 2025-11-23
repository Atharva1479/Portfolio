import React from 'react';
import { SOCIALS, PERSONAL_INFO } from '../lib/constants';
import { Mail, Globe } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
const SocialData: Record<string, { icon: React.FC<any>; colorClass: string }> = {
  GitHub: {
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    colorClass: "group-hover:text-white group-hover:bg-[#00000018] group-hover:border-white/40"
  },

  LinkedIn: {
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
        className={`${props.className} transition-all duration-300 group-hover:fill-current group-hover:stroke-none`}
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    colorClass: "group-hover:text-[#0a66c2] group-hover:border-[#0a66c2]/50 group-hover:bg-[#0a66c2]/10"
  },

  Twitter: {
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
    ),
    colorClass: "group-hover:text-[#1DA1F2] group-hover:border-[#1DA1F2]/50 group-hover:bg-[#1DA1F2]/10"
  },

  Discord: {
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.48 13.48 0 0 0-.59 1.227 18.355 18.355 0 0 0-4.733 0 13.46 13.46 0 0 0-.59-1.227.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.176 2.419 0 1.334-.966 2.419-2.176 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.176 2.419 0 1.334-.966 2.419-2.176 2.419z" />
      </svg>
    ),
    colorClass: "group-hover:text-[#5865F2] group-hover:border-[#5865F2]/50 group-hover:bg-[#5865F2]/10"
  },

  "Dev.to": {
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.74-.17h-2.17v-3.24c0-2.74.02-3.26.15-3.3.2-.06 1.28-.06 1.47 0 .1.04.15.56.15 3.18v3.11h.4c.22 0 .4-.02.4-.05 0-.02.26-1.62.58-3.55.32-1.93.6-3.53.61-3.55.02-.03.43.02.92.11.88.16.9.17.97.55.06.33-.36 3.02-.94 6.06-.47 2.51-.53 2.71-.81 2.71-.21 0-.42-.13-.47-.3-.05-.15-.3-1.39-.56-2.76zm5.99.13c-.38.16-.81.22-1.27.16-.68-.1-1.28-.55-1.52-1.13-.11-.27-.12-.39-.12-2.35 0-2.1.01-2.1.2-2.45.33-.61 1.05-.92 1.86-.8 1.03.15 1.63.86 1.63 1.94 0 .25-.04.45-.08.45-.05 0-.08-.32-.08-.71 0-1.14-.36-1.63-1.06-1.44-.41.11-.62.48-.62 1.08 0 .32.05.45.2.52.28.13 1.15.32 1.48.32.74 0 1.23.29 1.48.89.17.42.17 1.85 0 2.27-.15.37-.47.78-.81 1.03-.24.18-.88.28-1.29.22z" />
      </svg>
    ),
    colorClass: "group-hover:text-white group-hover:border-white/50 group-hover:bg-white/10"
  },

  Hashnode: {
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" />
      </svg>
    ),
    colorClass: "group-hover:text-[#2962FF] group-hover:border-[#2962FF]/50 group-hover:bg-[#2962FF]/10"
  },

  Peerlist: {
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M12 0C2.667 0 0 2.667 0 12s2.673 12 12 12 12 -2.667 12 -12S21.327 0 12 0zm8.892 20.894c-1.57 1.569 -4.247 2.249 -8.892 2.249s-7.322 -0.68 -8.892 -2.25C1.735 19.522 1.041 17.3 0.89 13.654A39.74 39.74 0 0 1 0.857 12c0 -1.162 0.043 -2.201 0.13 -3.13 0.177 -1.859 0.537 -3.278 1.106 -4.366 0.284 -0.544 0.62 -1.006 1.013 -1.398s0.854 -0.729 1.398 -1.013C5.592 1.524 7.01 1.164 8.87 0.988 9.799 0.9 10.838 0.858 12 0.858c4.645 0 7.322 0.68 8.892 2.248 1.569 1.569 2.25 4.246 2.25 8.894s-0.681 7.325 -2.25 8.894zM20.538 3.46C19.064 1.986 16.51 1.357 12 1.357c-4.513 0 -7.067 0.629 -8.54 2.103C1.986 4.933 1.357 7.487 1.357 12c0 4.511 0.63 7.065 2.105 8.54C4.936 22.014 7.49 22.643 12 22.643s7.064 -0.629 8.538 -2.103c1.475 -1.475 2.105 -4.029 2.105 -8.54s-0.63 -7.065 -2.105 -8.54zM14.25 16.49a6.097 6.097 0 0 1 -2.442 0.59v2.706H10.45v0.357H6.429V5.57h0.357V4.214h5.676c3.565 0 6.467 2.81 6.467 6.262 0 2.852 -1.981 5.26 -4.68 6.013zm-1.788 -8.728H10.45v5.428h2.011c1.532 0 2.802 -1.2 2.802 -2.714s-1.27 -2.714 -2.802 -2.714zm0.901 4.351c0.117 -0.239 0.186 -0.502 0.186 -0.78 0 -1.01 -0.855 -1.857 -1.945 -1.857h-0.296V8.62h1.154c1.09 0 1.945 0.847 1.945 1.857 0 0.705 -0.422 1.323 -1.044 1.637zm4.104 1.493c0.043 -0.063 0.083 -0.129 0.123 -0.194a5.653 5.653 0 0 0 0.526 -1.103 5.56 5.56 0 0 0 0.11 -0.362c0.02 -0.076 0.042 -0.15 0.06 -0.227a5.58 5.58 0 0 0 0.073 -0.41c0.01 -0.068 0.025 -0.134 0.032 -0.203 0.024 -0.207 0.038 -0.417 0.038 -0.63 0 -3.198 -2.687 -5.763 -5.967 -5.763H7.286v14.572h4.022v-3.048h1.154c1.43 0 2.747 -0.488 3.778 -1.303a5.92 5.92 0 0 0 0.46 -0.406c0.035 -0.034 0.066 -0.07 0.1 -0.105 0.107 -0.11 0.21 -0.22 0.308 -0.337 0.044 -0.053 0.084 -0.108 0.126 -0.162 0.081 -0.104 0.16 -0.21 0.233 -0.319zm-5.005 1.775H10.45v3.048H8.143V5.57h4.319c2.837 0 5.11 2.211 5.11 4.905s-2.273 4.905 -5.11 4.905z" fill="#ffffff" strokeWidth="1"></path>
      </svg>
    ),
    colorClass: "group-hover:text-[#00AA45] group-hover:border-[#00AA45]/50 group-hover:bg-[#00AA45]/10"
  },
};

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="relative bg-zinc-950 pt-16 pb-8 md:pt-20 md:pb-12 overflow-hidden z-10">

      {/* Decorative Separator - Glowing Horizon Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-zinc-800/50"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent shadow-[0_0_20px_2px_rgba(16,185,129,0.3)]"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-20">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Let's Build Together
            </h2>
            <p className="text-zinc-400 text-lg max-w-lg leading-relaxed">
              Ready to architect production-grade AI Agents and scalable Full-Stack Web Applications.
            </p>
          </div>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group flex items-center gap-3 px-8 py-4 bg-zinc-100 text-zinc-950 rounded-full font-medium transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)] hover:-translate-y-1 border border-transparent hover:border-zinc-200 shrink-0"
          >
            <Mail className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
            <span>Send Email</span>
          </a>
        </div>

        {/* Dedicated Social Links Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-grow bg-zinc-800"></div>
            <span className="text-zinc-500 font-mono text-sm uppercase tracking-wider">Connect & Follow</span>
            <div className="h-px flex-grow bg-zinc-800"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {SOCIALS.filter(s => s.name !== 'Email').map((social, index) => {
              const data = SocialData[social.name] || { icon: Globe, colorClass: "group-hover:text-white" };
              const Icon = data.icon;

              return (
                <RevealOnScroll key={social.name} delay={index * 50} variant="scale-up">
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col items-center justify-center gap-3 p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900 hover:border-zinc-600 transition-all duration-300"
                  >
                    <div className={`p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 ${data.colorClass} group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-zinc-500 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </a>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-zinc-900/50">
          <div className="flex items-center gap-2 text-emerald-500 bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="font-mono text-[10px] font-semibold tracking-wide uppercase">Open to Work</span>
          </div>
          <p className="font-mono text-xs text-zinc-600">
            © 2025 Yash Pandav. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};