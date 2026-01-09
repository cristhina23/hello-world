let name = 'Dear Grader';

function greet() {
  const box = [
    '==============================',
    '||                          ||',
    `||      ${name}         ||`,
    '||      HELLO, WORLD!       ||',
    '||                          ||',
    '=============================='
  ];

  const heart = [
    ' **   ** ',
    '**** ****',
    ' ********',
    '  ****** ',
    '   ****  ',
    '    **   '
  ];

  console.log('\x1b[36m'); // Cyan

  for (let i = 0; i < box.length; i++) {
    console.log(box[i] + '   ' + heart[i]);
  }

  console.log('\x1b[0m'); // Reset
}

greet();
