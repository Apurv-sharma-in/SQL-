const IdentityCard = require('./identityCrad');
const Student = require('./student');
const Department = require('./department');

Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

Department.hasOne(Student);
Student.belongsTo(Department);


module.exports = {
    Student,
    IdentityCard,
    Department
};