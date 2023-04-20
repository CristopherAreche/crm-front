const LightsSvg = () => {
  return (
    <div>
      <div className="bottom-0 absolute lg:block top-0 left-0 z-10 opacity-70 hidden">
        <svg
          width="783"
          height="388"
          viewBox="0 0 783 388"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_29_36)">
            <rect
              width="478"
              height="366"
              transform="matrix(-1 0 0 1 583 -178)"
              fill="#87D0D0"
              fillOpacity="0.27"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_29_36"
              x="-95"
              y="-378"
              width="878"
              height="766"
              filterUnits="userSpaceOnUse"
              // color-interpolation-filters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_29_36"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="absolute lg:block bottom-0 right-0 z-10 opacity-70 hidden">
        <svg
          width="512"
          height="615"
          viewBox="0 0 512 615"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_59_28)">
            <rect
              width="623"
              height="501"
              transform="matrix(-1 0 0 1 823 200)"
              fill="#7F7FD6"
              fillOpacity="0.2"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_59_28"
              x="0"
              y="0"
              width="1023"
              height="901"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="100"
                result="effect1_foregroundBlur_59_28"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default LightsSvg;
