import { ChevronRight } from "lucide-react"
import { socialLinks } from "../data/info"
export default function SocialMedia()
{
    return(
      <section>
      <h2 className="text-lg uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-6">
        Social
      </h2>
      <div className="space-y-2">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center group text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
          >
            {link.icon}
            <span className="ml-2">{link.name}</span>
            <ChevronRight size={16} className="ml-1 opacity-0 group-hover:opacity-100" />
          </a>
        ))}
      </div>
    </section>
    )
}