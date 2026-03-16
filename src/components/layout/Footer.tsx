import React from "react";
import { SOCIAL_LINKS } from "./Footer/constants";
import type { SocialLink } from "./Footer/constants";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="relative mt-24 border-t border-slate-800/60 bg-slate-950/90 backdrop-blur-2xl"
    >
      {/* 1. Premium Divider Line */}
      <div 
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent animate-pulse" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 2. Main Grid with adjusted alignment */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start">

          {/* Column 1: Brand (The Anchor Point) */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              aria-label="Ir al inicio de SG SynerGy"
              className="inline-block text-3xl font-black tracking-tighter text-white transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
            >
              SG{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                SynerGy
              </span>
            </a>
            <p className="mt-6 max-w-sm text-sm text-slate-400 leading-relaxed font-medium">
              Revolucionando tu relación con el dinero con tecnología
              financiera moderna y experiencias digitales centradas en el usuario.
            </p>
          </div>

          {/* Column 2: Contact (Aligned with md:pt-2) */}
          <div className="md:col-span-4 md:pt-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Contacto
            </h4>
            <address className="not-italic">
              <ul className="space-y-5 text-sm text-slate-400">
                <li>
                  <a
                    href="mailto:hola@sgsynergy.com"
                    aria-label="Enviar correo a hola@sgsynergy.com"
                    className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-slate-800/40 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                      <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    hola@sgsynergy.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+593999999999"
                    aria-label="Llamar al +593 99 999 9999"
                    className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition-all group"
                  >
                    <div className="p-2 rounded-lg bg-slate-800/40 border border-white/5 group-hover:border-blue-500/30 transition-colors">
                      <svg className="w-4 h-4 text-slate-500 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    +593 99 999 9999
                  </a>
                </li>
              </ul>
            </address>
          </div>

          {/* Column 3: Social (Aligned with md:pt-2) */}
          <div className="md:col-span-3 md:pt-2 flex flex-col items-center md:items-end text-center md:text-right">
            <h4 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-white/90">
              Redes sociales
            </h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link: SocialLink) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar nuestro perfil de ${link.name}`}
                  className={`p-2.5 rounded-xl bg-slate-800/40 border border-white/5 text-slate-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:border-blue-500/30 ${link.hoverColor} focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={link.iconPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Bottom Credits */}
        <div className="mt-16 pt-8 border-t border-slate-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            © {currentYear} SG SYNERGY. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;