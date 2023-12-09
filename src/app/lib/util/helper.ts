export const findMostKeys = (json: Array<object>): object => {
  let highScore: number = 0
  let winner: object = {}

  //could use reduce but that didn't reduce the length
  json.forEach((r: object) => {
    const length = Object.keys(r).length
    if (length >= highScore) {
      highScore = length
      winner = r
    }
  })

  return winner
}
