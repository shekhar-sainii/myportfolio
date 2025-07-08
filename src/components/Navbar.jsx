import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const location = useLocation();

  return (
    <Disclosure
      as="nav"
      className="bg-white/20 backdrop-blur-md fixed w-full z-50 shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>

              {/* Logo and nav links */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <Link
                  to="/"
                  className="hidden sm:flex flex-shrink-0 items-center"
                >
                  <img
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                    className="h-10 w-auto"
                  />
                </Link>

                {/* Desktop navigation */}
                <div className="hidden sm:ml-8 sm:flex sm:space-x-6">
                  {navigation.map((item) => {
                    const isCurrent = location.pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={isCurrent ? "page" : undefined}
                        className={classNames(
                          isCurrent
                            ? "text-black border-b-2 border-indigo-500"
                            : "text-black hover:text-green-500 hover:border-b-2 hover:border-indigo-400",
                          "inline-flex items-center px-3 py-2 text-sm font-medium transition"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Right side icons */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-4">
                {/* Notification Button */}
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition"
                  aria-label="View notifications"
                >
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Link to={"/profile"}>
                    <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-9 w-9 rounded-full object-cover"
                        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379005.jpg&fm=jpg"
                        alt="User avatar"
                      />
                    </MenuButton>
                    </Link>
                  </div>
{/* 
                  <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={classNames(
                            active ? "bg-indigo-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-indigo-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Settings
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-indigo-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems> */}
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <DisclosurePanel className="sm:hidden bg-white-800">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => {
                const isCurrent = location.pathname === item.href;
                return (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={classNames(
                      isCurrent
                        ? "bg-gray-900 text-white"
                        : "text-black hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium transition"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                );
              })}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
