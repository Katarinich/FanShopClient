import { parseHttpStatusText } from './http-utils'

const baseUri = 'http://private-517bbf-shop31.apiary-mock.com'

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

export function authenticatedFetch(url, method, dispatch, getState, body = null, headers = defaultHeaders) {
  let token = getState().auth.token

  let fetchOptions = {
        method: method,
        headers: {
          ...headers,
          'Authorization': token
        }
      }

  if(body) {
    fetchOptions.body = body
  }

  let requestedUrl = `${baseUri}${url}`

  return fetch(requestedUrl, fetchOptions)
        .then(response => {
          return response
        }).catch(error => {
          throw error
        })
}
