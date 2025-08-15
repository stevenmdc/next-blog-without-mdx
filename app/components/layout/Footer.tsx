export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="mt-12 text-center border-t border-gray-200 dark:border-zinc-800 pt-8"
      role="contentinfo"
    >
      <div className="text-sm flex-1 text-left text-gray-500 dark:text-gray-600 space-y-2">
        <p>© {currentYear} Steven Madec. </p>
      </div>
    </footer>
  )
}
