type Activity = {
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
]
