<script setup lang="ts">
import { Ref } from 'vue'
import { provide, ref } from 'vue'

interface TabContext {
  activeName: Ref<string | number>
  tabs: Ref<
    {
      name: string | number
      title?: string
      disabled?: boolean
    }[]
  >
}

const props = defineProps<{
  modelValue: string | number
}>()

const emit = defineEmits(['update:modelValue'])
const activeName = ref(props.modelValue)
const tabs = ref<{ name: string | number }[]>([])

provide('tabsContext', {
  activeName,
  tabs,
  updateActive: (name: string | number) => {
    activeName.value = name
    emit('update:modelValue', name)
  }
})
</script>
