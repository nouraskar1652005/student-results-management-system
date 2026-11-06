// 1. Student Class
class Student {
    constructor(id, name, grades, attendance) {
        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;
    }

    // 2. Calculate Average using reduce
    calculateAverage() {
        let total = this.grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.grades.length;
    }

    // 3. Calculate Grade
    getGrade(average) {
        if (average >= 90) {
            return "A";
        } else if (average >= 80) {
            return "B";
        } else if (average >= 70) {
            return "C";
        } else if (average >= 60) {
            return "D";
        } else if (average >= 50) {
            return "E";
        } else {
            return "F";
        }
    }

    // 4. Final Result
    getResult(average) {
        if (average >= 50 && this.attendance >= 75) {
            return "ناجح";
        } else {
            return "يحتاج مراجعة";
        }
    }
}

// 5. Students List
let studentsList = [
    new Student(101, "Ahmed", [90, 85, 95], 95),
    new Student(102, "Mona", [45, 48, 42], 80),
    new Student(103, "Omar", [40, 45, 47], 85),
    new Student(104, "Sara", [70, 75, 80], 90)
];

// 6. Print Each Student Report
console.log("===== Students Reports =====");

studentsList.forEach(student => {
    let average = student.calculateAverage();

    console.log("Name:", student.name);
    console.log("Average:", average.toFixed(2));
    console.log("Grade:", student.getGrade(average));
    console.log("Result:", student.getResult(average));
    console.log("----------------------");
});

// 7. Filter Students Who Need Mercy Marks
let strugglingStudents = studentsList.filter(student => {
    let average = student.calculateAverage();
    return average >= 40 && average <= 49;
});

// 8. Add 5 Mercy Marks using map
let mercyStudents = strugglingStudents.map(student => {
    let oldAverage = student.calculateAverage();

    return {
        id: student.id,
        name: student.name,
        oldAverage: oldAverage,
        newAverage: oldAverage + 5
    };
});

// 9. Calculate New Averages using reduce
let totalNewAverages = mercyStudents.reduce((sum, student) => {
    return sum + student.newAverage;
}, 0);

// 10. Calculate General Mercy Average
let mercyAverage = mercyStudents.length > 0
    ? totalNewAverages / mercyStudents.length
    : 0;

// 11. Print Mercy Committee Report
console.log("===== Mercy Committee =====");

console.log("Students included in mercy marks:");
console.log(mercyStudents);

console.log("Average after mercy marks:", mercyAverage.toFixed(2));
