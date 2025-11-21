type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  demo: string;
  code: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  demo,
  code,
}: ProjectCardProps) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 shadow-lg">
    <div className="overflow-hidden roudned-xl mb-4 aspect-video bg-[#0f0f0f]"></div>
  </div>
);

export default ProjectCard;
