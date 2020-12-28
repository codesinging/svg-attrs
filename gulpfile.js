const svgAttrs = require('./index')

const test = cb => {
    svgAttrs.file('./svg/2.svg', (err, attrs) => {
        console.log(err||attrs)
    })

    cb()
}

exports.test = test