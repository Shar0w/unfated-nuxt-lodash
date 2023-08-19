<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: Unfated Nuxt Module
- Package name: unfated-nuxt-module
- Description: A different version of Nuxt Lodash to include only desired lodash functions
-->

# Unfated Lodash For Nuxt

A different version of [Nuxt Lodash](https://www.npmjs.com/package/nuxt-lodash) to include only desired lodash functions

## Quick Setup

1. Add `unfated-nuxt-lodash` as development dependency

```bash
# Using pnpm
pnpm add -D unfated-nuxt-lodash

# Using yarn
yarn add --dev unfated-nuxt-lodash

# Using npm
npm install --save-dev unfated-nuxt-lodash
```

2. Add `unfated-nuxt-lodash` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: ['unfated-nuxt-lodash']
})
```

## Config

| Name               | Default | Description                                                                           |
| ------------------ | ------- | ------------------------------------------------------------------------------------- |
| `prefix`           | `'_'` | String to prepend before each Lodash function (false to disable)                      |
| `upperAfterPrefix` | `true`  | If true it will automatically uppercase first letter after prefix (false to disable)  |
| `include`          | `[]`    | Array of Lodash functions to include from auto-imports                                |
| `alias`            | `[]`    | Array of array pairs to rename specific Lodash functions (prefix is still added)      |

## Example Config

```js
export default defineNuxtConfig({
  modules: ["unfated-nuxt-lodash"],
  lodash: {
    prefix: "_",
    upperAfterPrefix: true,
    include: ["cloneDeep"],
    alias: [
      ["map", "aliasMap"], // => stringToCamelCase
    ],
  },
});
```

That's it! You can now use My Module in your Nuxt app ✨