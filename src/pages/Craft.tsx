import Main from "../components/craftComponents/Main";

const Craft = () => {
  return (
    <>
      <div className="-z-1 w-full h-full bg-[url(/images/craft-background.png)] bg-cover bg-center">
        <div className="font-bold font-mono pointer-events-none lg:text-9xl md:text-8xl sm:text-6xl xs:text-4xl xxs:text-3xl text-2xl text-cyan-600 flex justify-around w-screen items-center h-screen z-10 relative">
          <span>Creazati</span>
          <span>burgerul</span>
        </div>
      </div>

      <div className="w-full">
        <Main />
      </div>
    </>
  );
};

export default Craft;
