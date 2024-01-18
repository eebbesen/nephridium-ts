const CONVERTABLES = new RegExp(/_/g)

export const transform = (target: string): string => {
  return target.replaceAll(CONVERTABLES, ' ')
}

export const cleaner = (input: string) => {
  if (null === input || undefined === input) {
    return ''
  }

  const type: string = typeof input

  if (type == 'string' || type == 'number') {
    return input
  }

  return `*${type}*`
}

export const truncate = (target: string): string => {
  let ret: string = target.substring(0, 73)
  if (ret.length < target.length) {
    ret = `${ret}...`
  }

  return ret
}

export const stripParams = (target: string): string => {
  if (target === undefined || target === null) {
    return ''
  }

  if (target.indexOf('?') < 0) {
    return target
  }

  return target.substring(0, target.indexOf('?'))
}
