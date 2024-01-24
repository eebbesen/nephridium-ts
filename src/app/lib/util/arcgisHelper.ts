// get fields?
// get features from payload
// get attributes from features array

export function parseJSON(json: any): object {
  return json.features.map((feature: any) => {
    return feature.attributes
  })
}

// 'https://services.arcgis.com/zzzzz/arcgis/rest/services/311/FeatureServer/0/query?outFields=*&where=1%3D1')
export function fixURL(url: string): string {
  return `${url}/0/query?outFields=*&where=1%3D1&resultRecordCount=30&f=json`
}
