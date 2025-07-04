"use client"
import HelixImage from '../assets/images/helix2.png'
import EmojiImage from '../assets/images/emojistar.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { use, useRef, useState } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'already'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/early-access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await res.json();

    if (res.ok && data.message === 'Signed up successfully') {
      setStatus('success');
      setEmail('');
    } else if (data.message === 'Already signed up') {
      setStatus('already');
    } else {
      setStatus('error');
    }
  };
  
  return (
    <div className="bg-black text-white py-[72px] sm:py-24" ref={containerRef}>
      <div className="container max-w-xl relative">
      <motion.div className='absolute right-[580px] top-[10px] hidden sm:inline'
      drag
      dragSnapToOrigin
      >
      <Image src={HelixImage} alt="helix" height={200} width={200} className='max-w-none' draggable="false"/>
      </motion.div>
      <motion.div className='absolute left-[560px] top-[10px] hidden sm:inline'
      drag
      dragSnapToOrigin
      >       
      <Image src={EmojiImage} alt="emoji" height={200} width={200} className='max-w-none' draggable="false"/>
      </motion.div>
       

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Get Early Access</h2>
        <p className="text-xl text-white/70 mt-5 center">Be the First One to Explore Our Ultimate CTF Experience.</p>
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="yourmail@gmail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button type="submit" className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>

        {status === 'success' && <p className="text-green-400 mt-2 text-center">Signed up successfully!</p>}
        {status === 'already' && <p className="text-yellow-400 mt-2 text-center">You’ve already signed up.</p>}
        {status === 'error' && <p className="text-red-400 mt-2 text-center">Something went wrong.</p>}
      </div>


    </div>
  )
};
