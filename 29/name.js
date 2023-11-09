const firstName = 'Александр';
const lastName = 'Александров';
const patronymic = 'Александрович';
const year = 2003;
const institute = 'ИКИТ';

const result1 = 'firstName: ' + firstName + "\n" +
                        'lastName: ' + lastName + "\n" +
                        'patronymic: ' + patronymic + "\n" +
                        'year: ' + year + "\n" +
                        'institute: ' + institute;
console.log(result1);

const result2 = `
firstName: ${firstName}
lastName: ${lastName}
patronymic: ${patronymic}
year: ${year}
institute: ${institute}
`.trim();

console.log(result2);