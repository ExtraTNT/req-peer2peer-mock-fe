type Student = {
  name: string
  firstName: string
  id: string
  exercises: { id: string; grade: number[]; final: boolean }[]
}

export const students: Student[] = [
  {
    name: "Muster",
    firstName: "Max",
    id: "12",
    exercises: [
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
    exercises: [
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
    exercises: [
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
    exercises: [
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
    exercises: [
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
    exercises: [
      { id: "1", grade: [81, 73, 78], final: false },
      { id: "2", grade: [94, 89], final: false },
      { id: "3", grade: [55, 63], final: true },
      { id: "4", grade: [92, 95], final: true },
    ],
  },
  {
    name: "Late",
    firstName: "Greg",
    id: "18",
    exercises: [
      { id: "1", grade: [99, 99, 99], final: false },
      { id: "2", grade: [94, 89], final: false },
      { id: "4", grade: [99, 95], final: true },
    ],
  },
  {
    name: "Walker",
    firstName: "Laura",
    id: "19",
    exercises: [
      { id: "1", grade: [55, 40, 60], final: false },
      { id: "2", grade: [50, 55], final: false },
      { id: "3", grade: [70, 60], final: true },
      { id: "4", grade: [75, 80], final: true },
    ],
  },
  {
    name: "Green",
    firstName: "Paul",
    id: "20",
    exercises: [
      { id: "1", grade: [90, 95, 92], final: false },
      { id: "2", grade: [88, 84], final: false },
      { id: "4", grade: [100, 95], final: true },
    ],
  },
  {
    name: "Hall",
    firstName: "Daisy",
    id: "21",
    exercises: [
      { id: "1", grade: [58, 67, 64], final: false },
      { id: "3", grade: [72, 70], final: true },
      { id: "4", grade: [45, 50], final: true },
    ],
  },
  {
    name: "Perez",
    firstName: "Carlos",
    id: "22",
    exercises: [
      { id: "2", grade: [77, 82], final: false },
      { id: "3", grade: [90, 85], final: true },
      { id: "4", grade: [60, 75], final: true },
    ],
  },
  {
    name: "Martin",
    firstName: "Sophie",
    id: "23",
    exercises: [
      { id: "1", grade: [95, 93, 98], final: false },
      { id: "3", grade: [100, 100], final: true },
    ],
  },
  {
    name: "Jackson",
    firstName: "Tom",
    id: "24",
    exercises: [
      { id: "1", grade: [52, 57, 59], final: false },
      { id: "2", grade: [65, 60], final: false },
      { id: "3", grade: [75, 80], final: true },
      { id: "4", grade: [42, 48], final: true },
    ],
  },
  {
    name: "Young",
    firstName: "Annie",
    id: "25",
    exercises: [
      { id: "1", grade: [85, 82, 87], final: false },
      { id: "2", grade: [88, 91], final: false },
      { id: "4", grade: [94, 96], final: true },
    ],
  },
  {
    name: "Adams",
    firstName: "Rick",
    id: "26",
    exercises: [
      { id: "2", grade: [45, 48], final: false },
      { id: "3", grade: [55, 52], final: true },
    ],
  },
  {
    name: "Nelson",
    firstName: "Olivia",
    id: "27",
    exercises: [
      { id: "1", grade: [78, 75, 82], final: false },
      { id: "3", grade: [85, 90], final: true },
    ],
  },
  {
    name: "Carter",
    firstName: "Sam",
    id: "28",
    exercises: [
      { id: "1", grade: [60, 65, 58], final: false },
      { id: "2", grade: [72, 68], final: false },
      { id: "3", grade: [79, 76], final: true },
    ],
  },
  {
    name: "Roberts",
    firstName: "Jill",
    id: "29",
    exercises: [
      { id: "1", grade: [40, 42, 38], final: false },
      { id: "2", grade: [30, 35], final: false },
      { id: "3", grade: [55, 50], final: true },
      { id: "4", grade: [60, 65], final: true },
    ],
  },
  {
    name: "Garcia",
    firstName: "Mario",
    id: "30",
    exercises: [
      { id: "1", grade: [95, 97, 92], final: false },
      { id: "2", grade: [85, 88], final: false },
    ],
  },
  {
    name: "Lee",
    firstName: "Sophia",
    id: "31",
    exercises: [
      { id: "1", grade: [68, 72, 70], final: false },
      { id: "3", grade: [85, 88], final: true },
      { id: "4", grade: [92, 94], final: true },
    ],
  },
  {
    name: "Reed",
    firstName: "Oscar",
    id: "32",
    exercises: [
      { id: "2", grade: [48, 50], final: false },
      { id: "3", grade: [65, 70], final: true },
      { id: "4", grade: [58, 62], final: true },
    ],
  },
  {
    name: "Griffin",
    firstName: "Ava",
    id: "33",
    exercises: [
      { id: "1", grade: [72, 70, 68], final: false },
      { id: "2", grade: [78, 80], final: false },
      { id: "3", grade: [82, 84], final: true },
    ],
  },
  {
    name: "Anderson",
    firstName: "Ben",
    id: "34",
    exercises: [
      { id: "1", grade: [88, 90, 85], final: false },
      { id: "2", grade: [82, 80], final: false },
      { id: "4", grade: [90, 93], final: true },
    ],
  },
]
