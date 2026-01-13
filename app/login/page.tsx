'use client';
import { users } from '@/lib/constant';
import { useRouter } from 'next/navigation';
import Notiflix from 'notiflix';
import React, { useState, FormEvent, ChangeEvent, JSX } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const LoginPage: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [emailerror, setEmailerror] = useState<string>('');
    const [passworderror, setPassworderror] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const validate = (): boolean => {
        let emailError = '';
        let passError = '';

        if (!email) {
            emailError = 'Email field is required';
        } else if (
            !String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        ) {
            emailError = 'Bad email format';
        }

        if (!password) {
            passError = 'Password field is required';
        }

        setEmailerror(emailError);
        setPassworderror(passError);

        return !(emailError || passError);
    };

    const login = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!validate()) return;
        Notiflix.Loading.init({ svgColor: 'rgba(241,230,230,0.985)' });
        Notiflix.Loading.circle();

        setTimeout(() => {
            const matchedUser = users.find(
                (user) => user.email === email && user.password === password
            );
            Notiflix.Loading.remove();

            if (!matchedUser) {
                toast.error('Invalid email or password')
                return;
            }

            localStorage.setItem('accessToken', 'mock-token-123');
            document.cookie = `accessToken=${'mock-token-123'}; path=/; max-age=86400`;
            localStorage.setItem('userEmail', matchedUser.email);
            toast.success('Login Successfully')
            router.push('/');
        }, 800);
    };


    return (
        <section className="w-full h-screen bg-white m-0 flex items-center justify-center">
            <div className="w-full max-w-md px-4">
                <form
                    autoComplete="off"
                    onSubmit={login}
                    className="bg-gray-200 mt-8 rounded-lg shadow-md p-6"
                >
                    <div className="text-center mb-6">
                        <h2 className='text-5xl font-bold'>Dish Poll</h2>
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            className="w-full h-10 text-sm px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                        <span className="text-red-500 text-xs mt-1 block">{emailerror}</span>
                    </div>

                    <div className="mb-4 relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            className="w-full h-10 text-sm px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                        <div className="absolute top-2 right-3 cursor-pointer text-gray-500">

                            {showPassword ? (
                                <FaEye onClick={() => setShowPassword(!showPassword)} className="cursor-pointer" />
                            ) : (
                                <FaEyeSlash onClick={() => setShowPassword(!showPassword)} className="cursor-pointer" />
                            )}

                        </div>
                        <span className="text-red-500 text-xs mt-1 block">{passworderror}</span>
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full bg-[#23438f] text-white py-2 rounded-lg text-base font-semibold hover:bg-[#1f3876] transition-all"
                        >
                            SIGN IN
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default LoginPage