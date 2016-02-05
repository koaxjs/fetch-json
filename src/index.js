/**
 * Imports
 */

import isObject from '@f/is-object'
import {fetch} from '@koax/fetch'

/**
 * Fetch json
 * @param  {method}
 * @return {Function} JSON request action creator
 */

let fetchJSON = (method) => (url, params) => {
  if (isObject(params)) {
    params = JSON.stringify(params)
  }

  return fetch(url, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: params
  })
}

/**
 * Methods
 */

let get = fetchJSON('GET')
let post = fetchJSON('POST')
let put = fetchJSON('PUT')
let patch = fetchJSON('PATCH')
let del = fetchJSON('DELETE')

/**
 * Exports
 */

export {get, post, put, patch, del}
