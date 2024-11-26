import * as transliteration from 'transliteration'

export const transliterateToCode = (input: string): string => {
  const transliterated = transliteration.transliterate(input.toLowerCase())

  const withUnderscores = transliterated.replace(/\s+/g, '_')

  const cleaned = withUnderscores.replace(/[^a-z0-9_]/g, '')

  return cleaned
}
