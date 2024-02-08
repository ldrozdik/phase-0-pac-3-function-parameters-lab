function introduction(name = "Aki") {
  const message = `Hi, my name is ${name}.`;
  console.log(message);
  return message;
}
function introductionWithLanguage(name = "Aki", language = "Ember.js"){
const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
console.log(message)
return message;
}
function introductionWithLanguageOptional(name = "Aki", language = "JavaScript"){
    const message = `Hi, my name is ${name} and I am learning to program in ${language}.`;
    console.log(message)
    return message;
    }
