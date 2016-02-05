
# fetch-json

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Fetch json sugar.

## Installation

    $ npm install @koax/fetch-json

## Usage

```js
import koax from 'koax'
import {fetchEffect} from '@koax/fetch'
import {post} from '@koax/fetch-json'

let app = koax()

app.use(fetchEffect)

app(post('https://slack.com/api/chat.postMessage', {
  token: 'secret',
  channel: 'C1234567890',
  text: 'Hello world'
})).then(res => res.body) // {ok: true ...}
```

## API

### get(url, params)

- `url` - url string
- `params` - parameters to put in body (should we put in url for get?)

**Returns:** FETCH action

### post(url, params)

- `url` - url string
- `params` - parameters to put in body

**Returns:** FETCH action

## License

MIT

[travis-image]: https://img.shields.io/travis/koaxjs/fetch-json.svg?style=flat-square
[travis-url]: https://travis-ci.org/koaxjs/fetch-json
[git-image]: https://img.shields.io/github/tag/koaxjs/fetch-json.svg
[git-url]: https://github.com/koaxjs/fetch-json
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@koax/fetch-json.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@koax/fetch-json
