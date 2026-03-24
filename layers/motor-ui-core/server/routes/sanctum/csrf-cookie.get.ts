export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const target = `${config.backendUrl}/sanctum/csrf-cookie`

  return proxyRequest(event, target)
})
