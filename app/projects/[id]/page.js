import { getProjectById } from '@/lib/projects';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectPage({ params }) {
  const project = getProjectById(params.id);

  if (!project) {
    return <div className="project-not-found">Project not found</div>;
  }

  return (
    <div className="project-container">
      <h1 className="project-title">{project.title}</h1>
      <div className="project-content">
        {project.sections.map((section, index) => (
          <div key={index} className={`project-section ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <div className="image-container">
              <Image src={section.image} alt={`${project.title} - Image ${index + 1}`} width={1200} height={800} layout="responsive" />
            </div>
            <p className="section-description">{section.description}</p>
          </div>
        ))}
      </div>
      <Link href="/" className="back-link">Back to Projects</Link>
    </div>
  );
}