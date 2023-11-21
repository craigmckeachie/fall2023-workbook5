"use strict";

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
    Fee: "49.99",
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

console.log("When does the PROG200 course start?");
// for (const course of courses) {
//   if (course.CourseId == "PROG200") {
//     console.log(course.StartDate);
//   }
// }

const prog200Course = courses.find((course) => course.CourseId == "PROG200");
console.log(prog200Course.StartDate);

console.log();

console.log("What is the title of the PROJ500 course?");
// for (const course of courses) {
//   if (course.CourseId == "PROJ500") {
//     console.log(course.Title);
//   }
// }

const proj500Course = courses.find((course) => course.CourseId == "PROJ500");
console.log(proj500Course.Title);

console.log();

console.log("What are the titles of the courses that cost $50 or less?");
// for (const course of courses) {
//   if (Number(course.Fee) <= 50) {
//     console.log(course.Title);
//   }
// }

const cheapCourses = courses.filter((course) => Number(course.Fee) <= 50);
cheapCourses.forEach((course) => console.log(course.Title));

console.log();

console.log('What classes meet in "Classroom 1"?');
// for (const course of courses) {
//   if (course.Location == "Classroom 1") {
//     console.log(course.Title);
//   }
// }

const coursesInClassroom1 = courses.filter(course => course.Location == "Classroom 1")
coursesInClassroom1.forEach(course => console.log(course.Title));
