"use client";
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";



export const Header = () => {
    const [isCatDropdownOpen, setIsCatDropdownOpen] = useState(false);
    const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const toggleCatDropdown = () => {
        setIsCatDropdownOpen(!isCatDropdownOpen);
    };
    
    const togglePagesDropdown = () => {
        setIsPagesDropdownOpen(!isPagesDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
      };

      const renderMobileMenu = () => {
        if (isMobileMenuOpen) {
          return (
            <Box className="md:hidden">
                <Link href="/" className="text-l block py-2 hover:text-fadedpee">
                    Home
                </Link>
                <Link href="/about" className="text-l block py-2 hover:text-fadedpee">
                    About
                </Link>
                <Link href="/backend" className="text-l block py-2 hover:text-fadedpee">
                    Backend Development
                </Link>
                <Link href="/data-science" className="text-l block py-2 hover:text-fadedpee">
                    Data Science
                </Link>
                <Link href="/devops" className="text-l block py-2 hover:text-fadedpee">
                    DevOps
                </Link>
                <Link href="/frontend" className="text-l block py-2 hover:text-fadedpee">
                    Frontend Development
                </Link>
                <Link href="/product-management" className="text-l block py-2 hover:text-fadedpee">
                    Product Management
                </Link>

                <Link href="/contact" className="text-l block py-2 hover:text-fadedpee">Contact</Link>
                <Box className="my-5">
                    <Link href="/login">
                        <Button variant="outlined" sx={{ backgroundColor:"transparent", color:"#0C1713"}} className="rounded bg-transparent text-dark px-4 py-2 text-sm hover:bg-fadedpee hover:text-white border border-2 border-brownie hover:border-fadedpee">
                            Login
                        </Button>
                    </Link>
                </Box>
                
                <Box>
                    <Link href="/register">
                        <Button variant="contained" sx={{ backgroundColor:"#3B0D11"}} className="rounded bg-brownie text-white px-4 py-2 text-sm hover:bg-fadedpee hover:text-white border border-brownie hover:border-fadedpee">
                            Register
                        </Button>
                    </Link>
                </Box>
                    
            </Box>
          );
        }
        return null;
      };
      
    return(
        <nav id="header" className="bg-transparent">
                <Box maxWidth="xl" sx={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"between"}} className=" mt-0 py-1">
                    <Box maxWidth="sm" sx={{ display:"flex alignItems:center"}} className="logo-wrapper pl-8">
                        <Link href="/">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Logo"
                            width={90}
                            height={90}
                            className="h-20 w-20 object-fit ml-4 logo"
                        />
                        </Link>
                    </Box>
                    <Box maxWidth="l" className="mobile-menu-button md:hidden">
                        <button className="text-gray-700 p-2" onClick={toggleMobileMenu}>
                            <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http:www.w3.org/2000/svg"
                            >
                            <path
                                fillRule="evenodd"
                                d="M12 4H4a1 1 0 100 2h8a1 1 0 100-2zM4 10a1 1 0 110-2h8a1 1 0 110 2H4zm8 3a1 1 0 100 2H4a1 1 0 100-2h8z"
                                clipRule="evenodd"
                            />
                            </svg>
                        </button>
                        {renderMobileMenu()}
                    </Box>
               <ul
                 className="nav-menu-wrapper flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-l md:font-medium" id="mobile-menu">
                    <li>
                        <Link href="/" className="bg-fadedpee md:bg-transparent block pl-3 pr-4 py-2 md:text-goldie md:p-0 rounded focus:outline-none"
                            aria-current="page">Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-fadedpee md:p-0">About</Link>
                    </li>
                    <li>
                        <button onClick={toggleCatDropdown} data-dropdown-toggle="dropdownNavbar"
                            className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-fadedpee md:p-0 font-medium flex items-center justify-between w-full md:w-auto">
                                Categories
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http:www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd">
                                </path>
                            </svg>
                        </button>
                            <Box 
                                className={`${
                                    isCatDropdownOpen ? "block" : "hidden"
                                } bg-transparent text-base z-10 list-none rounded shadow absolute mt-2 w-36 left-30`}>
                                <ul className="py-1" aria-labelledby="dropdownNavbarLink">
                                    
                                    <li>
                                    <Link href="/backend" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Backend Development</Link>
                                    </li>
                                    <li>
                                        <Link href="/data-science" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Data Science</Link>
                                    </li>
                                    <li>
                                        <Link href="/devops" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">DevOps</Link>
                                    </li>
                                    <li>
                                        <Link href="/frontend" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Frontend Development</Link>
                                    </li>
                                    <li>
                                        <Link href="/product-management" className="text-l hover:bg-gray-100 text-gray-700 block px-4 py-2">Product Management</Link>
                                    </li>
                                </ul> 
                            </Box>                                           
                    </li>
                    
                    <li>
                    <Link href="/contact" className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-fadedpee md:p-0">Contact Us</Link>
                    </li>
                </ul>
                <Box maxWidth="sm" sx={{ display:"flex", alignItems:"center", justifyContent:"center"}} className="space-x-2 menu-icons">
                    <Box className="relative m-6 inline-flex w-fit pr-4">
                        <Link href="/login">
                            <Button variant="outlined" className="rounded bg-transparent text-dark px-4 py-2 text-sm hover:bg-fadedpee hover:text-white border border-2 border-brownie hover:border-fadedpee">
                                Login
                            </Button>
                        </Link>
                    </Box>
                   
                    <Box className="relative m-6 inline-flex w-fit pr-4">
                        <Link href="/register">
                            <Button variant="contained" sx={{ backgroundColor:"#3B0D11"}} className="rounded bg-brownie text-white px-4 py-2 text-sm hover:bg-fadedpee hover:text-white border border-brownie hover:border-fadedpee">
                                Register
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </nav>
        );
    };

