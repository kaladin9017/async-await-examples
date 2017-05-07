const Bluebird = require('bluebird');

async function main() {
  console.log('Give me two minutes...');
  await Bluebird.delay(2000);
  console.log('psych, I only needed two seconds')
}

main()
