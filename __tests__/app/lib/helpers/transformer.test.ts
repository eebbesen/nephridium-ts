const transformer = require('../../../../src/app/lib/helpers/transformer')

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
