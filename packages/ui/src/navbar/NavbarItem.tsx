import Link from "next/link";
import * as Icons from "@heroicons/react/24/outline";
import { ComponentType, SVGProps } from "react";

interface NavbarProps {
  href: string;
  icon?: keyof typeof Icons;
  text?: string;
  isShrunk?: boolean;
  action?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function NavbarItem({ href, icon, text, isShrunk, action }: NavbarProps) {
  const IconComp = Icons[icon || "HomeIcon"] as ComponentType<SVGProps<SVGElement>>;
  return (
    <>
      <Link
        href={href}
        className="ui:flex ui:items-center ui:space-x-2 ui:hover:text-gray-400"
        onClick={action}
      >
        <IconComp className={`${
          isShrunk 
            ? "ui:w-5 ui:h-5 ui:lg:w-6 ui:lg:h-6" 
            : "ui:w-6 ui:h-6 ui:lg:w-7 ui:lg:h-7"
          } ui:transition-all ui:duration-300 ui:ease-in-out`
        }/>
          <span className={`${isShrunk ? "ui:text-md" : "ui:text-lg"}
          ui:hidden ui:md:inline ui:transition-all ui:duration-300 ui:ease-in-out`}>{text}</span>
      </Link>
    </>
  )
}