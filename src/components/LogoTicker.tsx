import Image from 'next/image'
import kongsecLogo from "../assets/images/kongsec.png";
import vulncureLogo from "../assets/images/Vulncure.png";
import pentoraLogo from "../assets/images/pentora.png";
import metaLogo from "../assets/images/Meta.png";
import techdLogo from "../assets/images/tech.png";
import hactifyLogo from "../assets/images/hacktify.png";
import LogoCarousel from "./companylogos";

  const logos = [
  { src: kongsecLogo, alt: "Kongsec Logo" },
  { src: vulncureLogo, alt: "Vulncure Logo" },
  { src: pentoraLogo, alt: "Pentora Logo" },
  { src: metaLogo, alt: "MetaUpSpace Logo" },
  { src: techdLogo, alt: "Tech Defender Logo" },
  { src: hactifyLogo, alt: "Hacktify Logo" },
];

export const LogoTicker = () => {
  return(
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-lg text-center text-white/70 mb-16">Trusted by Best Cybersecurity Companies</h2>
        <LogoCarousel/>
        
        
      </div>

    </div>
  )
};
