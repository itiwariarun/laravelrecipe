import React, { Fragment, useState } from "react";
import { Outlet, Link, Route, Routes } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    CalendarIcon,
    ChartBarIcon,
    FolderIcon,
    HomeIcon,
    InboxIcon,
    UsersIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Seller", href: "/seller", icon: UsersIcon, current: false },
    { name: "Users", href: "/user", icon: UsersIcon, current: false },
    { name: "Promotion", href: "/promotion", icon: CalendarIcon, current: false },
    { name: "Profile", href: "/profile", icon: UsersIcon, current: false },
    { name: "Reports", href: "/report", icon: ChartBarIcon, current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function Dashboard({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="Ds1" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="Ds2" />
                        </Transition.Child>

                        <div className="Ds3">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="Ds4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="Ds5">
                                            <button
                                                type="button"
                                                className="Ds6"
                                                onClick={() =>
                                                    setSidebarOpen(false)
                                                }
                                            >
                                                <span className="sr-only">
                                                    Close sidebar
                                                </span>
                                                <XMarkIcon
                                                    className="w-6 h-6 text-white"
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="Ds7">
                                        <div className="Ds8">
                                            <img
                                                className="w-auto h-8"
                                                src="https://global-uploads.webflow.com/628f3abb7249f8d11545c39a/628f5a103417e11b56cd92ca_Recipe-Cup-Logotype.svg"
                                                alt="Your Company"
                                            />
                                        </div>
                                        <nav className="Ds9">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? "Ds10"
                                                            : "Ds11",
                                                        "Ds12 group text-base"
                                                    )}
                                                >
                                                    <item.icon
                                                        className={classNames(
                                                            item.current
                                                                ? "text-gray-300"
                                                                : "Ds13",
                                                            "Ds14"
                                                        )}
                                                        aria-hidden="true"
                                                    />
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="Ds15">
                                        <a href="#" className="Ds16 group">
                                            <div className="flex items-center">
                                                <div>
                                                    <img
                                                        className="Ds17"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="Ds18">
                                                        Tom Cook
                                                    </p>
                                                    <p className="Ds19 group-hover:text-gray-300">
                                                        View profile
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="flex-shrink-0 w-14">
                                {/* Force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}
                <div className="Ds20">
                    {/* Sidebar component, swap this element with another sidebar if you like */}
                    <div className="Ds21">
                        <div className="Ds22">
                            <div className="Ds8">
                                <img
                                    className="w-auto h-8"
                                    src="https://global-uploads.webflow.com/628f3abb7249f8d11545c39a/628f5a103417e11b56cd92ca_Recipe-Cup-Logotype.svg"
                                    alt="Your Company"
                                />
                            </div>
                            <nav className="Ds23">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            item.current ? "Ds10" : "Ds11",
                                            "Ds12 group text-sm"
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.current
                                                    ? "text-gray-300"
                                                    : "Ds13 group-hover:text-gray-300",
                                                "Ds14"
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="Ds15">
                            <a href="#" className="w-full Ds16 group">
                                <div className="flex items-center">
                                    <div>
                                        <img
                                            className="Ds17"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <p className="Ds27">Tom Cook</p>
                                        <p className="Ds19">
                                            <span className="text-xs">
                                                View profile
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="Ds24">
                    <div className="Ds25">
                        <button
                            type="button"
                            className="Ds26"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                        </button>
                    </div>
                    <main className="flex-1 ">
                        <div className="py-6">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
