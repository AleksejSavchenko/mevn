import Express from 'express'
import Mongoose from 'mongoose'
import path from 'path'
import BodyParser from 'body-parser'
import config from '@config'
import v1Router from '@routes'
import Webpack from 'webpack'
import WebpackConfig from '../webpack.config'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'

const app = Express()

app.use(BodyParser.json())

const compiler = Webpack(WebpackConfig)
app.use(WebpackDevMiddleware(compiler, {
  hot: true,
  publicPath: WebpackConfig.output.publicPath
}))
app.use(WebpackHotMiddleware(compiler))

app.use(v1Router)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
})

Mongoose.connect(config.databaseUrl, { useNewUrlParser: true })
const port = 3001
app.listen(port, () =>
  console.log(`Server started successfully on ${port} port.`)
)
