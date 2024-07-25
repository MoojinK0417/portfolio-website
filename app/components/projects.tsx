import { CardHoverEffectDemo } from "./card-hover";

export default function Projects() {
  return (
    <div id="projects" className="pt-40 container mx-auto px-14 pb-40">
      <p className="text-slate-600 sm:text-2xl lg:text-2xl lg:leading-normal text-center">
        Browse My Recent
      </p>
      <h2 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold text-center">
        Projects
      </h2>
      <CardHoverEffectDemo />
    </div>
  );
}
