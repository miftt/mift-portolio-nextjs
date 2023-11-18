import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface NavbarItemProps{
    children: React.ReactNode;
    className?: string;
    href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({
    children,
    href,
    className,
}) => {
    return (
        <div>
            <ul className="flex space-x-4">
                <li className={twMerge(`relative group text-lg`,className)}>
                    <Link
                     href={href} 
                     className="
                        text-slate-700 
                        cursor-pointer
                        inline-block
                        "
                    >
                        {children}
                    </Link>
                    <span className="absolute h-0.5 bg-gray-800 bottom-0 left-0 w-0 group-hover:w-full transition-all duration-400">
                    {/* CONTENT OF SLIDER HOVER */}
                    </span>
                </li>
            </ul>
        </div>
     );
}
 
export default NavbarItem;