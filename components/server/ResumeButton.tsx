import { FaStar } from "react-icons/fa";

const ResumeButton = () => {
  return (
    <a
      href="https://elvis.js.cool"
      target="_blank"
      role="button"
      className="font-lignt text-xs text-brand-orange border border-brand-orange rounded px-2 py-1 hover:text-white hover:bg-brand-orange transition duration-700 ease-in-out flex items-center justify-center gap-1"
    >
      <FaStar />
      Get Resume`
    </a>
  );
};
export default ResumeButton;
