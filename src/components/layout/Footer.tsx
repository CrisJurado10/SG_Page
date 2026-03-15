import React from "react";

// DRY approach: Extracted repeated SVG link paths to a static constant map
const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com',
    iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    hoverColor: 'hover:text-blue-500',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    iconPath: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z',
    hoverColor: 'hover:text-blue-400',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    iconPath: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
    hoverColor: 'hover:text-white',
  }
];

export const Footer: React.FC = () => {
  return (
    <footer
      id="contacto"
      className="relative mt-12 border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-2xl"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start content-start">
          
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#"
              className="text-3xl font-black tracking-tighter text-white leading-none transition-transform hover:scale-105 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              SG{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                SynerGy
              </span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Revolucionando tu relación con el dinero a través de tecnología
              financiera de vanguardia y diseño centrado en el usuario.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left pt-[2px]">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white leading-none">
              Información de contacto
            </h4>

            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href="mailto:hola@sgsynergy.com"
                  className="flex items-center gap-3 justify-center md:justify-start transition-colors hover:text-blue-400 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  hola@sgsynergy.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+593999999999"
                  className="flex items-center gap-3 justify-center md:justify-start transition-colors hover:text-blue-400 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <svg
                    className="w-5 h-5 text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +593 99 999 9999
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col items-center md:items-end text-center md:text-right pt-[2px]">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-white leading-none">
              Redes sociales
            </h4>

            <div className="flex gap-5">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`text-slate-500 transition-transform duration-200 hover:scale-110 ${link.hoverColor} rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d={link.iconPath} clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} SG SynerGy. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            {['Términos de servicio', 'Política de privacidad'].map((text) => (
              <a
                key={text}
                href="#"
                className="transition-colors hover:text-blue-400 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;