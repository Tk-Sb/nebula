import Particles from "./particles";

export default function BackgroundWrapper({ children }) {
  return (
    <>
      <div className="w-full h-full relative">
        <div className="w-full h-full absolute bg-[url('/image.png')] bg-cover bg-no-repeat bg-center -z-10 ">
          <Particles
            particleBaseSize={40}
            particleCount={500}
            particleSpread={10}
            speed={0.1}
            particleColors={['#1C338F', '#081443', '#4368FE']}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={true}
          />
        </div>
        
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </>
  );
}