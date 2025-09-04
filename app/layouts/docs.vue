<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard()
const toast = useToast()
const config = useRuntimeConfig()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

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
      title: 'Copiado al portapapeles',
      icon: 'i-lucide-check-circle'
    })
  }
}

// Helper para obtener la URL de cada ítem
function getMdPath(path: string) {
  return `${config.public.siteUrl}/raw${path}.md`
}
</script>

<template>
  <UContainer class="max-w-none">
    <UPage>
      <template #left>
        <UPageAside class="border-r border-gray-300 dark:border-gray-700">
          <UContentNavigation highlight :navigation="navigation">
            <template #link-leading="{ link }">
              <UCheckbox
                v-if="link.path"
                :model-value="selectedUrls.includes(getMdPath(link.path))"
                @update:modelValue="
                  checked => toggleUrl(checked, getMdPath(link.path))
                "
              />
            </template>
          </UContentNavigation>
          <UButton
            class="mt-4"
            :disabled="selectedUrls.length === 0"
            @click="copySelectedUrls"
          >
            Copiar seleccionados
          </UButton>
        </UPageAside>
      </template>
      <slot />
    </UPage>
  </UContainer>
</template>
