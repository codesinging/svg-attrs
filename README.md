# svg-attrs

Get attributes of a svg.

## Installation

```shell
npm i -D svg-attrs
# or
yarn add --dev svg-attrs
```

## Usage

### Get attributes from a svg file path

```javascript
const svgAttrs = require('svg-attrs')

svgAttrs.file('./test.svg', (err, attrs) => {
    if (err) {
        console.error(err)
    } else {
        let width = attrs.width
        let height = attrs.height
        
        let attrs = attrs.attrs
    }
})
```

### Get attributes from a svg string

```javascript
const svgAttrs = require('svg-attrs')

svgAttrs.string('svg string', (err, attrs) => {
    if (err) {
        console.error(err)
    } else {
        let width = attrs.width
        let height = attrs.height
        
        let attrs = attrs.attrs
    }
})
```

## License

MIT