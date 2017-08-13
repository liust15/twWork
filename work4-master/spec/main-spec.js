const Person = require('../main/person');
const Student = require('../main/student');

describe('main()', () => {

    it('should introduce person', () => {
      let person = new Person('Tom', 21);
      expect(person.introduce()).toBe("My name is Tom. I am 21 years old.");
    });

    it('should introduce student', () => {
      let student = new Student('Tom', 21, 2);
      expect(student.introduce()).toBe("My name is Tom. I am 21 years old. I am a Student. I am at Class 2.");
    });
});
