import { Link } from 'react-scroll';
import { useState } from 'react';

const BaseNavbar = () => {
  const [isOpen, setOpen] = useState(false);
  // to flex-col

  return (
    <nav className="bg-neutral text-neutral-content sticky top-0">
      <div className="flex flex-col items-center">
        <div className="w-full flex justify-between p-3 items-center">
          <div className="flex-1">
            <button className="btn btn-ghost text-lg font-bold">
              Showoff.case
            </button>
          </div>

          {/* if > lg breakpoint */}
          <div className="flex-none hidden lg:flex">
            <div className="flex items-stretch">
              <a className="btn btn-ghost btn-sm rounded-btn normal-case text-base">
                <Link to="home" smooth={true} duration={250}>
                  Home
                </Link>
              </a>

              <a className="btn btn-ghost btn-sm rounded-btn normal-case text-base">
                <Link to="features" smooth={true} duration={250}>
                  Features
                </Link>
              </a>

              <a className="btn btn-ghost btn-sm rounded-btn normal-case text-base">
                <Link to="pricing" smooth={true} duration={250}>
                  Pricing
                </Link>
              </a>

              <a className="btn btn-ghost btn-sm rounded-btn normal-case text-base">
                <Link to="contact" smooth={true} duration={250}>
                  Contact
                </Link>
              </a>
            </div>
          </div>

          <div className="flex-none lg:hidden">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* If open nav or not */}
        <div
          className={`w-full flex justify-center h-full ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col gap-8 uppercase text-lg font-semibold items-center justify-center text-white pb-3">
            <a
              className="cursor-pointer active:text-gray-500"
              onClick={() => setOpen(!isOpen)}
            >
              <Link to="home" smooth={true} duration={250}>
                Home
              </Link>
            </a>

            <a
              className="cursor-pointer active:text-gray-500"
              onClick={() => setOpen(!isOpen)}
            >
              <Link to="features" smooth={true} duration={250}>
                Features
              </Link>
            </a>

            <a
              className="cursor-pointer active:text-gray-500"
              onClick={() => setOpen(!isOpen)}
            >
              <Link to="pricing" smooth={true} duration={250}>
                Pricing
              </Link>
            </a>

            <a
              className="cursor-pointer active:text-gray-500"
              onClick={() => setOpen(!isOpen)}
            >
              <Link to="contact" smooth={true} duration={250}>
                Contact
              </Link>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BaseNavbar;
