

export default function NavBar() {
  const menuItems = [
    {id: 1, text: "work", icon: <></>},
    {id: 2, text: "about", icon: <></>},
    {id: 3, text: "services", icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1667 8.33333L13.6667 5.83333L17.8333 1.66667C17.0833 1.25 16.1667 1 15.1667 1C11.9167 1 9.33333 3.58333 9.33333 6.83333C9.33333 7.16667 9.33333 7.5 9.41667 7.83333C7 10.25 2.5 14.75 2 15.25C0.666667 16.5833 0.666667 18.6667 2 20C3.33333 21.3333 5.41667 21.3333 6.75 20C7.25 19.5 11.75 15 14.1667 12.5833C14.5 12.6667 14.8333 12.6667 15.1667 12.6667C18.4167 12.6667 21 10.0833 21 6.83333C21 5.83333 20.75 4.91667 20.3333 4.16667L16.1667 8.33333Z" stroke="#9038FF" strokeWidth="2" strokeMiterlimit="10"/></svg>},
  ]

  return (
    <>
      <div className="w-full h-fit flex justify-between p-5 lg:p-16 ">
        <div className="w-6 h-6 lg:w-16 lg:h-16 ">
          <svg className="w-full h-full " width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.46289 7.98779C8.81935 7.98789 9.29452 8.44544 9.49805 10.0229C9.70157 11.6008 10.1769 19.0636 10.4482 22.3706C10.5989 24.2069 10.6852 25.259 11.1514 25.8315C9.84234 25.655 8.59611 25.2815 7.44238 24.7427C7.2751 22.5541 6.20819 7.98891 7.46289 7.98779ZM12.8906 0.168457C20.0095 0.16867 25.7803 5.94014 25.7803 13.0591C25.7801 17.3955 23.6365 21.2286 20.3535 23.5649V10.8374C20.3532 9.48093 18.5217 9.2775 18.5215 10.8374V24.6558C18.4017 24.7141 18.281 24.771 18.1592 24.8257C16.9489 24.1886 16.2148 23.7638 16.2148 22.0308C16.2148 20.1289 15.9434 9.07292 15.9434 7.58057C15.9431 6.08844 14.0442 5.95282 14.0439 7.58057V22.0308C13.973 23.0592 14.1806 23.7142 14.9932 25.0161C13.2077 24.2038 12.2885 23.6124 12.0762 20.1997L11.2627 10.0229C11.0276 8.48626 10.555 7.75129 9.02344 6.69873C7.45264 6.42286 6.68531 6.56139 5.56348 7.58057V23.6616C2.20309 21.3352 0.000131457 17.4555 0 13.0591C0 5.94 5.77155 0.168457 12.8906 0.168457Z" fill="url(#paint0_linear_2563_63)"/>
            <defs>
              <linearGradient id="paint0_linear_2563_63" x1="25.7805" y1="2.7185" x2="0.000600859" y2="23.2823" gradientUnits="userSpaceOnUse">
                <stop offset="0.200674" stopColor="#B32BF9"/>
                <stop offset="0.600943" stopColor="#6929FD"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="w-6 h-6 lg:hidden ">
          <svg className="w-full h-full " width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="27" height="27" rx="3.5" stroke="#9038FF"/>
            <path d="M4 7H24" stroke="#9038FF" strokeWidth="2"/>
            <path d="M4 14H24" stroke="#9038FF" strokeWidth="2"/>
            <path d="M4 21H24" stroke="#9038FF" strokeWidth="2"/>
          </svg>
        </div>
        <div className="w-fit h-fit hidden lg:flex justify-center items-center gap-16 ">
          {menuItems.map((item) => (
            <div key={item.id} className="w-fit h-fit flex gap-2 justify-center items-center text-2xl text-white font-normal cursor-pointer ">
              {item.icon}
              {item.text}
            </div>
          ))}
          <button className="w-fit h-fit relative flex overflow-hidden rounded-lg lg:rounded-2xl p-0.5 ">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#9038FF_0%,#FF47AA_100%)]" />
            <span className="w-fit h-fit flex items-center justify-center p-1.5 lg:p-3.5 rounded-lg lg:rounded-2xl text-sm lg:text-2xl font-normal text-white  bg-slate-950 hover:bg-[#9038FF] transition-colors  backdrop-blur-3xl cursor-pointer">
              contact us
            </span>
          </button>
          
        </div>
      </div>
    </>
  )
}