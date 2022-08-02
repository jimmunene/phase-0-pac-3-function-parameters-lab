function introduction(name = 'Jim') {
  return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name = 'Jim',language = 'javascript') {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional (name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
