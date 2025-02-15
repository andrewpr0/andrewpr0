
const projects = [
  {
    id: '13',
    title: 'Kaeli concept art',
    category: 'concept-art',
      
      get bannerImage() {
        return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
      },
      sections: [
        { 
          projectId: '13', // Aquí pasamos el id del proyecto explícitamente
          get image() {
            console.log('Accessing first image for project:', this.projectId);
            return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
          },
          description: 'Initial sketches exploring the character design. We focused on capturing his mischievous personality through expressive shapes features and dynamic poses.'
        },
        { 
          projectId: '13', // Aquí pasamos el id del proyecto explícitamente
          get image() {
            console.log('Accessing first image for project:', this.projectId);
            return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
          },
          description: 'here is some exploration about personalities, other concepts trought the process.'
        },
        { 
          projectId: '13', // Aquí pasamos el id del proyecto explícitamente
          get image() {
            console.log('Accessing first image for project:', this.projectId);
            return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
          },
          description: 'Final rendered artwork of the character, showcasing the completed character design with full color and details.'
        },
        { 
          projectId: '13', // Aquí pasamos el id del proyecto explícitamente
          get image() {
            console.log('Accessing first image for project:', this.projectId);
            return `/images/projects/proyect${this.projectId}/${this.projectId}d.jpg`;
          },
          description: 'Final details.'
        },
      ]
    },
  {
    id: '1',
    title: 'strange suns creature',
    category: 'concept-art',
      
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
        { 
          projectId: '1', // Aquí pasamos el id del proyecto explícitamente
          get image() {
            console.log('Accessing first image for project:', this.projectId);
            return `/images/projects/proyect${this.projectId}/${this.projectId}d.jpg`;
          },
          description: 'Final details.'
        },
      ]
    },
    {
      id: '2',
      title: 'jimmy concept',
      category: 'concept-art',
        
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
          { 
            projectId: '2', // Aquí pasamos el id del proyecto explícitamente
            get image() {
              console.log('Accessing first image for project:', this.projectId);
              return `/images/projects/proyect${this.projectId}/${this.projectId}f.jpg`;
            },
            description: 'Final 3d model rendered with no textures, showcasing the completed character design with full details.'
          },
          
        ]
      },
      {
        id: '3',
        title: 'tar monster',
        category: 'concept-art',
          
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
          category: 'concept-art',
            
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
            category: 'concept-art',
              
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
              category: 'concept-art',
                
                get bannerImage() {
                  return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
                },
                sections: [
                  { 
                    projectId: '6',
                    get image() {
                      console.log('Accessing first image for project:', this.projectId);
                      return `/images/projects/proyect${this.projectId}/banner${this.projectId}.jpg`;
                    },
                    description: 'vespera is a personal project with diferent characters and creatures across this world, this is one of the creatures'
                  },
                  { 
                    projectId: '6',
                    get image() {
                      console.log('Accessing first image for project:', this.projectId);
                      return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
                    },
                    description: 'noroi a magical character raised by a couple of druids, lost his parents at a early age and now is looking to increase his powers for revenge'
                  },
                  { 
                    projectId: '6',
                    get image() {
                      console.log('Accessing first image for project:', this.projectId);
                      return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
                    },
                    description: 'a misterious character with a corrupted background, he comes from another age or another dimension and is placed in this world "by error", but nothing is and error here...'
                  },
                  { 
                    projectId: '6',
                    get image() {
                      console.log('Accessing first image for project:', this.projectId);
                      return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
                    },
                    description: 'a necromancer very powerfull but willing to make good by any ways neccesary'
                  },
                  
                ]
              },
              {
                id: '7',
                title: 'storytelling artwork',
                category: 'concept-art',
                  
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

                {
                  id: '8',
                  title: '3d pet dino characters',
                  category: '3d-art',
                    
                    get bannerImage() {
                      return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
                    },
                    sections: [
                      { 
                        projectId: '8',
                        get image() {
                          console.log('Accessing first image for project:', this.projectId);
                          return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
                        },
                        description: 'this was the sketches of the characters i amde for the client, he wants a dino world to help him tell the story fo their products'
                      },
                      { 
                        projectId: '8',
                        get image() {
                          console.log('Accessing first image for project:', this.projectId);
                          return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
                        },
                        description: 'this is the main dino pet, rex, and was the first one appearing on the brand'
                      },
                      { 
                        projectId: '8',
                        get image() {
                          console.log('Accessing first image for project:', this.projectId);
                          return `/images/projects/proyect${this.projectId}/banner${this.projectId}.jpg`;
                        },
                        description: 'the rest of them come later, in total there are 5, a velociraptor, a trex, an ankylosaurus, pterodactile and a triceratops'
                      },
                      { 
                        projectId: '8',
                        get image() {
                          console.log('Accessing first image for project:', this.projectId);
                          return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
                        },
                        description: 'ptero and all the diferent ones'
                      },
                      { 
                        projectId: '8',
                        get image() {
                          console.log('Accessing first image for project:', this.projectId);
                          return `/images/projects/proyect${this.projectId}/${this.projectId}d.jpg`;
                        },
                        description: 'we use them to tell the story and the lore of the brand'
                      },
                    
                      
                    ]
                  },

                  {
                    id: '9',
                    title: '3d car design',
                    category: '3d-art',
                      
                      get bannerImage() {
                        return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
                      },
                      sections: [
                        { 
                          projectId: '9',
                          get image() {
                            console.log('Accessing first image for project:', this.projectId);
                            return `/images/projects/proyect${this.projectId}/banner${this.projectId}.jpg`;
                          },
                          description: 'this was a design made for a brand wich they want to showcase a car with wraping labes around of their whole brand'
                        },
                        { 
                          projectId: '9',
                          get image() {
                            console.log('Accessing first image for project:', this.projectId);
                            return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
                          },
                          description: 'side view'
                        },
                        { 
                          projectId: '9',
                          get image() {
                            console.log('Accessing first image for project:', this.projectId);
                            return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
                          },
                          description: 'back view'
                        },
                        { 
                          projectId: '9',
                          get image() {
                            console.log('Accessing first image for project:', this.projectId);
                            return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
                          },
                          description: 'back view'
                        },
                        
                      
                        
                      ]
                    },

                    {
                      id: '10',
                      title: 'card illustrations',
                      category: 'concept-art',
                        
                        get bannerImage() {
                          return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
                        },
                        sections: [
                          { 
                            projectId: '10',
                            get image() {
                              console.log('Accessing first image for project:', this.projectId);
                              return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
                            },
                            description: 'Wu Xing card game. around 20+ illustration made for this game'
                          },
                          { 
                            projectId: '10',
                            get image() {
                              console.log('Accessing first image for project:', this.projectId);
                              return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
                            },
                            description: 'Crackasaurus card game. around 10+ illustration made for this game'
                          },
                          { 
                            projectId: '10',
                            get image() {
                              console.log('Accessing first image for project:', this.projectId);
                              return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
                            },
                            description: 'Enter The Sphere card game season 1. around 70+ illustration made for this game'
                          },
                          { 
                            projectId: '10',
                            get image() {
                              console.log('Accessing first image for project:', this.projectId);
                              return `/images/projects/proyect${this.projectId}/${this.projectId}d.jpg`;
                            },
                            description: 'Enter The Sphere card game season 2. around 50+ illustration made for this game'
                          },
                          
                        
                          
                        ]
                      },
                      {
                        id: '11',
                        title: 'UI Game design',
                        category: 'concept-art',
                          
                          get bannerImage() {
                            return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
                          },
                          sections: [
                            { 
                              projectId: '11',
                              get image() {
                                console.log('Accessing first image for project:', this.projectId);
                                return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
                              },
                              description: 'card illustrations for Wu Xingo trade card game, game was about dragons, monks, and traditional chinese concepts'
                            },
                            { 
                              projectId: '11',
                              get image() {
                                console.log('Accessing first image for project:', this.projectId);
                                return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
                              },
                              description: 'card illustrations for Crackasaurus app game, whole concept was about tech dinosaurs and jurassic accesories'
                            },
                            { 
                              projectId: '11',
                              get image() {
                                console.log('Accessing first image for project:', this.projectId);
                                return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
                              },
                              description: 'card illustrations for enter the sphere card game, concept was about futuristic distopian world with 3 races'
                            },
                            { 
                              projectId: '11',
                              get image() {
                                console.log('Accessing first image for project:', this.projectId);
                                return `/images/projects/proyect${this.projectId}/${this.projectId}d.jpg`;
                              },
                              description: 'more card illustrations for enter the sphere card game'
                            },
                            
                          
                            
                          ]
                        },
                        {
                          id: '12',
                          title: 'UI Game design',
                          category: 'concept-art',
                            
                            get bannerImage() {
                              return `/images/projects/proyect${this.id}/banner${this.id}.jpg`;
                            },
                            sections: [
                              { 
                                projectId: '12',
                                get image() {
                                  console.log('Accessing first image for project:', this.projectId);
                                  return `/images/projects/proyect${this.projectId}/${this.projectId}a.jpg`;
                                },
                                description: 'I was entrusted with designing the entire user interface for this financial learning app. The goal was to make it visually appealing for children by incorporating vibrant colors and ensuring the characters unique personalities were reflected in the icons, frames, and overall design.'
                              },
                              { 
                                projectId: '12',
                                get image() {
                                  console.log('Accessing first image for project:', this.projectId);
                                  return `/images/projects/proyect${this.projectId}/${this.projectId}b.jpg`;
                                },
                                description: 'The overall layout of the game was predetermined by the client. My role was to design the various frames and UI elements, carefully tailoring them to the client’s guidelines and specific requirements, while maintaining a cohesive and engaging visual style.'
                              },
                              { 
                                projectId: '12',
                                get image() {
                                  console.log('Accessing first image for project:', this.projectId);
                                  return `/images/projects/proyect${this.projectId}/${this.projectId}c.jpg`;
                                },
                                description: 'These are the main characters of the game, each playing a key role in the user’s journey. Every character was created entirely from scratch, from concept to final design, ensuring they were not only memorable but also perfectly aligned with the educational goals of the game.'
                              },
                              { 
                                projectId: '12',
                                get image() {
                                  console.log('Accessing first image for project:', this.projectId);
                                  return `/images/projects/proyect${this.projectId}/${this.projectId}e.jpg`;
                                },
                                description: 'The map posed one of the most exciting challenges of the project. I was tasked with creating a dynamic map where users navigate a city filled with obstacles and decision-making moments. The objective was to visually communicate the journey toward financial independence. The process involved a mix of rough sketches, 3D concepts, and detailed coloring to achieve a polished isometric effect.'
                              },
                              { 
                                projectId: '12',
                                get image() {
                                  console.log('Accessing first image for project:', this.projectId);
                                  return `/images/projects/proyect${this.projectId}/${this.projectId}f.jpg`;
                                },
                                description: 'I also designed various in-game icons to visually represent different events and situations. Each icon was carefully crafted to enhance the player’s understanding and connection to the gameplay mechanics. Below are examples showcasing some of these designs.'
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