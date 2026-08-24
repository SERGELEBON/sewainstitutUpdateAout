#!/usr/bin/env node

// Point d'entrée optimisé pour LWS Node.js
// Compatible avec Next.js standalone build

const { createServer } = require('http')
const { parse } = require('url')
const path = require('path')
const fs = require('fs')

// Configuration pour LWS
const hostname = process.env.HOSTNAME || '0.0.0.0'
const port = process.env.PORT || 3000

console.log('🚀 Starting Sewa Institute application...')
console.log('📊 Environment:', process.env.NODE_ENV || 'production')
console.log('🌐 Port:', port)
console.log('🏠 Hostname:', hostname)
console.log('📁 Directory:', __dirname)

// Vérifier la structure des fichiers
const checkFiles = () => {
  const requiredFiles = [
    'package.json',
    '.next/static',
    'public'
  ]

  console.log('📋 Checking required files...')
  requiredFiles.forEach(file => {
    const filePath = path.join(__dirname, file)
    const exists = fs.existsSync(filePath)
    console.log(`${exists ? '✅' : '❌'} ${file}: ${exists ? 'Found' : 'Missing'}`)
  })
}

checkFiles()

// Essayer d'utiliser le serveur standalone s'il existe
let handle;
let standaloneServerPath = path.join(__dirname, 'server.js.backup')

// Chercher le serveur standalone Next.js
const possibleStandalonePaths = [
  path.join(__dirname, '.next/standalone/server.js'),
  path.join(__dirname, 'standalone/server.js'),
  standaloneServerPath
]

let standaloneFound = false
for (const standalonePath of possibleStandalonePaths) {
  if (fs.existsSync(standalonePath)) {
    console.log(`✅ Found standalone server at: ${standalonePath}`)
    try {
      // Essayer de charger le serveur standalone
      const standaloneServer = require(standalonePath)
      standaloneFound = true
      console.log('✅ Standalone server loaded successfully')
      break
    } catch (error) {
      console.log(`⚠️ Failed to load standalone from ${standalonePath}:`, error.message)
    }
  }
}

// Fallback: serveur Next.js classique si standalone non disponible
if (!standaloneFound) {
  console.log('⚠️ Standalone not found, using fallback Next.js server...')
  try {
    const next = require('next')
    const app = next({
      dev: false,
      hostname,
      port,
      dir: __dirname,
    })
    handle = app.getRequestHandler()

    app.prepare().then(() => {
      startServer(handle)
    }).catch(ex => {
      console.error('❌ Failed to prepare Next.js app:', ex)
      startBasicServer()
    })
  } catch (error) {
    console.error('❌ Next.js not available:', error.message)
    startBasicServer()
  }
} else {
  console.log('✅ Using standalone server')
}

// Serveur de base si tout le reste échoue
function startBasicServer() {
  console.log('⚠️ Starting basic static server...')
  createServer((req, res) => {
    const { pathname } = parse(req.url, true)

    if (pathname === '/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({
        status: 'OK - Basic Server',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        note: 'Static server fallback mode'
      }, null, 2))
    } else if (pathname === '/' || pathname === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html' })
      res.end(`
        <html>
          <head><title>Sewa Institute</title></head>
          <body>
            <h1>Sewa Institute - Server Running</h1>
            <p>Application is being deployed...</p>
            <p>Server Status: Active</p>
            <p>Time: ${new Date().toISOString()}</p>
            <p><a href="/health">Health Check</a></p>
          </body>
        </html>
      `)
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Page not found')
    }
  }).listen(port, hostname, () => {
    console.log(`✅ Basic server ready on http://${hostname}:${port}`)
  })
}

// Serveur Next.js principal
function startServer(requestHandler) {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      const { pathname } = parsedUrl

      // Log important requests
      if (pathname === '/health' || pathname.startsWith('/api/')) {
        console.log(`📋 ${req.method} ${req.url}`)
      }

      // Health check endpoint
      if (pathname === '/health') {
        res.writeHead(200, {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
        })
        res.end(JSON.stringify({
          status: 'OK',
          timestamp: new Date().toISOString(),
          version: '1.0.0',
          hosting: 'LWS cPanel Node.js',
          uptime: process.uptime(),
          memory: process.memoryUsage(),
          pid: process.pid,
        }, null, 2))
        return
      }

      // Handle all other requests with Next.js
      if (requestHandler) {
        await requestHandler(req, res, parsedUrl)
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end('Server not ready')
      }
    } catch (err) {
      console.error('❌ Error handling request:', req.url, err)
      res.statusCode = 500
      res.end('Internal Server Error')
    }
  }).listen(port, hostname, () => {
    console.log(`✅ Sewa Institute ready on http://${hostname}:${port}`)
    console.log(`📊 Health check: http://${hostname}:${port}/health`)
    console.log(`🌍 LWS cPanel Node.js hosting active`)
    console.log(`⏰ Started at: ${new Date().toISOString()}`)
  })
}

// Process handlers
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received: shutting down gracefully')
  process.exit(0)
})

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received: shutting down gracefully')
  process.exit(0)
})

process.on('uncaughtException', err => {
  console.error('❌ Uncaught Exception:', err)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection:', reason)
})
