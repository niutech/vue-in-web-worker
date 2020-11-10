import { upgradeElement } from '@ampproject/worker-dom/dist/main.mjs'

upgradeElement(document.getElementsByTagName('main')[0], 'node_modules/@ampproject/worker-dom/dist/worker/worker.mjs')
