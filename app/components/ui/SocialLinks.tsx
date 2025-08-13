export function SocialLinks() {
  const socialLinks = [
    {
      name: 'Twitter',
      handle: '@johnsmith',
      url: 'https://x.com/johnsmith',
      ariaLabel: 'Suivez-moi sur Twitter',
    },
    {
      name: 'YouTube',
      handle: 'youtube',
      url: 'https://www.youtube.com/@johnsmith',
      ariaLabel: 'Visitez ma chaîne YouTube',
    },
    {
      name: 'LinkedIn',
      handle: 'linkedin',
      url: 'https://www.linkedin.com/in/johnsmith',
      ariaLabel: 'Connectons-nous sur LinkedIn',
    },
    {
      name: 'GitHub',
      handle: 'github',
      url: 'https://github.com/johnsmith',
      ariaLabel: 'Voir mes projets sur GitHub',
    },
  ]
  return (
    <div className="sm:flex space-x-0 tracking-tight sm:space-x-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group font-semibold text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-all duration-200"
          aria-label={link.ariaLabel}
        >
          <span className="sr-only">{link.name}</span>
          {link.handle}
          <span className="group-hover:opacity-100 font-light opacity-0 transition-opacity duration-200 ml-1">
            ↗
          </span>
        </a>
      ))}
    </div>
  )
}
