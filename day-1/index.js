{
  const name = "Khairul Islam Kakon";

  console.log(name);
  console.log(typeof name);
}
{
  let name = "first name khairul Islam Kakon";
  console.log(name);
}

{
  let age = 24;
  console.log(age);
  var name = "koko";
  console.log(name);
}
{
  isGraduatued = true;
  paymentTotal = null;
  aboutFuture = undefined;
  BigInteger = 29n;
  sign = Symbol("unemployed");
  console.log(typeof isGraduatued);
  console.log(typeof paymentTotal);
  console.log(typeof aboutFuture);
  console.log(typeof BigInteger);
  console.log(typeof sign);
}

const pie = Number(3.1416);
console.log(
  "Global constent variable pie =",
  pie,
  "and type of pie is =",
  typeof pie
);

const ojbect = {
  info: "object created ",
};
console.log(ojbect["info"], "and typeof it's:", typeof ojbect);

const profile = {
  name: "Khairul Islam kakon",
  university: "AIUB",
  isGraduatued: true,
  creditCompleted: 148,
  hasJob: null,
  career: undefined,
};
console.log("created object named", profile);
console.log(
  "My Name is ",
  profile["name"],
  "My university was",
  profile["university"],
  ".",
  "it is ",
  profile["isGraduatued"],
  " that I am graduated.",
  "Total Number of credits completed =",
  profile["creditCompleted"],
  ".",
  "I am having ",
  profile["hasJob"],
  "jobs.",
  "and ",
  profile["career"],
  "future."
);
