function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    if (cache.includes(city)) {
      const index = cache.indexOf(city);
      cache.splice(index, 1);
      cache.push(city);
      answer += 1;
    } else if (cache.length < cacheSize) {
      cache.push(city);
      answer += 5;
    } else {
      if (cacheSize !== 0) {
        cache.shift();
        cache.push(city);
      }
      answer += 5;
    }
  }
  return answer;
}
