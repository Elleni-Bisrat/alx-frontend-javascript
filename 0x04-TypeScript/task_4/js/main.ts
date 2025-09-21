/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import CppClass = Subjects.Cpp;
import JavaClass = Subjects.Java;
import ReactClass = Subjects.React;
import TeacherInterface = Subjects.Teacher;

// Create and export the constants
export const cpp = new CppClass();
export const java = new JavaClass();
export const react = new ReactClass();

// Create a Teacher object with experienceTeachingC = 10
export const cTeacher: TeacherInterface = {
  firstName: "Guillaume",
  lastName: "Salva",
  experienceTeachingC: 10
};

// Cpp Subject
console.log("C++");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java Subject
console.log("Java");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React Subject
console.log("React");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
