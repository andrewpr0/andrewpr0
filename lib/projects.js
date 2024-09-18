const projects = [
  {
    id: '1',
    title: 'Jimmy Concept Art',
    bannerImage: '/images/projects/proyect1/banner1.jpg',
    sections: [
      {
        image: '/images/projects/proyect1/1a.jpg',
        description: 'Initial sketches exploring Jimmys character design. We focused on capturing his mischievous personality through expressive facial features and dynamic poses.'
      },
      {
        image: '/images/projects/proyect1/1b.jpg',
        description: 'Color studies for Jimmys final design. We experimented with various color palettes to find the perfect balance that reflects his energetic nature.'
      },
      // Add more sections as needed
    ]
  },
  // Add more projects here
];

export function getAllProjects() {
  return projects;
}

export function getProjectById(id) {
  return projects.find(project => project.id === id);
}