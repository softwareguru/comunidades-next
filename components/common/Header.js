/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between  py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <img className="h-8 w-auto" src={`/images/sglogo.svg`} alt="" />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
