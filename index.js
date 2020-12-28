const fs = require('fs')
const parseString = require('xml2js').parseString

const lowercase = name => {
    return name.toLowerCase()
}

const file = (path, callback) => {
    fs.readFile(path, {encoding: 'utf8'}, (error, data) => {
        if (error){
            return callback(error)
        }

        parseString(data, {
            strict: false,
            attrkey: 'ATTR',
            attrNameProcessors: [lowercase],
        }, (err, result) => {
            if (err){
                return callback(err)
            }
            let width = 0
            let height = 0
            if (result.SVG.ATTR.width && result.SVG.ATTR.height){
                width = result.SVG.ATTR.width
                height = result.SVG.ATTR.height
            } else {
                let viewbox = result.SVG.ATTR.viewbox.split(/\s+/)
                width = viewbox[2]
                height = viewbox[3]
            }
            callback(null, {
                width: parseFloat(width),
                height: parseFloat(height),
                attrs: result.SVG.ATTR
            })
        })
    })
}

module.exports.file = file