import fs from 'fs'
import path from 'path'

// CONFIGURE THIS
const rootDir = './src' // starting directory
const searchString = '@mod' // string to search
const replaceString = '@/mod' // string to replace with

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback)
    } else {
      callback(fullPath)
    }
  })
}

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  if (content.includes(searchString)) {
    const updated = content.replace(new RegExp(searchString, 'g'), replaceString)
    fs.writeFileSync(filePath, updated, 'utf8')
    console.log(`Updated: ${filePath}`)
  }
}

// Run
walkDir(rootDir, replaceInFile)
console.log('Done ✅')
