export default defineAppConfig({
  ui: {
    colors: {
      primary: (process.env.NUXT_UI_PRIMARY_COLOR || 'motor-primary') as 'motor-primary',
      success: (process.env.NUXT_UI_SUCCESS_COLOR || 'motor-success') as 'motor-success',
      warning: (process.env.NUXT_UI_WARNING_COLOR || 'motor-warning') as 'motor-warning',
      error: (process.env.NUXT_UI_ERROR_COLOR || 'motor-error') as 'motor-error',
      info: (process.env.NUXT_UI_INFO_COLOR || 'motor-info') as 'motor-info'
    }
  }
})
