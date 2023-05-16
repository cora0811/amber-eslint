var eslintConfig = {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2021,
    "sourceType": "module",
    "allowImportExportEverywhere": true
  },
  "settings": {
    "react": {
      "version": "18.2.0"
    }
  },
  "rules": {
    "react/prop-types": 0,
    "react/display-name": 0,
    "react/react-in-jsx-scope": 0,
    "no-async-promise-executor": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/ban-types": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "no-inline-styles/no-inline-styles": 2
  },
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": ["react", "eslint-plugin-no-inline-styles"]
}

var prettierConfig = {
  "jsxBracketSameLine": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 120,
  "endOfLine": "lf",
  "arrowParens": "always",
  "overrides": [
    {
      "files": "*.css",
      "options": {
        "parser": "css"
      }
    },
    {
      "files": "*.less",
      "options": {
        "parser": "less"
      }
    }
  ]
}

var stylelintConfig = {
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"],
  "customSyntax": "postcss-less",
  "rules": {
    "font-family-name-quotes": null,
    "rule-empty-line-before": null,
    "selector-pseudo-class-no-unknown": null,
    "no-descending-specificity": null
  }
}

var editorConfig = `# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,jsx,ts,tsx}]
indent_style = space
indent_size = 2

# Tab indentation (no size specified)
[*.md]
indent_style = tab
insert_final_newline = false

# Matches the exact files either package.json
[package.json]
indent_style = space
indent_size = 2`

var commitlintConfig = "module.exports = { extends: ['@commitlint/config-conventional'] };\n"

var tsConfig = {
  "compilerOptions": {
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "outDir": "./dist",

    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES2021"],
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "allowUnreachableCode": false,
    "experimentalDecorators": true
  },
  "exclude": ["node_modules", "dist"]
}

module.exports = {
  eslintConfig,
  prettierConfig,
  stylelintConfig,
  editorConfig,
  commitlintConfig,
  tsConfig
}
