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
    expect(transformer.cleaner({k: "v"})).toEqual('*object*')
  })

  it('returns empty string for undefined | null input', () => {
    expect(transformer.cleaner(null)).toBe('')
    expect(transformer.cleaner(undefined)).toEqual('')
  })
})
