import axios from 'axios'

export function requests (config) {
  return axios(config)
}

const getApiBaseUrl = () => 'http://localhost:4000'

export async function graphql (query) {
  return requests({
    method: 'POST',
    data: { query },
    url: `${await getApiBaseUrl()}/graphql`
  })
}
