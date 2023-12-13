const transformer = require('../../../../src/app/lib/util/transformer')

describe('formatColumnName', () => {
  it('transforms underscores to spaces', () => {
    expect(transformer.transform('COL_NAME')).toEqual('COL NAME')
  })

  it('returns input without changes when no replaceable tokens', () => {
    expect(transformer.transform('COL NAME')).toEqual('COL NAME')
    expect(transformer.transform('COLNAME')).toEqual('COLNAME')
    expect(transformer.transform('COL*NAME')).toEqual('COL*NAME')
  })
})

describe('cleaner', () => {
  it('returns string | number input', () => {
    expect(transformer.cleaner(77)).toBe(77)
    expect(transformer.cleaner('84bu9')).toBe('84bu9')
  })

  it('returns *object* for object input', () => {
    expect(transformer.cleaner({ k: 'v' })).toEqual('*object*')
  })

  it('returns empty string for undefined | null input', () => {
    expect(transformer.cleaner(null)).toBe('')
    expect(transformer.cleaner(undefined)).toEqual('')
  })
})

describe('truncate', () => {
  const text: string =
    'INTERIOR OF BUILDING - NO RESPONSE, UNABLE TO VERFY DETECTORS AND OCCUPANCY.'
  it('truncates with ellipses', () => {
    const expected: string = `${text.substring(0, 73)}...`
    expect(transformer.truncate(text)).toEqual(expected)
  })

  it('does not truncate when string is shorter than 73', () => {
    const input: string = text.substring(0, 72)
    expect(transformer.truncate(input)).toEqual(input)
  })
})

describe('stripParams', () => {
  it('strips params', () =>{
    const url = 'https://data.cityofchicago.org/resource/22u3-xenr.json?$limit=5'
    expect(transformer.stripParams(url)).toEqual('https://data.cityofchicago.org/resource/22u3-xenr.json')
  })

  it('returns input when nothing to strip', () =>{
    const url = 'https://data.cityofchicago.org/resource/22u3-xenr.json'
    expect(transformer.stripParams(url)).toEqual('https://data.cityofchicago.org/resource/22u3-xenr.json')
  })

  it ('handles undefined input', () =>{
    expect(transformer.stripParams(undefined)).toEqual('')
  })

  it ('handles null input', () =>{
    expect(transformer.stripParams(null)).toEqual('')
  })
})
