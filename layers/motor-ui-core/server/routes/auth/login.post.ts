export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const target = `${config.backendUrl}/login`

  return proxyRequest(event, target, {
    headers: {
      Accept: 'application/json'
    }
  })
})
