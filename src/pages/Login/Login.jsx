import React from 'react';
import './login.scss';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { LockClosedIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div className='' style={{ display: 'flex' }}>
            <div className='flex-1' style={{ backgroundColor: '#FFF' }}>
                <div className="navbar-divider" style={{ borderBottom: '4px solid #7198F9' }}></div>
                <div className='mx-auto flex max-w-7xl items-center px-6 lg:px-8' aria-label='Global'>
                    <div className="flex min-h-full flex-1 flex-col justify-between py-12">
                        <div className="sm:mx-auto sm:w-full sm:max-w-lg flex flex-col justify-start items-start">
                        <img
                            className="h-10 w-auto"
                            src="src/assets/imm-logo.svg"
                            alt="Your Company"
                        />
                            <h2 className="mt-10 text-2xl font-semibold leading-9 tracking-tight text-gray-900">
                                Masuk ke akun anda
                            </h2>
                        </div>

                        <div className="mt-10  sm:mx-auto sm:w-full sm:max-w-lg">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <div className='flex justify-between'>
                                        <label htmlFor="email" className="text-sm block font-bold leading-6 text-gray-900">
                                            Email
                                        </label>
                                        <EnvelopeIcon className='h-6 w-6' />
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-bold leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <LockClosedIcon className='h-6 w-6' />
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className='flex items-center justify-between'>
                                    <button
                                        type="submit"
                                        className="flex w-1/4 justify-center rounded-md bg-[#0F1F3E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#7198F9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Masuk
                                    </button>
                                    <div className="text-sm">
                                        Belum punya akun?
                                        <Link to='/register' className="font-semibold px-1 text-black hover:text-[#7198F9]">
                                            Daftar
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hidden lg:block' style={{ backgroundColor: '#7198F9' }}>
                <img src="src/assets/images/login.svg" alt="" />
            </div>
        </div>
    )
}
