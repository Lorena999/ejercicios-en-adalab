'use strict'

const adalaber1 = {}
  adalaber1.name = 'Susana';
  adalaber1.age = 34;
  adalaber1.job = 'periodista';

  const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'actriz',
  };

adalaber2.showBio = function() {
  return 'Mi nombre es ' + this.name + ' tengo ' + this.age + ' y soy ' + this.job;
};


console.log(adalaber2.showBio());


