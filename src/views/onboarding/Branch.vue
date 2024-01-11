<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Company Details">
        <VCardText class="d-flex">
          <!-- 👉 Avatar -->
          <VAvatar
            rounded="lg"
            size="100"
            class="me-6"
            :image="accountDataLocal.avatarImg"
          />

          <!-- 👉 Upload Photo -->
          <form class="d-flex flex-column justify-center gap-5">
            <div class="d-flex flex-wrap gap-2">
              <VBtn
                color="primary"
                @click="refInputEl?.click()"
              >
                <VIcon
                  icon="mdi-cloud-upload-outline"
                  class="d-sm-none"
                />
                <span class="d-none d-sm-block">Upload company logo</span>
              </VBtn>

              <input
                ref="refInputEl"
                type="file"
                name="file"
                accept=".jpeg,.png,.jpg,GIF"
                hidden
                @input="changeAvatar"
              >

              <VBtn
                type="reset"
                color="error"
                variant="tonal"
                @click="resetAvatar"
              >
                <span class="d-none d-sm-block">Reset</span>
                <VIcon
                  icon="mdi-refresh"
                  class="d-sm-none"
                />
              </VBtn>
            </div>

            <p class="text-body-1 mb-0">
              Allows JPG, GIF, or PNG. Max size of 800K
            </p>
          </form>
        </VCardText>

        <VDivider />

        <VCardText>
          <!-- 👉 Form -->
          <VForm class="mt-6">
            <VRow>
              <!-- ... (Other fields remain unchanged) ... -->

              <!-- 👉 Country -->
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountDataLocal.name"
                  label="Company Name"
                />
              </VCol>

              <!-- 👉 Organization -->
              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="accountDataLocal.organization"
                  label="Select the Company"
                  :items="organizationOptions"
                  outlined
                  clearable
                  creatable
                  create-item-text="Create Organization"
                />
              </VCol>

              <!-- 👉 Region -->
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountDataLocal.region"
                  label="Region"
                />
              </VCol>

              <!-- 👉 Location -->
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="accountDataLocal.location"
                  label="Location"
                />
              </VCol>

              <!-- ... (Other fields remain unchanged) ... -->

              <!-- 👉 Form Actions -->
            

              <!-- 👉 Form Actions -->
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="12">
      <VCard title="Branch admin details">
        <VCardText class="d-flex flex-column gap-4">
          <!-- First Name -->
          <VTextField
            v-model="companyAdminData.first_name"
            label="First Name"
            outlined
            class="mb-4"
          />
    
          <!-- Last Name -->
          <VTextField
            v-model="companyAdminData.last_name"
            label="Last Name"
            outlined
            class="mb-4"
          />
    
          <!-- User Company ID -->
          <VTextField
            v-model="companyAdminData.user_company_id"
            label="User Company ID"
            type="number"
            outlined
            class="mb-4"
          />
    
          <!-- Email -->
          <VTextField
            v-model="companyAdminData.email"
            label="Email"
            type="email"
            outlined
            class="mb-4"
          />
    
          <!-- Password -->
          <VTextField
            v-model="companyAdminData.password"
            label="Password"
            type="password"
            outlined
            class="mb-4"
          />
    
          <!-- Phone -->
          <VTextField
            v-model="companyAdminData.phone"
            label="Phone"
            outlined
            class="mb-4"
          />
        </VCardText>
      </VCard>
    </VCol>
    
    
    <VCol
      cols="12"
      class="d-flex flex-wrap gap-4"
    >
      <VBtn>Save changes</VBtn>

      <VBtn
        color="secondary"
        variant="tonal"
        type="reset"
        @click.prevent="resetForm"
      >
        Reset
      </VBtn>
    </VCol>
  </VRow>
</template>

<script setup>
import avatar1 from '@images/avatars/avatar-1.png'

const companyAdminData = ref({
  name: '',
  email: '',
  password: '',
  active: false,
})

const accountData = {
  avatarImg: avatar1,
  firstName: 'john',
  lastName: 'Doe',
  email: 'johnDoe@example.com',
  org: 'ThemeSelection',
  phone: '+1 (917) 543-9876',
  address: '123 Main St, New York, NY 10001',
  state: 'New York',
  zip: '10001',
  country: 'USA',
  language: 'English',
  timezone: '(GMT-11:00) International Date Line West',
  currency: 'USD',
}

const refInputEl = ref()
const accountDataLocal = ref(structuredClone(accountData))
const isAccountDeactivated = ref(false)

const resetForm = () => {
  accountDataLocal.value = structuredClone(accountData)
}

const changeAvatar = file => {
  const fileReader = new FileReader()
  const { files } = file.target
  if (files && files.length) {
    fileReader.readAsDataURL(files[0])
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        accountDataLocal.value.avatarImg = fileReader.result
    }
  }
}

// reset avatar image
const resetAvatar = () => {
  accountDataLocal.value.avatarImg = accountData.avatarImg
}
</script>
