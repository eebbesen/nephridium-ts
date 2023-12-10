const styleguide = require('@vercel/style-guide/prettier')

module.exports = {
  ...styleguide,
  semi: false,
  plugins: [...styleguide.plugins, 'prettier-plugin-tailwindcss'],
}
