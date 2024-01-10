<script setup>
import Pages1 from '@images/aggregator.png'
import Pages2 from '@images/champion.png'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const aggregatorDialogVisible = ref(false)
const championDialogVisible = ref(false)

const router = useRouter()

const openAggregatorDialog = () => {
  aggregatorDialogVisible.value = true
}

const openChampionDialog = () => {
  championDialogVisible.value = true
}

const closeAggregatorDialog = () => {
  aggregatorDialogVisible.value = false
}

const closeChampionDialog = () => {
  championDialogVisible.value = false
}

const redirectToAggregatorSingleBranch = () => {
  router.push('/onboard-aggregators-single')
  closeAggregatorDialog()
}

const redirectToAggregatorMultiBranch = () => {
  router.push('/onboard-aggregators-multiple')
  closeAggregatorDialog()
}

const redirectToChampionSingleBranch = () => {
  router.push('/onboard-champions-single')
  closeChampionDialog()
}

const redirectToChampionMultiBranch = () => {
  router.push('/onboard-champions-multiple')
  closeChampionDialog()
}
</script>

<template>
  <VRow>
    <!-- Aggregator Card -->
    <VCol cols="12" sm="6" md="4">
      <VCard>
        <VImg :src="Pages1" cover />

        <VCardItem>
          <VCardTitle>Aggregator</VCardTitle>
          <div class="d-flex flex-column align-center pt-8">
            <VBtn @click="openAggregatorDialog">
              Onboard
            </VBtn>
          </div>
        </VCardItem>
      </VCard>
    </VCol>

    <!-- Champion Card -->
    <VCol cols="12" sm="6" md="4">
      <VCard>
        <VImg :src="Pages2" cover />
    
        <VCardItem>
          <VCardTitle>Champion</VCardTitle>
          <div class="d-flex flex-column align-center pt-8">
            <VBtn @click="openChampionDialog">
              Onboard
            </VBtn>
          </div>
        </VCardItem>
      </VCard>
    </VCol>
  </VRow>

  <!-- Aggregator Dialog -->
  <VDialog v-model="aggregatorDialogVisible" max-width="400">
    <VCard>
      <VCardText>
        <VRow>
          <VCol cols="12">
            <VTypography class="text-h6">
              Does the company have only one branch? (Aggregator)
            </VTypography>
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions class="d-flex justify-end">
        <VBtn @click="redirectToAggregatorMultiBranch" color="error">
          No
        </VBtn>
        <VBtn @click="redirectToAggregatorSingleBranch" color="success">
          Yes
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <!-- Champion Dialog -->
  <VDialog v-model="championDialogVisible" max-width="400">
    <VCard>
      <VCardText>
        <VRow>
          <VCol cols="12">
            <VTypography class="text-h6">
              Does the company have only one branch? (Champion)
            </VTypography>
          </VCol>
        </VRow>
      </VCardText>

      <VCardActions class="d-flex justify-end">
        <VBtn @click="redirectToChampionMultiBranch" color="error">
          No
        </VBtn>
        <VBtn @click="redirectToChampionSingleBranch" color="success">
          Yes
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
