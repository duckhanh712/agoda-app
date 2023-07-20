export const useBreadcrumbStore = defineStore('breadcrumb', () => {
  const breadcrumbs = ref<any[]>([])

  function setBreadcrumbs (newBreadcrumbs: any[]) {
    breadcrumbs.value = newBreadcrumbs
  }

  return { breadcrumbs, setBreadcrumbs }
})