let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "49.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// let coursesInClassroom1 = [];

// //find many
// for (const course of courses) {
//   if (course.Location == "Classroom 1") {
//     coursesInClassroom1.push(course);
//   }
// }

// console.log(coursesInClassroom1);

// function isCourseInClassroom1(course) {
//   if (course.Location == "Classroom 1") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isCourseInClassroom1(course) {
//   return course.Location == "Classroom 1";
// }

// let coursesInClassroom1 = courses.filter(isCourseInClassroom1);
// console.log(coursesInClassroom1);

//my own function
function filter(fnToCall) {
  let coursesThatMatch = [];
  for (const course of courses) {
    let result = fnToCall(course);
    if (result == true) {
      coursesThatMatch.push(course);
    }
  }
  return coursesThatMatch;
}

let coursesInClassroom1 = courses.filter((course) => course.Location == "Classroom 1");
