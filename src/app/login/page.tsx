'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

const LoginPage = () => {
    const panelRef = useRef<HTMLDivElement>(null);
    const formGroupsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        if (panelRef.current) {
            gsap.to(panelRef.current, {
                autoAlpha: 1,
                duration: 0.8,
                ease: 'power2.out',
                delay: 0.2
            });
        }

        const animatedElements = formGroupsRef.current.filter(el => el);
        if (animatedElements.length > 0) {
            gsap.fromTo(animatedElements, 
                { opacity: 0, y: 30 }, 
                { 
                    opacity: 1, 
                    y: 0, 
                    duration: 0.7, 
                    stagger: 0.1, 
                    delay: 0.5, 
                    ease: 'power3.out' 
                }
            );
        }
    }, []);

    return (
        <div className="flex items-center justify-center p-6 md:p-10">
            <div ref={panelRef} className="temple-panel p-8 md:p-12 border-2 rounded-lg w-full max-w-lg opacity-0">
                <h2 ref={el => { formGroupsRef.current[0] = el; }} className="form-group font-press-start text-3xl md:text-4xl text-white text-center mb-10">PLAYER LOGIN</h2>
                <form action="#" method="POST" className="space-y-8">
                    <div ref={el => { formGroupsRef.current[1] = el; }} className="form-group">
                        <label htmlFor="username" className="font-press-start text-lg text-white block mb-3">Username</label>
                        <input type="text" id="username" name="username" className="form-input w-full text-2xl p-3" required />
                    </div>
                    <div ref={el => { formGroupsRef.current[2] = el; }} className="form-group">
                        <label htmlFor="password" className="font-press-start text-lg text-white block mb-3">Password</label>
                        <input type="password" id="password" name="password" className="form-input w-full text-2xl p-3" required />
                    </div>
                    <div ref={el => { formGroupsRef.current[3] = el; }} className="form-group pt-4">
                        <button type="submit" className="btn-primary w-full text-lg py-4">LOGIN</button>
                    </div>
                </form>
                
                <div ref={el => { formGroupsRef.current[4] = el; }} className="form-group flex items-center gap-4 my-8">
                    <hr className="w-full border-t border-gray-600" />
                    <span className="text-gray-400 font-press-start text-sm">OR</span>
                    <hr className="w-full border-t border-gray-600" />
                </div>

                <div ref={el => { formGroupsRef.current[5] = el; }} className="form-group">
                    <button type="button" className="btn-google w-full flex items-center justify-center gap-3 text-lg py-3">
                        <svg className="w-6 h-6" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
                        Sign in with Google
                    </button>
                </div>

                <p ref={el => { formGroupsRef.current[6] = el; }} className="form-group text-center mt-8 text-xl">
                    Don't have an account? <Link href="/register" className="text-brand-lime hover:underline">Register here</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
