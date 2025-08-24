interface WebsiteInfoProps {
  showDomain?: boolean
  showEmail?: boolean
  className?: string
}

export default function WebsiteInfo({ showDomain = true, showEmail = true, className = "" }: WebsiteInfoProps) {
  const domain = "www.bilaltechnical.services"
  const email = "info@bilaltechnical.services"

  return (
    <div className={`flex flex-col sm:flex-row gap-2 ${className}`}>
      {showDomain && (
        <a
          href={`https://${domain}`}
          className="text-blue-600 hover:underline flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-block w-4 h-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </span>
          {domain}
        </a>
      )}

      {showEmail && (
        <a href={`mailto:${email}`} className="text-blue-600 hover:underline flex items-center gap-1">
          <span className="inline-block w-4 h-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </span>
          {email}
        </a>
      )}
    </div>
  )
}
