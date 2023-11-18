import Link from 'next/link';

const Navbar = () => {
  return (
  <>
    <div 
        className="
            flex 
            position: relative
            items-center 
            bg-emerald-100
            py-3 
            px-5
            "
        >
        <Link
            className="
                mr-10
                text-slate-900
                font-bold 
                text-3xl
                after: content-['']
                display: block
                position: absolute
                w-0
                h-2
                bg-emerald-500
                transition
                hover:w-full
                "
                href="/"
            >
                Mifuzi.
       </Link>
        <Link 
            className="
                mr-2 
                hover:text-slate-900
                transition
                " 
                href="/"
            >
                Home
        </Link>
        <Link 
            className="
                mr-2 
                text-white 
                hover:text-slate-300 
                transition
                " 
                href="/about"
            >
                About
        </Link>
        <Link 
            className="
                mr-2 
                text-white 
                hover:text-slate-300 
                transition
                " 
                href="/profile"
            >
                Profile
        </Link>
    </div>
</>
  );
};

export default Navbar;