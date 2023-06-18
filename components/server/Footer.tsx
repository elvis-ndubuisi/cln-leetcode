const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl mx-auto px-2 flex items-center justify-center sm:justify-between h-14">
        <small className="text-stone-600">
          Cloned Project © 2023 LeetCode - Elvis Ndubuisi
        </small>
        <section className="hidden sm:flex items-center gap-4">
          <a href="">portfolio</a>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
