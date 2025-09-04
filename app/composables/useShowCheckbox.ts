import { ref } from 'vue'

export const showCheckbox = ref(false)
export function useShowCheckbox() {
  return { showCheckbox }
}
