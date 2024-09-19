import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '../lib/projects';

export default function Projectgrid() {
    const projects = getAllProjects();

    return (
        <div className="projects-grid">
            {projects.map((project) => (
                <Link href={`/projects/${project.id}`} key={project.id} className="project-item">
                    <Image src={project.bannerImage} alt={project.title} width={1920} height={1080} />
                    <div className="project-info">
                        <h3>{project.title}</h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}