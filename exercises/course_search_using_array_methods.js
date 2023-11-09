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

console.log("When does the PROG200 course start?");
// for (const course of courses) {
//   if (course.CourseId == "PROG200") {
//     console.log(course.StartDate);
//   }
// }

function isPROG200(course) {
  if (course.CourseId == "PROG200") {
    return true;
  } else {
    return false;
  }
}

// function isPROG200(course) {
//   return course.CourseId == "PROG200";
// }

let foundCourse = courses.find(isPROG200);
console.log(foundCourse.StartDate);

console.log();

console.log("What is the title of the PROJ500 course?");
// for (const course of courses) {
//   if (course.CourseId == "PROJ500") {
//     console.log(course.Title);
//   }
// }

function isPROJ500(course) {
  return course.CourseId == "PROJ500";
}

let foundCourse1 = courses.find(isPROJ500);
console.log(foundCourse1.Title);

console.log();

console.log("What are the titles of the courses that cost $50 or less?");
// for (const course of courses) {
//   if (Number(course.Fee) <= 50) {
//     console.log(course.Title);
//   }
// }

function isFee50OrLess(course) {
  return Number(course.Fee) <= 50;
}

let inexpensiveCourses = courses.filter(isFee50OrLess);
console.log(inexpensiveCourses);


console.log();

console.log('What classes meet in "Classroom 1"?');
// for (const course of courses) {
//   if (course.Location == "Classroom 1") {
//     console.log(course.Title);
//   }
// }

function meetInClassroom1(course) {
  return course.Location == "Classroom 1";
}

let classroom1Courses = courses.filter(meetInClassroom1);
for (const class1Course of classroom1Courses) {
    console.log(class1Course.Title);
}

//
//
//
//
