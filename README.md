# state-manager

> A react hook that manages state.

[![NPM](https://img.shields.io/npm/v/state-manager.svg)](https://www.npmjs.com/package/state-manager) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save state-manager
```

## Usage

```jsx
import React, { Component } from 'react'

import { ImpersonationsStateHook } from 'state-manager'

const Example = () => {
  // default must be an array like structure
  const {impersonations, syncImpersonations} = ImpersonationsStateHook(default)
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [joyguy55](https://github.com/joyguy55)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
