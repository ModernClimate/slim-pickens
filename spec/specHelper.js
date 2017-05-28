import fs from 'fs'
import { JSDOM } from 'jsdom'

const { window } = new JSDOM('')
const { document } = window

global.document = document
global.window = document.defaultView

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

