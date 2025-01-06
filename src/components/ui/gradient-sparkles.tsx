const GradientSparkles = () => {
    return (
      <svg 
        version="1.1" 
        id="Layer_1" 
        xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 792 612"
        style={{
            width: '100%',
            height: '100%'
        }}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient
            id="sparkleGradient1"
            gradientUnits="userSpaceOnUse"
            x1="26.0935"
            y1="594.0449"
            x2="26.9747"
            y2="593.1638"
            gradientTransform="matrix(16.6667 0 0 -15 7.6667 9196)"
          >
            <stop offset="0" stopColor="#000000" />
            <stop offset="0.33" stopColor="#000000" />
            <stop offset="0.42" stopColor="#000000" />
            <stop offset="0.58" stopColor="#000000" />
            <stop offset="0.7" stopColor="#000000" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
  
          <linearGradient
            id="sparkleGradient2"
            gradientUnits="userSpaceOnUse"
            x1="24.605"
            y1="593.7811"
            x2="26.8018"
            y2="591.5844"
            gradientTransform="matrix(16.6667 0 0 -15 7.6667 9196)"
          >
            <stop offset="0" stopColor="#000000" />
            <stop offset="0.33" stopColor="#000000" />
            <stop offset="0.42" stopColor="#000000" />
            <stop offset="0.58" stopColor="#000000" />
            <stop offset="0.7" stopColor="#000000" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
  
          <linearGradient
            id="sparkleGradient3"
            gradientUnits="userSpaceOnUse"
            x1="24.4322"
            y1="592.2017"
            x2="25.3134"
            y2="591.3206"
            gradientTransform="matrix(16.6667 0 0 -15 7.6667 9196)"
          >
            <stop offset="0" stopColor="#000000" />
            <stop offset="0.33" stopColor="#000000" />
            <stop offset="0.42" stopColor="#000000" />
            <stop offset="0.58" stopColor="#000000" />
            <stop offset="0.7" stopColor="#000000" />
            <stop offset="1" stopColor="#000000" />
          </linearGradient>
        </defs>
  
        <g>
          <path
            fill="url(#sparkleGradient1)"
            d="M450.59,286.04l1.67,3.9c0.09,0.21,0.27,0.36,0.48,0.43l2.97,0.85c0.72,0.21,0.72,1.23,0,1.44l-2.97,0.85 c-0.22,0.06-0.39,0.22-0.48,0.43l-1.67,3.9c-0.26,0.61-1.12,0.61-1.38,0l-1.67-3.9c-0.09-0.21-0.27-0.36-0.48-0.43l-2.97-0.85 c-0.72-0.21-0.72-1.23,0-1.44l2.97-0.85c0.22-0.06,0.39-0.22,0.48-0.43l1.67-3.9C449.47,285.44,450.33,285.44,450.59,286.04z"
          >
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
  
          <path
            fill="url(#sparkleGradient2)"
            d="M437.77,291.07l4.17,9.72c0.22,0.52,0.66,0.91,1.2,1.06l7.4,2.12c1.81,0.52,1.81,3.08,0,3.59l-7.4,2.12 c-0.54,0.15-0.98,0.54-1.2,1.06l-4.17,9.72c-0.65,1.51-2.79,1.51-3.43,0l-4.17-9.72c-0.22-0.52-0.66-0.91-1.2-1.06l-7.4-2.12 c-1.81-0.52-1.81-3.08,0-3.59l7.4-2.12c0.54-0.15,0.98-0.54,1.2-1.06l4.17-9.72C434.99,289.56,437.13,289.56,437.77,291.07z"
          >
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
  
          <path
            fill="url(#sparkleGradient3)"
            d="M422.9,313.69l1.67,3.9c0.09,0.21,0.27,0.36,0.48,0.43l2.97,0.85c0.72,0.21,0.72,1.23,0,1.44l-2.97,0.85 c-0.22,0.06-0.39,0.22-0.48,0.43l-1.67,3.9c-0.26,0.61-1.12,0.61-1.38,0l-1.67-3.9c-0.09-0.21-0.27-0.36-0.48-0.43l-2.97-0.85 c-0.72-0.21-0.72-1.23,0-1.44l2.97-0.85c0.22-0.06,0.39-0.22,0.48-0.43l1.67-3.9C421.78,313.08,422.64,313.08,422.9,313.69z"
          >
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    );
  };

export default GradientSparkles;

// import like this:
// import GradientSparkles from "@/components/ui/gradient-sparkles";
// Its really bad right now