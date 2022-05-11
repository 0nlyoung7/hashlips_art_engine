const fs = require("fs");
const toHash = "QmaA4fWLT1k9yndjGQvnxYxAF394vSqLqwhaC8w1MkbvUv";

var workDir = "./build/json";

async function start() {
  var files = fs.readdirSync(workDir);
  for (var inx in files) {
    var file = files[inx];
    var json = require(workDir + "/" + file);
    if (json.image) {
      json.compiler = undefined;
      json.date = undefined;
      json.dna = undefined;
      json.name = json.name.replace("Your Collection", "LuckyCookieLucky");
      json.description = json.description.replace(
        "Remember to replace this description",
        "Have a Lucky Day"
      );
      json.image = json.image.replace("NewUriToReplace", toHash);

      fs.writeFileSync(
        "./build/changed/" + file,
        JSON.stringify(json, null, 2)
      );
    }
  }
}

start();
