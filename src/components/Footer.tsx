
import InstaIcon from '../assets/icons/insta.svg'
import XIcon from '../assets/icons/x-social.svg'
import LinkedInIcon from '../assets/icons/linkedin.svg'
import YoutubeIcon from '../assets/icons/youtube.svg'
import Link from 'next/link';

export const Footer = () => {
  return(
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
    <div className="container">
      <div className='flex flex-col gap-5 sm:flex-row sm:justify-between'>
        <div className="text-center"> 2025 HICA.CTF - <Link href="https://bloggersconvision.com/">A Product of BloggersCon Vision</Link></div>
        <ul className='flex justify-center gap-2.5'>
          <li><Link href="https://twitter.com/HICA_Community/"><XIcon/></Link></li>
          <li><Link href="https://in.linkedin.com/company/hica-club/"><LinkedInIcon/></Link></li>
          <li><Link href="https://www.instagram.com/hica_club/"><InstaIcon/></Link></li>
          <li><Link href="https://www.youtube.com/@ByteBloggerBase"><YoutubeIcon/></Link></li>
        </ul>
      </div>

    </div>
    </footer>
  )
};
