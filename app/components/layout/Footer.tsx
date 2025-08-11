export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      name: 'Twitter', 
      handle: '@johnsmith', 
      url: 'https://x.com/johnsmith',
      ariaLabel: 'Suivez-moi sur Twitter'
    },
    { 
      name: 'YouTube', 
      handle: 'youtube', 
      url: 'https://www.youtube.com/@johnsmith',
      ariaLabel: 'Visitez ma chaîne YouTube'
    },
    { 
      name: 'LinkedIn', 
      handle: 'linkedin', 
      url: 'https://www.linkedin.com/in/johnsmith',
      ariaLabel: 'Connectons-nous sur LinkedIn'
    },
    { 
      name: 'GitHub', 
      handle: 'github', 
      url: 'https://github.com/johnsmith',
      ariaLabel: 'Voir mes projets sur GitHub'
    }
  ];

  return (
    <footer className="mt-12 text-center border-t border-gray-200 dark:border-zinc-800 pt-8" role="contentinfo">
      {/* Liens sociaux */}
      <nav aria-label="Liens vers les réseaux sociaux">
        <div className="flex justify-center space-x-6 tracking-tight mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200 hover:scale-105"
              aria-label={link.ariaLabel}
            >
              <span className="sr-only">{link.name}</span>
              {link.handle}
              <span className="group-hover:opacity-100 opacity-0 transition-opacity duration-200 ml-1">↗</span>
            </a>
          ))}
        </div>
      </nav>
      
      {/* Copyright et mentions légales */}
      <div className="text-sm text-gray-500 dark:text-gray-600 space-y-2">
        <p>© {currentYear} John Smith. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 text-xs">
          <a 
            href="/privacy" 
            className="hover:text-gray-700 dark:hover:text-gray-400 transition-colors"
          >
            Confidentialité
          </a>
          <a 
            href="/legal" 
            className="hover:text-gray-700 dark:hover:text-gray-400 transition-colors"
          >
            Mentions légales
          </a>
          <a 
            href="/sitemap.xml" 
            className="hover:text-gray-700 dark:hover:text-gray-400 transition-colors"
          >
            Plan du site
          </a>
        </div>
      </div>
    </footer>
  );
}