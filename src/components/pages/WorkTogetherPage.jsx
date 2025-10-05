export default function WorkTogetherPage() {
  return (
    <section className="md:h-screen overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-5 md:grid md:grid-cols-2 md:gap-10">
        <div className="flex items-center justify-center p-12">
          <img src="/WorkTogetherImage.png" alt="" />
        </div>
        <div className="relative p-2 flex flex-col items-center justify-center md:items-start md:justify-center ">
          <img
            className="absolute top-[-150px] md:top-0 right-[-30px] rotate-180 opacity-15 object-cover grayscale-75"
            src="/Group2.png"
            alt=""
          />
          <h2 className="text-stone-800 text-4xl font-bold mb-4 text-center md:text-left md:text-6xl">
            Work Together
          </h2>
          <p className="text-center mt-3 text-[16px]/[32px] md:text-lg/[36px] md:text-left">
            With whitespace, share notes with your colleagues and collaborate on
            them. You can also publish notes to the web and share them with a
            link.
          </p>
          <button className="mt-6 py-3 px-12 bg-amber-400 text-stone-800">
            Try it now
          </button>
        </div>
      </div>
    </section>
  );
}
