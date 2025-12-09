import { store } from './store'

/**
 * Calculate Levenshtein distance between two strings
 */
export function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length
  const len2 = str2.length
  const matrix: number[][] = []

  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // deletion
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j - 1] + 1 // substitution
        )
      }
    }
  }

  return matrix[len1][len2]
}

/**
 * Calculate similarity ratio between two strings (0-1, where 1 is identical)
 */
export function similarityRatio(str1: string, str2: string): number {
  const maxLen = Math.max(str1.length, str2.length)
  if (maxLen === 0) return 1
  const distance = levenshteinDistance(str1, str2)
  return 1 - distance / maxLen
}

/**
 * Find the most similar label name using fuzzy matching
 */
export function findSimilarLabel(
  input: string,
  threshold: number = 0.6
): { label: string; similarity: number } | null {
  const inputLower = input.toLowerCase().trim()
  let bestMatch: { label: string; similarity: number } | null = null
  let bestSimilarity = 0

  for (const label of store().labels) {
    const labelLower = label.name.toLowerCase().trim()

    // Skip exact matches (case-insensitive)
    if (inputLower === labelLower) {
      continue
    }

    // Calculate similarity
    const similarity = similarityRatio(inputLower, labelLower)

    // Also check if one string contains the other (for partial matches)
    const containsMatch = inputLower.includes(labelLower) || labelLower.includes(inputLower)
    const adjustedSimilarity = containsMatch ? Math.max(similarity, 0.6) : similarity

    if (adjustedSimilarity >= threshold && adjustedSimilarity > bestSimilarity) {
      bestSimilarity = adjustedSimilarity
      bestMatch = { label: label.name, similarity: adjustedSimilarity }
    }
  }

  return bestMatch
}

/**
 * Check if a text matches an existing label (exact or fuzzy match)
 */
export function findMatchingLabel(
  text: string,
  threshold: number = 0.6
): { label: string; similarity: number } | null {
  const textLower = text.toLowerCase().trim()

  // First check for exact match (case-insensitive)
  const exactMatch = store().labels.find(label => label.name.toLowerCase().trim() === textLower)
  if (exactMatch) {
    return { label: exactMatch.name, similarity: 1 }
  }

  // Then check for fuzzy match
  return findSimilarLabel(text, threshold)
}
