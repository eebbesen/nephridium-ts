export const findMaximumKeys = (json: Array<object>): object => {
  let highScore: number = 0
  let winner: string[] = []

  //could use reduce but that didn't reduce the length
  json.forEach((r: object) => {
    const keys: string[] = Object.keys(r)
    if (keys.length >= highScore) {
      highScore = keys.length
      winner = keys
    }
  })

  return winner
}
