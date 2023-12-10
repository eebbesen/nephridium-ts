const CONVERTABLES = new RegExp(/_/g)

export const transform = (target: string): string => {
  return target.replaceAll(CONVERTABLES, ' ')
}

export const cleaner = (input: any) => {
  if (null === input || undefined === input) {
    return ''
  }

  const type: string = typeof input

  if (type == 'string' || type == 'number') {
    return input
  }

  return `*${type}*`
}
