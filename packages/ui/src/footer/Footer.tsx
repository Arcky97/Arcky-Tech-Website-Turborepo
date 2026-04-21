import Link from "next/link";

const LINKS = [
  {
    href: "/terms-of-service",
    text: "Terms of Service"
  },
  {
    href: "/privacy-policy",
    text: "Privacy Policy"
  },
  {
    href: "/cookie-policy",
    text: "Cookie Policy"
  }
];

export default function Footer() {
  return(
    <footer id="footer" className="ui:flex ui:flex-col ui:h-30 ui:bg-gray-900 ui:border-gray-600/75 ui:border-t ui:text-white ui:py-8 ui:text-center ui:w-full ui:items-center ui:mx-auto">
      <div className="ui:flex ui:gap-4 ui:text-sm mb-2">
        {LINKS.map(({href, text}, index) => (
          <div key={`item-${index}`}>
            <Link
              href={href}
              className="ui:text-gray-400 ui:hover:text-white ui:hover:text-[0.9rem] ui:transition-all ui:ease-in-out ui:duration-300"
            >
              {text}
            </Link>
            {index < LINKS.length - 1 && <span>|</span>}
          </div>
        ))}
      </div>
      <p className="ui:text-xs ui:text-gray-400">&copy; {new Date().getFullYear()} Arcky-Tech. All rights reserved.</p>
    </footer>
  )
}