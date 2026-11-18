const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// Continguts estàtics (carpeta public)
const publicPath = path.join(__dirname, '..', 'public')
app.use(express.static(publicPath))

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  next();
});

// Configurar direcció ‘/’
/*
app.get('/', async (req, res) => {
    res.send(`Hello World /`)
})
*/

// Activar el servidor
const httpServer = app.listen(port, appListen)
function appListen () {
    console.log(`Example app listening on: http://0.0.0.0:${port}`)
}

// Aturar el servidor correctament
process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
function shutDown() {
    console.log('Received kill signal, shutting down gracefully');
    httpServer.close()
    process.exit(0);
}