import { NextRouter } from 'next/router'
import { Firestore } from 'firebase/firestore'
import { DialogOptions, ValidationResult } from '../components/popups/GeneralDialog'
import { store } from './store'
import { addDocTyped } from './db'
import { findSimilarLabel } from './fuzzyMatch'

export function createNewLabelDialog(
  router: NextRouter,
  db: Firestore | null,
  initialValue?: string
): DialogOptions {
  return {
    message: 'New label',
    input: 'Label name',
    initialValue,
    validate: (input: string): ValidationResult | null => {
      if (!input.trim()) {
        return null // Allow empty input, will be handled by the callback
      }

      // Check for exact match (case-insensitive)
      const exactMatch = store().labels.find(
        label => label.name.toLowerCase().trim() === input.toLowerCase().trim()
      )
      if (exactMatch) {
        return {
          message: 'A label with this name already exists',
          isError: true,
        }
      }

      // Check for similar labels using fuzzy matching
      const similarLabel = findSimilarLabel(input, 0.6)
      if (similarLabel) {
        const similarityPercent = Math.round(similarLabel.similarity * 100)
        return {
          message: `Warning: Similar label "${similarLabel.label}" exists (${similarityPercent}% similar)`,
          isError: false, // This is a warning, not an error
        }
      }

      return null
    },
    actions: [
      { label: 'Cancel' },
      {
        label: 'OK',
        callback: async name => {
          if (name && db) {
            const doc = await addDocTyped(db, name)
            if (!doc) return
            router.push('/label/' + doc.id)
          }
        },
        callOnEnter: true,
      },
    ],
  }
}
