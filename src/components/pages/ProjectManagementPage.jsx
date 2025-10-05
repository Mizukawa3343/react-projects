export default function ProjectManagementPage() {
  return (
    <section className="md:h-screen" id="about">
      <div className="relative max-w-7xl py-20 p-2 md:grid md:grid-cols-2 md:gap-10 mx-auto">
        <img
          className="absolute top-30 left-[-40px] z-[-1] opacity-25"
          src="/Group.png"
          alt=""
        />
        <div className="md:pt-20">
          <h1 className="text-xl font-bold mb-4 md:text-5xl">
            Project Management
          </h1>
          <p className="text-[16px]/[32px] md:text-lg/[36px]">
            Images, views, PDFs and audio files are supported. Create math
            expression and diagrams directly from the app. Take photos with the
            mobile app and save them to a note
          </p>
        </div>
        <div className="flex items-center justify-center p-10">
          <img src="/CodingAWebsite.png" alt="" />
        </div>
      </div>
    </section>
  );
}
