import type { ConfigNames, TypedFlatConfigItem } from '@antfu/eslint-config'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'
import antfu from '@antfu/eslint-config'

const config: FlatConfigComposer<TypedFlatConfigItem, ConfigNames> = antfu({
  pnpm: false,
  rules: {
    'no-cond-assign': 'off',
  },
}).append({
  files: ['README.md', 'SPEC.md', '**/docs/**/*'],
  rules: {
    'import/no-duplicates': 'off',
    'style/no-tabs': 'off',
    'yaml/quotes': 'off',
  },
})

export default config
