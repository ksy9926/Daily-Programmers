function solution(skill, skill_trees) {
  var answer = 0;
  var re = new RegExp(`[${skill}]`, "g");
  for (let i = 0; i < skill_trees.length; i++) {
    const part = skill_trees[i].match(re);
    const strPart = part ? part.join("") : "";
    if (strPart === skill.slice(0, strPart.length)) answer += 1;
  }
  return answer;
}

function solution(skill, skill_trees) {
  function isCorrect(n) {
    let test = skill.split("");
    for (var i = 0; i < n.length; i++) {
      if (!skill.includes(n[i])) continue;
      if (n[i] === test.shift()) continue;
      return false;
    }
    return true;
  }

  return skill_trees.filter(isCorrect).length;
}
