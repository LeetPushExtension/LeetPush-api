import app from './server'

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Working on http://localhost:${PORT}`)
})
