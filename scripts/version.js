const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..')
const PACKAGE_JSON = path.join(ROOT, 'package.json')
const MANIFEST = path.join(ROOT, 'src', 'constants', 'manifest.json')

const version = process.argv[2]
console.log(version)

let package_json = JSON.parse(readFileSync(PACKAGE_JSON).toString())
package_json.version = version
writeFileSync(PACKAGE_JSON, JSON.stringify(package_json))

let manifest = JSON.parse(readFileSync(MANIFEST).toString())
manifest.version = version
writeFileSync(MANIFEST, JSON.stringify(manifest))
