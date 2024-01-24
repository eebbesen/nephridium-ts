const helper = require('../../../../src/app/lib/util/helper')

describe('findMostKeys', () => {
  it('finds the record with the most keys', () => {
    const expected = { k1: '1', k2: '2', k3: '3' }
    const json = [{ k1: '1' }, expected, {}]

    expect(helper.findMaximumKeys(json)).toEqual(['k1', 'k2', 'k3'])
  })

  it('handles empty input', () => {
    expect(helper.findMaximumKeys([])).toEqual([])
  })
})

describe('identifySource', () => {
  it('identifies ArcGIS', () => {
    const url =
      'https://services.arcgis.com/zzzzz/arcgis/rest/services/311/FeatureServer/0/query'
    expect(helper.identifySource(url)).toEqual(helper.SourceTypes.ArcGIS)
  })

  it('identifies others', () => {
    const url = 'https://dev.socrata.com/foundry/data.state.gov/aabc-j1i2'
    expect(helper.identifySource(url)).toEqual(helper.SourceTypes.Other)
  })
})
