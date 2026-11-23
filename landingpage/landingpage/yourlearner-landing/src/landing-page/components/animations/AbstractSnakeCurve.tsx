export function AbstractSnakeCurve() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      <svg
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] animate-[spin_60s_linear_infinite]"
      >
        <path
          d="M200 500C200 300 400 200 500 200C600 200 800 300 800 500C800 700 600 800 500 800C400 800 200 700 200 500Z"
          stroke="url(#paint0_linear)"
          strokeWidth="40"
          strokeLinecap="round"
          className="animate-[dash_10s_linear_infinite]"
          strokeDasharray="400 400"
        />
        <path
          d="M300 500C300 400 450 350 500 350C550 350 700 400 700 500C700 600 550 650 500 650C450 650 300 600 300 500Z"
          stroke="url(#paint1_linear)"
          strokeWidth="20"
          strokeLinecap="round"
          className="animate-[dash_8s_linear_infinite_reverse]"
          strokeDasharray="200 200"
        />
        <defs>
          <linearGradient id="paint0_linear" x1="200" y1="200" x2="800" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3776AB" />
            <stop offset="1" stopColor="#3776AB" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear" x1="300" y1="350" x2="700" y2="650" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFD343" />
            <stop offset="1" stopColor="#FFD343" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
