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
