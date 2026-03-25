// "use client";

// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Hero() {
//   return (
//     <section className="w-full min-h-screen bg-black flex items-center justify-center px-6 lg:px-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl w-full">

//         {/* LEFT SECTION — TEXT */}
//         <div>
//           <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-white">
//             Real-Time Disaster  
//             <span className="text-[#45f3ff]"> Monitoring</span>  
//             <br /> for India —  
//             <span className="text-[#45f3ff]"> AlertHive</span>
//           </h1>

//           <p className="text-gray-300 text-lg mt-6 max-w-xl">
//             AlertHive provides real-time intelligence on floods, monsoons, 
//             earthquakes, cyclones, and other critical events across India.
//             Powered by aggregated feeds from government agencies, satellite data,
//             Indian news networks, and social media.
//           </p>

//           <Button
//             className="mt-10 px-8 py-6 text-lg font-semibold bg-[#45f3ff]/10 border border-[#45f3ff]/40 text-[#45f3ff] rounded-xl hover:bg-[#45f3ff]/20 transition-all"
//           >
//             Start Monitoring <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//         </div>

//         {/* RIGHT SECTION — GLOW PANEL */}
//         <div className="relative flex items-center justify-center p-10">
//           <div className="w-full h-[350px] lg:h-[400px] rounded-3xl bg-gradient-to-br from-[#1a1f23] to-[#0b0d0f] border border-[#45f3ff]/20 shadow-[0_0_50px_-10px_#45f3ff] flex items-center justify-center">
//             <div className="flex flex-col items-center text-gray-300">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="90"
//                 height="90"
//                 fill="none"
//                 stroke="#45f3ff"
//                 strokeWidth="1.2"
//               >
//                 <circle cx="45" cy="45" r="40" />
//                 <path d="M22 45h46M45 22v46" />
//               </svg>

//               <p className="mt-4 text-lg text-gray-400">
//                 Live India Disaster Monitoring Map
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function Hero() {
    const router=useRouter();
    const handleMonitor=()=>{
     router.push('/dashboard')   
    }
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black"
    >
      {/* --- CREATIVE NEON GRID BACKGROUND --- */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="#45f3ff"
                strokeWidth="0.3"
                strokeOpacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* --- GLOWING BACKGROUND DATA BLUR --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(69,243,255,0.15),_transparent_60%)] pointer-events-none" />

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative text-center max-w-3xl z-10">
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            
          <span className="text-[#45f3ff]"> Disaster Monitoring</span>
          <br />
          Powered by <span className="text-[#45f3ff]">AlertHive</span>
        </h1>

        <p className="text-gray-300 text-lg mt-6">
          Stay ahead of floods, monsoons, earthquakes, and cyclones with
          real-time intelligence from government agencies, satellites,
          Indian news networks and social media monitoring.
        </p>

        <Button
        onClick={handleMonitor}
          className="mt-10 px-8 py-6 text-lg font-semibold bg-[#45f3ff]/10 border border-[#45f3ff]/40 text-[#45f3ff] rounded-xl hover:bg-[#45f3ff]/20 transition-all"
        >
          Start Monitoring <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
