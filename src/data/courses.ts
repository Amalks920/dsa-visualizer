export interface Course {
    id: string;
    name: string;
    courseList:CourseList[]
  }

  export interface CourseList {
    id: string;
    name: string;
    subSections: CourseSubSection[];
  }
  
  export interface CourseSubSection {
    id: string;
    name: string;
    isCompleted:boolean;
  }
  
  export const arrayCrudSections: CourseList[] = [
    {
      id: 'array_crud',
      name: 'Array CRUD Operations',
      subSections: [
        {
          id: 'add_elements',
          name: 'Add Elements',
          isCompleted: false,
        },
        {
          id: 'delete_elements',
          name: 'Delete Elements',
          isCompleted: false,
        },
      ],
    },
    {
        id:'sorting_algorithms',
        name:"Array Sorting algorithms",
        subSections:[
            {
             id:'insertion_sort',
             name:'insertion sort',
             isCompleted:true
            }

        ]
    }
  ];

  
//   export const sorting_algorithms: Course[] = [
//     {
//       id: 'insertion-sort',
//       name: 'Insertion Sort',
//       isCompleted: true,
//     },
//     {
//       id: 'selection-sort',
//       name: 'Selection Sort',
//       isCompleted: false,
//     },
//     {
//       id: 'bubble-sort',
//       name: 'Bubble Sort',
//       isCompleted: false,
//     },
//     {
//       id: 'quick-sort',
//       name: 'Quick Sort',
//       isCompleted: true,
//     },
//     {
//       id: 'merge-sort',
//       name: 'Merge Sort',
//       isCompleted: false,
//     },  
//   ];
  