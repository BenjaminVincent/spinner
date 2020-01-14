// process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spin = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 0;

for (const s of spin) {
  setTimeout(() => {
    process.stdout.write('\r' + s);
  },timer += 300);
}


setTimeout(() => {
  console.log();
}, 3100);