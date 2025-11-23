type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  demo?: string;
  code?: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  demo,
  code,
}: ProjectCardProps) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-lg">
    <div className="overflow-hidden rounded-xl mb-4 aspect-video bg-[#0f0f0f]">
      <img src={image} alt={title} className="h-full w-full object-cover" />
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="text-sm text-white/70 mt-2 max-w-xl">{description}</p>
    <div className="mt-4 gap-3 flex items-center justify-center">
      {demo && (
        <a
          className="px-4 py-2 rounded-full bg-linear-to-r from-[#FF8660] to-[#9A33FF] text-white text-sm font-semibold hover:scale-[1.02] transition cursor-pointer"
          href={demo}
          target="_blank"
          rel="noreferrer"
        >
          View Live
        </a>
      )}
      {code && (
        <a
          className="px-4 py-2 rounded-full border border-white/40 text-white text-sm font-semibold hover:bg-white hover:text-black transition cursor-pointer"
          href={code}
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
