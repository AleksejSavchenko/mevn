import Express from 'express'
import Mongoose from 'mongoose'
import path from 'path'
import config from '@config'
import v1Router from '@routes'
import Webpack from 'webpack'
import WebpackConfig from '../webpack.config'
import WebpackDevMiddleware from 'webpack-dev-middleware'
import WebpackHotMiddleware from 'webpack-hot-middleware'

const app = Express()

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

app.listen(3000, () =>
  console.log(`Server started successfully on ${3000} port.`)
)
