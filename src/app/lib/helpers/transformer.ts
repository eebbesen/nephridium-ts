const CONVERTABLES = new RegExp(/['_']/g)

export const transform = (target: string): string =>
{
  return target.replaceAll(CONVERTABLES, ' ')
}
