<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { useShowCheckbox } from '~/composables/useShowCheckbox'

const { showCheckbox } = useShowCheckbox()
const route = useRoute()
const toast = useToast()
const { copy, copied } = useClipboard()
const config = useRuntimeConfig()
const isCopying = ref(false)

const mdPath = computed(() => `${config.public.siteUrl}/raw${route.path}.md`)

const items = [
  {
    label: 'Copiar enlace Markdown',
    icon: 'i-lucide-link',
    onSelect() {
      copy(mdPath.value)
      toast.add({
        title: 'Copiado al portapapeles',
        icon: 'i-lucide-check-circle'
      })
    }
  },
  {
    label: 'Ver como Markdown',
    icon: 'i-simple-icons:markdown',
    target: '_blank',
    to: `/raw${route.path}.md`
  },
  {
    label: 'Abrir en ChatGPT',
    icon: 'i-simple-icons:openai',
    target: '_blank',
    to: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(`Lee ${mdPath.value} para que pueda hacerte preguntas sobre el contenido.`)}`
  },
  {
    label: 'Abrir en Claude',
    icon: 'i-simple-icons:anthropic',
    target: '_blank',
    to: `https://claude.ai/new?q=${encodeURIComponent(`Lee ${mdPath.value} para que pueda hacerte preguntas sobre el contenido.`)}`
  }
]

async function copyPage() {
  isCopying.value = true
  copy(await $fetch<string>(`/raw${route.path}.md`))
  isCopying.value = false
}
</script>

<template>
  <UButtonGroup>
    <!-- <UButton
        label="Copiar página"
        :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
        color="neutral"
        variant="outline"
        :loading="isCopying"
        :ui="{
          leadingIcon: [copied ? 'text-primary' : 'text-neutral', 'size-3.5']
        }"
        @click="copyPage"
    /> -->
    <UButton
      label="Copiar varias URLs"
      :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
      color="neutral"
      variant="outline"
      :loading="isCopying"
      :ui="{
        leadingIcon: [copied ? 'text-primary' : 'text-neutral', 'size-3.5']
      }"
      @click="showCheckbox = true"
    />
    <UDropdownMenu
      :items="items"
      :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8
      }"
      :ui="{
        content: 'w-48'
      }"
    >
      <UButton
        icon="i-lucide-chevron-down"
        size="sm"
        color="neutral"
        variant="outline"
      />
    </UDropdownMenu>
  </UButtonGroup>
</template>
