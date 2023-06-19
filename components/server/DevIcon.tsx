type DevIconProps = {
  gradStart?: string;
  gradEnd?: string;
  xCss?: string;
};

export default function DevIcon({
  gradStart = "#e0e0e0",
  gradEnd = "#bdbdbd",
  xCss,
}: DevIconProps) {
  return (
    <div
      className={`relative my-5 w-14 h-20 bg-gradient-to-br from-[${gradStart}] from-0% to-[${gradEnd}] to-100% text-[#34a297] rounded-[10px] before:content-[''] before:w-full before:h-full before:absolute before:rounded-[inherit] before:bg-blue-400 before:top-0 before:left-0 before:right-0 before:bottom-0 before:m-auto before:rotate-[60deg] before:bg-gradient-to-br before:from-[${gradStart}] before:from-0% before:to-[${gradEnd}] before:to-100% after:content-[''] after:w-full after:h-full after:absolute after:rounded-[inherit] after:bg-blue-300 after:top-0 after:left-0 after:right-0 after:bottom-0 after:m-auto after:-rotate-[60deg] after:bg-gradient-to-br after:from-[${gradStart}] after:from-0% after:to-[${gradEnd}] after:to-100% scale-75 ${xCss}`}
    >
      <div className="w-10 h-10 absolute bg-white z-10 rounded-full top-0 left-0 right-0 bottom-0 m-auto text-center"></div>
    </div>
  );
}
