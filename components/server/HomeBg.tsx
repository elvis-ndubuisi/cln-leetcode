const HomeBg: React.FC = () => {
  return (
    <div className="home-background absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <span className="absolute h-[190px] transition-all duration-500 ease-in w-1/3 top-0 -right-[16%] bg-[#2e2e2e]"></span>
      <span className="absolute h-[190px] transition-all duration-500 ease-in w-1/3 right-[49%] bottom-auto left-auto bg-[#222222]"></span>
      <span className="absolute h-[190px] transition-all duration-500 ease-in w-1/3 top-[380px] -left-[16%] bg-[#383d44]"></span>
      <span className="absolute h-[190px] transition-all duration-500 ease-in w-1/3 right-0 bottom-0 bg-[#2e2e2e]"></span>
    </div>
  );
};
export default HomeBg;
