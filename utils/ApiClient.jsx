function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false
  }
  return true
}

async function getBearerToken() {
  // Get the token from local storage
  // Return the token if it exists
  if (localStorage.getItem('visitorToken') !== null) {
    return localStorage.getItem('visitorToken')
  }

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/visitor/generateToken`, { method: 'GET', headers: { 'Content-Type': 'application/json' } })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json() // Extract JSON data from the response

    const idToken = data.token // Get the token from the response data
    // Store the token in local storage
    localStorage.setItem('visitorToken', idToken)
    return idToken
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

async function buildRequestOptions(method, payload = {}) {
  let bearerToken = await getBearerToken()

  let authToken = localStorage.getItem('authToken')
  if(authToken !== null)
  {
    bearerToken = `${bearerToken} ${authToken}`
  }

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${bearerToken}`, //visitor usertoken
  }

  let requestOptions = {
    method: method,
    headers: headers,
  }

  if (method !== 'GET' && !isEmpty(payload)) {
    requestOptions = { ...requestOptions, ...{ body: JSON.stringify(payload) } }
  }

  return requestOptions
}

class ApiClient {
  static baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'

  /**
   * Sends a GET request to backend with parameters
   *
   * @param {string} URL The url that will be appended to the base url of the XRS API
   * @param {object} payload (Optional) Will be transformed into search parameters
   * @returns A Promise containing the response as a JSON object
   */
  async getRequest(URL, payload = {}) {
    const requestOptions = await buildRequestOptions('GET')
    let response = {}
    if (Object.keys(payload).length > 0) {
      response = await fetch(`${ApiClient.baseURL}${URL}?${new URLSearchParams(payload)}`, requestOptions)
    } else {
      response = await fetch(`${ApiClient.baseURL}${URL}`, requestOptions)
    }
    return response?.json()
  }

  /**
   * Sends a POST request to backend, adding the payload to the body of the request
   *
   * @param {string} URL The url that will be appended to the base url of the XRS API
   * @param {object} payload (Optional) The data to be sent in the body of the request
   * @returns A Promise containing the response as a JSON object
   */
  async postRequest(URL, payload = {}) {
    const requestOptions = await buildRequestOptions('POST', payload)
    const response = await fetch(`${ApiClient.baseURL}${URL}`, requestOptions)
    return response?.json()
  }

  /**
   * Sends a PUT request to backend, adding the payload to the body of the request
   *
   * @param {string} URL The url that will be appended to the base url of the XRS API
   * @param {object} payload (Optional) The data to be sent in the body of the request
   * @returns A Promise containing the response as a JSON object
   */
  async putRequest(URL, payload = {}) {
    const requestOptions = await buildRequestOptions('PUT', payload)
    const response = await fetch(`${ApiClient.baseURL}${URL}`, requestOptions)
    return response?.json()
  }

  /**
   * Sends a DELETE request to backend, adding the payload to the body of the request
   *
   * @param {string} URL The url that will be appended to the base url of the XRS API
   * @param {object} payload (Optional) The data to be sent in the body of the request
   * @returns A Promise containing the response as a JSON object
   */
  async deleteRequest(URL, payload = {}) {
    const requestOptions = await buildRequestOptions('DELETE', payload)
    const response = await fetch(`${ApiClient.baseURL}${URL}`, requestOptions)
    return response?.json()
  }
}

export default new ApiClient()
