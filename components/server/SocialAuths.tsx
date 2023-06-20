import { FaGoogle, FaApple, FaGithub } from "react-icons/fa";

const SocialAuths: React.FC = () => {
  return (
    <section className="flex items-center justify-center gap-4 text-gray-800">
      <FaGithub size={24} cursor="pointer" />
      <FaApple size={26} cursor="pointer" />
      <FaGoogle size={23} cursor="pointer" />
    </section>
  );
};
export default SocialAuths;
