const CardBoarder = ({ cwidth, cheight }) => {
  const width = cwidth + "px";
  const height = 0.8 * cheight + "px";
  console.log(typeof cwidth);
  return (
    <svg
      style={{ padding: 0, margin: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 80"
      width={width}
      height={height}
    >
      <path
        stroke="url(#a)"
        strokeWidth="1"
        d="M98 15.5117V60c0 9.9411-8.0589 18-18 18H20c-9.9411 0-18-8.0589-18-18V17.2003C2 8.80526 8.80459 2 17.1993 2h17.5485c1.5288 0 2.625 1.4814 2.1669 2.95774-.7531 2.42693.0301 5.06856 1.9844 6.69266l4.3289 3.5976c4.3898 3.6482 10.8043 3.475 14.9907-.4047l3.2803-3.04c1.9813-1.83605 2.4253-4.80013 1.069-7.13615C61.8807 3.48341 62.7348 2 64.1035 2h20.3848C91.9506 2 98 8.04941 98 15.5117Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="-.082919"
          x2="112.02"
          y1=".980927"
          y2="51.049"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#02481C" />
          <stop offset="1" stopColor="#AF0000" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default CardBoarder;
