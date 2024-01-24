export enum SourceTypes {
  ArcGIS,
  Other,
}

export function findMaximumKeys(json: Array<object>): object {
  let highScore: number = 0
  let winner: string[] = []

  //could use reduce but that didn't reduce the length of the function
  json.forEach((r: object) => {
    const keys: string[] = Object.keys(r)
    if (keys.length >= highScore) {
      highScore = keys.length
      winner = keys
    }
  })

  return winner
}

export function identifySource(url: string): SourceTypes {
  if (url.indexOf('FeatureServer') > -1) {
    return SourceTypes.ArcGIS
  }

  return SourceTypes.Other
}
