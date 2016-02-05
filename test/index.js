/**
 * Imports
 */

import test from 'tape'
import {post, get, put, patch, del} from '../src'
import {type} from '@koax/fetch'

/**
 * Tests
 */

test('should work', (t) => {
  let action = post('https://slack.com/api/chat.postMessage', {token: 'secret', channel: 'C1234567890', text: 'Hello world'})
  t.deepEqual(action, {
    type: type,
    payload: {
      url: "https://slack.com/api/chat.postMessage",
      params: {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: '{"token":"secret","channel":"C1234567890","text":"Hello world"}'
      }
    }
  })
  t.end()
})
