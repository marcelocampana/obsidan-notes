<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard()
const toast = useToast()
const config = useRuntimeConfig()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')
const { showCheckbox } = useShowCheckbox()

// Array reactivo para guardar las URLs seleccionadas
const selectedUrls = ref<string[]>([])

// Función para manejar el cambio de cada checkbox
function toggleUrl(checked: boolean, url: string) {
  if (checked) {
    if (!selectedUrls.value.includes(url)) {
      selectedUrls.value.push(url)
    }
  } else {
    selectedUrls.value = selectedUrls.value.filter(u => u !== url)
  }
}

// Función para copiar todas las URLs seleccionadas
function copySelectedUrls() {
  if (selectedUrls.value.length) {
    copy(selectedUrls.value.join(' '))
    toast.add({
      title: 'URLs copiadas al portapapeles',
      icon: 'i-lucide-check-circle'
    })
    showCheckbox.value = false
    selectedUrls.value = []
  }
}
const cancelCopySelectedUrls = () => {
  showCheckbox.value = false
  selectedUrls.value = []
}

console.log(config.public.siteUrl)

// Helper para obtener la URL de cada ítem
function getMdPath(path: string) {
  const mdPath = computed(() => `${config.public.siteUrl}/raw${path}.md`)
  return mdPath.value
}
</script>

<template>
  <UContainer class="max-w-none">
    <UPage>
      <template #left>
        <UPageAside class="border-r border-gray-300 dark:border-gray-700">
          <UButton
            v-if="selectedUrls.length > 0 && showCheckbox"
            class="mr-2 mb-4"
            :disabled="selectedUrls.length === 0"
            icon="i-lucide-x"
            size="sm"
            variant="soft"
            color="neutral"
            @click="cancelCopySelectedUrls"
          >
            Cancelar
          </UButton>
          <UButton
            v-if="selectedUrls.length > 0 && showCheckbox"
            class="mb-4"
            :disabled="selectedUrls.length === 0"
            icon="i-lucide-copy"
            size="sm"
            @click="copySelectedUrls"
          >
            Copiar URLs
          </UButton>
          <UContentNavigation highlight :navigation="navigation">
            <template #link-leading="{ link }">
              <UCheckbox
                v-if="link.path && showCheckbox"
                :model-value="selectedUrls.includes(getMdPath(link.path))"
                @update:model-value="
                  checked => toggleUrl(!!checked, getMdPath(link.path))
                "
              />
            </template>
          </UContentNavigation>
        </UPageAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>
