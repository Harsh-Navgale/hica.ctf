import Image from 'next/image'
import kongsecLogo from "../assets/images/kongsec.png";
import vulncureLogo from "../assets/images/Vulncure.png";
import pentoraLogo from "../assets/images/pentora.png";
import metaLogo from "../assets/images/Meta.png";
import techdLogo from "../assets/images/tech.png";
import hactifyLogo from "../assets/images/hacktify.png";

export default function LogoCarousel() {

  const logos = [
  { src: kongsecLogo, alt: "Kongsec Logo" },
  { src: vulncureLogo, alt: "Vulncure Logo" },
  { src: pentoraLogo, alt: "Pentora Logo" },
  { src: metaLogo, alt: "MetaUpSpace Logo" },
  { src: techdLogo, alt: "Tech Defender Logo" },
  { src: hactifyLogo, alt: "Hacktify Logo" },
  ]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={200} height={200} />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} width={200} height={200} />
          </li>
        ))}
      </ul>
    </div>
  )
}