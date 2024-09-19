
const projects = [
  {
    id: '1',
    title: 'strange suns creature',
      
      get bannerImage() {
        return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
      },
      sections: [
        { 
          projectId: '1', // Aquí pasamos el id del proyecto explícitamente
          get image() {
            console.log('Accessing first image for project:', this.projectId);
            return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
          },
          description: 'Initial sketches exploring the character design. We focused on capturing his mischievous personality through expressive shapes features and dynamic poses.'
        },
        { 
          projectId: '1', // Aquí pasamos el id del proyecto explícitamente
          get image() {
            console.log('Accessing first image for project:', this.projectId);
            return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
          },
          description: 'here is some exploration about personalities, other concepts trought the process.'
        },
        { 
          projectId: '1', // Aquí pasamos el id del proyecto explícitamente
          get image() {
            console.log('Accessing first image for project:', this.projectId);
            return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
          },
          description: 'Final rendered artwork of the character, showcasing the completed character design with full color and details.'
        },
      ]
    },
    {
      id: '2',
      title: 'jimmy concept',
        
        get bannerImage() {
          return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
        },
        sections: [
          { 
            projectId: '2', // Aquí pasamos el id del proyecto explícitamente
            get image() {
              console.log('Accessing first image for project:', this.projectId);
              return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
            },
            description: 'Initial sketches exploring Jimmy\'s character design. We focused on capturing his mischievous personality through shapes and dynamic poses.'
          },
          { 
            projectId: '2', // Aquí pasamos el id del proyecto explícitamente
            get image() {
              console.log('Accessing first image for project:', this.projectId);
              return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
            },
            description: 'some movement exploration, trying to discover how the caracter will move.'
          },
          { 
            projectId: '2', // Aquí pasamos el id del proyecto explícitamente
            get image() {
              console.log('Accessing first image for project:', this.projectId);
              return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
            },
            description: 'once the main concept is finish i make some personaliti exploration figuring out how the caracter will see, and act in certain situations'
          },
          { 
            projectId: '2', // Aquí pasamos el id del proyecto explícitamente
            get image() {
              console.log('Accessing first image for project:', this.projectId);
              return `/images/projects/proyect${this.projectId}/${this.projectId}d.jpg`;
            },
            description: 'diferent views for the 3d model'
          },
          { 
            projectId: '2', // Aquí pasamos el id del proyecto explícitamente
            get image() {
              console.log('Accessing first image for project:', this.projectId);
              return `/images/projects/proyect${this.projectId}/${this.projectId}e.jpg`;
            },
            description: 'Final rendered artwork of Jimmy, showcasing the completed character design with full color and details.'
          },
          
        ]
      },
      {
        id: '3',
        title: 'tar monster',
          
          get bannerImage() {
            return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
          },
          sections: [
            { 
              projectId: '3',
              get image() {
                console.log('Accessing first image for project:', this.projectId);
                return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
              },
              description: 'Initial sketches exploring tar monster design. We focused on capturing his mischievous personality through shapes and dynamic poses.'
            },
            { 
              projectId: '3',
              get image() {
                console.log('Accessing first image for project:', this.projectId);
                return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
              },
              description: 'some movement exploration, trying to discover how the caracter will move. and facial designs'
            },
            { 
              projectId: '3', 
              get image() {
                console.log('Accessing first image for project:', this.projectId);
                return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
              },
              description: 'full character design on color'
            },
            { 
              projectId: '3', 
              get image() {
                console.log('Accessing first image for project:', this.projectId);
                return `/images/projects/proyect${this.projectId}/${this.projectId}d.jpg`;
              },
              description: '3d view of the character'
            },
          ]
        },
        {
          id: '4',
          title: 'Firehead character',
            
            get bannerImage() {
              return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
            },
            sections: [
              { 
                projectId: '4',
                get image() {
                  console.log('Accessing first image for project:', this.projectId);
                  return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
                },
                description: 'Initial sketches exploring firehead design. We focused on capturing his mischievous personality through outfits.'
              },
              { 
                projectId: '4',
                get image() {
                  console.log('Accessing first image for project:', this.projectId);
                  return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
                },
                description: 'more designs with open hearth concept'
              },
              { 
                projectId: '4',
                get image() {
                  console.log('Accessing first image for project:', this.projectId);
                  return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
                },
                description: 'some weapon and movement exploration'
              },
              { 
                projectId: '4',
                get image() {
                  console.log('Accessing first image for project:', this.projectId);
                  return `/images/projects/proyect${this.projectId}/${this.projectId}d.jpg`;
                },
                description: 'full design with hearth concept'
              },
              { 
                projectId: '4',
                get image() {
                  console.log('Accessing first image for project:', this.projectId);
                  return `/images/projects/proyect${this.projectId}/${this.projectId}e.jpg`;
                },
                description: '3d views layout'
              },
              { 
                projectId: '4',
                get image() {
                  console.log('Accessing first image for project:', this.projectId);
                  return `/images/projects/proyect${this.projectId}/${this.projectId}f.jpg`;
                },
                description: 'promotional image'
              },
              
            ]
          },
          {
            id: '5',
            title: 'fugitive girl design',
              
              get bannerImage() {
                return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
              },
              sections: [
                { 
                  projectId: '5',
                  get image() {
                    console.log('Accessing first image for project:', this.projectId);
                    return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
                  },
                  description: 'early concepts with diferent outfits and personalities'
                },
                { 
                  projectId: '5',
                  get image() {
                    console.log('Accessing first image for project:', this.projectId);
                    return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
                  },
                  description: 'color exploration for outfit of the character'
                },
                { 
                  projectId: '5',
                  get image() {
                    console.log('Accessing first image for project:', this.projectId);
                    return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
                  },
                  description: 'final design with some action exploration'
                },
                
              ]
            },
            {
              id: '6',
              title: 'vespera world',
                
                get bannerImage() {
                  return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
                },
                sections: [
                  { 
                    projectId: '6',
                    get image() {
                      console.log('Accessing first image for project:', this.projectId);
                      return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
                    },
                    description: 'vespera is a personal project with diferent characters and creatures across this world, this is one of the creatures'
                  },
                  { 
                    projectId: '6',
                    get image() {
                      console.log('Accessing first image for project:', this.projectId);
                      return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
                    },
                    description: 'noroi a magical character raised by a couple of druids, lost his parents at a early age and now is looking to increase his powers for revenge'
                  },
                  { 
                    projectId: '6',
                    get image() {
                      console.log('Accessing first image for project:', this.projectId);
                      return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
                    },
                    description: 'a misterious character with a corrupted background, he comes from another age or another dimension and is placed in this world "by error", but nothing is and error here...'
                  },
                  { 
                    projectId: '6',
                    get image() {
                      console.log('Accessing first image for project:', this.projectId);
                      return `/images/projects/proyect${this.projectId}/${this.projectId}d.jpg`;
                    },
                    description: 'a necromancer very powerfull but willing to make good by any ways neccesary'
                  },
                  
                ]
              },
              {
                id: '7',
                title: 'storytelling artwork',
                  
                  get bannerImage() {
                    return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
                  },
                  sections: [
                    { 
                      projectId: '7',
                      get image() {
                        console.log('Accessing first image for project:', this.projectId);
                        return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
                      },
                      description: 'alice in worderland playing in the woods...'
                    },
                    { 
                      projectId: '7',
                      get image() {
                        console.log('Accessing first image for project:', this.projectId);
                        return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
                      },
                      description: 'game character preparing for an ambush ready to battle with his face mask'
                    },
                    { 
                      projectId: '7',
                      get image() {
                        console.log('Accessing first image for project:', this.projectId);
                        return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
                      },
                      description: 'thieft who takes information from other peoples mind in long travels'
                    },
                    { 
                      projectId: '7',
                      get image() {
                        console.log('Accessing first image for project:', this.projectId);
                        return `/images/projects/proyect${this.projectId}/${this.projectId}d.jpg`;
                      },
                      description: 'same character was abandoned by his parents at a very short age'
                    },
                    { 
                      projectId: '7',
                      get image() {
                        console.log('Accessing first image for project:', this.projectId);
                        return `/images/projects/proyect${this.projectId}/${this.projectId}e.jpg`;
                      },
                      description: 'little nightmares wallpaper'
                    },
                  
                    
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