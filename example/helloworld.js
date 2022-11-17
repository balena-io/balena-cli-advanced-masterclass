const debugMode = process.env.LOG_DEBUG;

if (debugMode) {
  console.log('---> This is debug mode!');
} else {
  console.log('---> LOG_DEBUG not set, no debug mode');
}

console.log('Hello world!');
