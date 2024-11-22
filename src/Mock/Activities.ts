export type Activity = {
  id: string
  name: string
  description: string
  exerciseId: string
  final: boolean
  studentIds: string[]
  from: Date
  to: Date
}

export const activitiesMock: Activity[] = [
  {
    id: "1",
    name: "Monday Morning Lession",
    description:
      "Small exercise on monday morning to see if they got the basics.",
    exerciseId: "1",
    final: false,
    studentIds: ["12", "13", "14", "15", "16"],
    from: new Date("1.1.2020"),
    to: new Date("1.12.2025"),
  },
  {
    id: "2",
    name: "Advanced Java Training",
    description:
      "In-depth training on Java focusing on multithreading and advanced topics.",
    exerciseId: "2",
    final: false,
    studentIds: ["14", "15", "17", "18", "19"],
    from: new Date("2021-03-15"),
    to: new Date("2022-11-30"),
  },
  {
    id: "3",
    name: "C Basics Crash Course",
    description: "A crash course on C basics to prepare for upcoming exams.",
    exerciseId: "3",
    final: true,
    studentIds: ["12", "13", "18", "20"],
    from: new Date("2021-06-01"),
    to: new Date("2023-06-01"),
  },
  {
    id: "4",
    name: "Introduction to GoLang",
    description:
      "Hands-on exercises to introduce GoLang syntax and its key features.",
    exerciseId: "4",
    final: false,
    studentIds: ["13", "14", "15", "17"],
    from: new Date("2020-09-01"),
    to: new Date("2023-09-01"),
  },
  {
    id: "5",
    name: "LaTeX for Beginners",
    description: "Learning LaTeX for creating professional documents.",
    exerciseId: "5",
    final: true,
    studentIds: ["16", "17", "18", "19"],
    from: new Date("2022-01-01"),
    to: new Date("2025-01-01"),
  },
  {
    id: "6",
    name: "C Programming Basics",
    description:
      "Weekly exercise to solidify knowledge of C programming basics.",
    exerciseId: "6",
    final: false,
    studentIds: ["12", "14", "15", "16", "18"],
    from: new Date("2020-02-01"),
    to: new Date("2024-12-31"),
  },
  {
    id: "7",
    name: "C Advanced Topics",
    description:
      "Deep dive into pointers, memory management, and advanced C programming.",
    exerciseId: "7",
    final: true,
    studentIds: ["13", "15", "18", "20"],
    from: new Date("2021-05-01"),
    to: new Date("2024-10-31"),
  },
  {
    id: "8",
    name: "Compiler Architecture",
    description:
      "Exploring the fundamentals of compiler design and architecture.",
    exerciseId: "8",
    final: false,
    studentIds: ["14", "16", "17", "19", "20"],
    from: new Date("2022-01-15"),
    to: new Date("2023-12-15"),
  },
  {
    id: "9",
    name: "Python Basics Evening Class",
    description: "Python basics taught in an evening class.",
    exerciseId: "9",
    final: false,
    studentIds: ["12", "13", "15", "19"],
    from: new Date("2021-08-01"),
    to: new Date("2025-06-30"),
  },
  {
    id: "10",
    name: "Haskell for Beginners",
    description:
      "An introduction to Haskell's unique approach to functional programming.",
    exerciseId: "13",
    final: true,
    studentIds: ["16", "17", "18", "20"],
    from: new Date("2022-02-01"),
    to: new Date("2024-02-01"),
  },
  {
    id: "11",
    name: "AI Basics Workshop",
    description:
      "Workshop to learn basic concepts and practical applications of AI.",
    exerciseId: "20",
    final: true,
    studentIds: ["12", "13", "14", "15", "16"],
    from: new Date("2023-01-01"),
    to: new Date("2024-12-31"),
  },
  {
    id: "12",
    name: "Scala Data Science Workshop",
    description: "Using Scala for handling and analyzing large datasets.",
    exerciseId: "22",
    final: false,
    studentIds: ["15", "16", "17", "18", "20"],
    from: new Date("2021-11-01"),
    to: new Date("2023-11-01"),
  },
  {
    id: "13",
    name: "React Basics Lab",
    description:
      "Hands-on lab for building React components and working with state.",
    exerciseId: "16",
    final: false,
    studentIds: ["12", "13", "17", "18", "19"],
    from: new Date("2020-07-15"),
    to: new Date("2025-07-15"),
  },
  {
    id: "14",
    name: "Rust Beginner Course",
    description:
      "Introduction to Rust programming for system-level programming enthusiasts.",
    exerciseId: "12",
    final: true,
    studentIds: ["14", "15", "17", "19"],
    from: new Date("2022-09-01"),
    to: new Date("2024-08-31"),
  },
  {
    id: "15",
    name: "PHP Crash Course",
    description: "Quick and dirty PHP crash course.",
    exerciseId: "21",
    final: false,
    studentIds: ["13", "16", "17", "18"],
    from: new Date("2021-05-15"),
    to: new Date("2023-05-15"),
  },
]
