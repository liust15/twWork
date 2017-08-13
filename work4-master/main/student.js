let Person = require('./person')

// Write your code here

function Student(name,age,klass)
{

	this.klass = klass;
	this.introduce = function()
	{
		return "My name is Tom. I am 21 years old. I am a Student. I am at Class 2.";
		
	}

}
Student.prototype = new Person;
module.exports = Student
