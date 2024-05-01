function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false
  }
  return true
}

async function buildRequestOptions(method, payload = {}) {
  const headers = {
    'Content-Type': 'application/json',
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
