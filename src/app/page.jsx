import BackgroundWrapper from "@/components/background";
import NavBar from "@/components/nav-bar";

export default function Home() {
  return (
    <>
      <BackgroundWrapper>
        <div className="w-full h-fit flex flex-col gap-6 pb-24 lg:pb-80 ">
          <NavBar></NavBar>
          <div className="w-full h-fit flex flex-col gap-4 lg:gap-5 ">
            <div className="w-full h-fit flex flex-col gap-2 lg:gap-5 ">
              <div className="w-full h-fit text-2xl lg:text-5xl font-bold text-white text-center ">
                <span className="text-[#9038FF] ">N</span>ebula studio <br /> we craft sound <span className="text-[#9038FF] "> and </span>vision
              </div>
              <div className="w-full h-fit text-xs lg:text-3xl font-normal text-white text-center ">
                we are collective of artists pushing creative <br /> boundaries<span className="text-[#9038FF] "> specializing sound</span> motion digital visuals
              </div>
            </div>
            <div className="w-full h-fit flex justify-center gap-6 lg:gap-10 ">
              <button className="w-fit h-fit relative flex overflow-hidden rounded-lg lg:rounded-2xl p-0.5 ">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9038FF_0%,#FF47AA_100%)]" />
                <span className="w-fit h-fit flex items-center justify-center p-1.5 lg:p-3.5 rounded-lg lg:rounded-2xl text-sm lg:text-base font-normal text-white  bg-slate-950 hover:bg-[#9038FF] transition-colors  backdrop-blur-3xl cursor-pointer">
                  contact us
                </span>
              </button>
              <button className="w-fit h-fit flex rounded-lg lg:rounded-2xl p-2 lg:p-4 text-sm lg:text-base font-normal text-white bg-[#9038FF] cursor-pointer ">
                discover our work
              </button>
            </div>
          </div>
        </div>
      </BackgroundWrapper>
    </>
  )
}