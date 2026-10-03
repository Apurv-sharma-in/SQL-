const IdentityCard = require('./identityCrad');
const Student = require('./student');
const Department = require('./department');
const studentCources = require('./studentCources');
const Cources = require('./cources');


//one to one 
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

//one to many
Department.hasOne(Student);
Student.belongsTo(Department);

//many to many
Student.belongsTo(Cources,{through:studentCources});
Cources.belongsTo(Student,{through:studentCources});



module.exports = {
    Student,
    IdentityCard,
    Department,
    Cources,
    studentCources
};