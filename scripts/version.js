const { readFileSync, writeFileSync } = require('fs')
const path = require('path')

const ROOT = path.join(process.cwd(), '..')
const PACKAGE_JSON = path.join(ROOT, 'package.json')

const version = process.argv[2]
console.log(version)

let package_json = JSON.parse(readFileSync(PACKAGE_JSON).toString())
package_json.version = version
writeFileSync(PACKAGE_JSON, JSON.stringify(package_json, null, 2))
