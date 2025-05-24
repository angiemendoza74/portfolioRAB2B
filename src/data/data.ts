export interface Data {
  title: string
  image: string
  description: string
  link: string
}

export const data: Data[] = [ 
    {
    title: "Artemis Mission",
    image: "./public/images/artemis.webp",
    description: "These accords represent a vital step toward uniting the world in the pursuit of exploration and scientific discovery beyond Earth. NASA is proud to lead in the overall accords effort, advancing the principles as we push the boundaries of human presence in space – for the benefit of all.",
    link: "https://www.nasa.gov/artemis-accords/"
    },
    {
    title: "Dragonfly Mission",
    image: "./public/images/dragonfly.jpg",
    description: "NASA's Dragonfly, a car-sized helicopter scheduled to launch in 2028, will explore the icy world of Saturn's moon Titan to potentially answer one of science's biggest questions: How did life begin?",
    link: "https://science.nasa.gov/mission/dragonfly/"
    },
    {
    title: "Humans in Space",
    image: "./public/images/astronaut.webp",
    description: "For more than two decades, people have lived and worked continuously aboard the International Space Station, advancing scientific knowledge, and making research breakthroughs that are not possible on Earth.",
    link: "https://www.nasa.gov/humans-in-space/"
    }
]