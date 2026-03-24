export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const path = event.path
  const target = `${config.backendUrl}${path}`

  return proxyRequest(event, target, {
    headers: {
      Accept: 'application/json'
    }
  })
})
