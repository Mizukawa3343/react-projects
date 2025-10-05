import {
  DiAppstore,
  DiAtom,
  DiDebian,
  DiDojo,
  DiGithubFull,
  DiUnitySmall,
} from "react-icons/di";
export default function SponsorsPage() {
  return (
    <section className="md:h-screen">
      <div className="max-w-7xl mx-auto py-20 md:py-40 flex flex-col items-center justify-center text-center gap-10">
        <h2 className="text-3xl mb-4 font-bold md:text-5xl md:mb-6">
          Our Sponsors
        </h2>
        <div className="flex items-center justify-evenly gap-6 md:gap-30 md:hidden">
          <DiAppstore size={50} color="blue" />
          <DiAtom size={50} color="cyan" />
          <DiDebian size={50} color="red" />
          <DiDojo size={50} color="green" />
          <DiGithubFull size={50} color="black" />
          <DiUnitySmall size={50} color="purple" />
        </div>
        <div className="hidden md:flex items-center justify-evenly gap-6 md:gap-30">
          <DiAppstore size={75} color="blue" />
          <DiAtom size={75} color="cyan" />
          <DiDebian size={75} color="red" />
          <DiDojo size={75} color="green" />
          <DiGithubFull size={75} color="black" />
          <DiUnitySmall size={75} color="purple" />
        </div>
      </div>
    </section>
  );
}
