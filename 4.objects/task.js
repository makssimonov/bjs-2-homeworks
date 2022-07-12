function Student(name, gender, age) {
  function Stats(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }
  let student1 = new Stats(name, gender, age);
  let student2 = new Stats(name, gender, age);
}

Student.prototype.setSubject = function (subjectName) {
  this.subjectName = subjectName;
  if (this.subject === undefined) {
    this.subject = subjectName;
  }
}

Student.prototype.addMark = function (mark) {
  this.mark = mark;
  if (this.marks === undefined) {
    this.marks = function() {
      Stats.mark = mark;
    }
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  this.marks = marks;
  let sum = 0;
  for (let mark of marks) sum += mark;
  return sum;
}

Student.prototype.getAverage = function() {
    let result = this.marks.reduce(function(sum, current) {
      return sum + current;
    }, 0);
    return result / this.marks.length;
  }

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  if (this.excluded === undefined) {
    this.excluded = reason;
  }
}