export function makeRow(n = 0) {
  return Array(9).fill(n)
}

export function makeMatrix(n = 0) {
  return Array.from({
    length: 9
  }, () => makeRow(n))
}

export function shuffle(arr) {
  if (!arr.length) 
    return
  for (let i = 0; i < arr.length - 1; i++) {
    const j = i + Math.floor(Math.random() * (arr.length - i));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}