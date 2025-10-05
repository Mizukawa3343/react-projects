export default function LandingPage() {
  return (
    <section className="relative bg-stone-900 pt-10 pb-20  md:pt-0 md:pb-0">
      <img
        className="absolute top-50  md:top-20 opacity-50 object-cover"
        src="/BackgroundElement.png"
        alt=""
      />
      <div className="max-w-7xl mx-auto flex items-center justify-center flex-col text-white md:grid md:grid-cols-2 md:h-screen  md:items-start ">
        <div className="p-6 text-center md:text-left ">
          <h1 className="text-4xl/10 font-bold mb-6 md:text-6xl/20  md:w-lg md:mt-12">
            Get more done with whitespace
          </h1>
          <p className="text-lg/8 px-12 mb-6 md:px-0">
            Project management software that enables your teams to collaborate
            plan, analyze and manage everyday task.
          </p>
          <button className="bg-amber-400 text-stone-900 py-5 px-16 md:mt-6">
            Try Taskey Free
          </button>
        </div>
        <div className="flex items-center justify-center p-6">
          <img
            className="w-xs h-xs  md:w-xl md:h-xl"
            src="/AnalyzeData.png"
            alt="landing image"
          />
        </div>
      </div>
    </section>
  );
}
