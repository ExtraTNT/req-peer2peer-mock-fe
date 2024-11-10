type Student = {
  name: string
  firstName: string
  id: string
  modules: { id: string; grade: number[]; final: boolean }[]
}

export const students: Student[] = [
  {
    name: "Muster",
    firstName: "Max",
    id: "12",
    modules: [
      { id: "1", grade: [74, 45, 65], final: false },
      { id: "2", grade: [86, 76], final: false },
      { id: "3", grade: [96, 78], final: true },
      { id: "4", grade: [82, 99], final: true },
    ],
  },
  {
    name: "Doe",
    firstName: "Jane",
    id: "13",
    modules: [
      { id: "1", grade: [45, 58, 62], final: false },
      { id: "2", grade: [54, 50], final: false },
      { id: "3", grade: [79, 68], final: true },
      { id: "4", grade: [48, 57], final: true },
    ],
  },
  {
    name: "Smith",
    firstName: "John",
    id: "14",
    modules: [
      { id: "1", grade: [88, 91, 79], final: false },
      { id: "2", grade: [64, 72], final: false },
      { id: "3", grade: [52, 59], final: true },
      { id: "4", grade: [73, 80], final: true },
    ],
  },
  {
    name: "Brown",
    firstName: "Sarah",
    id: "15",
    modules: [
      { id: "1", grade: [67, 62, 74], final: false },
      { id: "2", grade: [78, 84], final: false },
      { id: "3", grade: [85, 91], final: true },
      { id: "4", grade: [52, 59], final: true },
    ],
  },
  {
    name: "Lee",
    firstName: "Michael",
    id: "16",
    modules: [
      { id: "1", grade: [71, 65, 78], final: false },
      { id: "2", grade: [49, 53], final: false },
      { id: "3", grade: [82, 88], final: true },
      { id: "4", grade: [47, 56], final: true },
    ],
  },
  {
    name: "Garcia",
    firstName: "Emily",
    id: "17",
    modules: [
      { id: "1", grade: [81, 73, 78], final: false },
      { id: "2", grade: [94, 89], final: false },
      { id: "3", grade: [55, 63], final: true },
      { id: "4", grade: [92, 95], final: true },
    ],
  },
]
