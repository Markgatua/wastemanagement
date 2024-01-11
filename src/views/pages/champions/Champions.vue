<script setup>
const desserts = [
  {
    dessert: 'Frozen Yogurt',
    calories: 159,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Ice cream sandwich',
    calories: 237,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Eclair',
    calories: 262,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Cupcake',
    calories: 305,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
  {
    dessert: 'Gingerbread',
    calories: 356,
    fat: 6,
    carbs: 24,
    protein: 4,
  },
]
</script>

<template>
  <VTable
    height="250"
    flat
    fixed-header
    elevation="0"
  >
    <thead>
      <tr>
        <th class="text-uppercase">
          Company Name
        </th>
        <th class="text-uppercase text-center">
          Organization
        </th>
        <th class="text-uppercase text-center">
          Transactions
        </th>
        <th class="text-uppercase text-center">
          Location
        </th>
        <th class="text-uppercase text-center">
          Admin
        </th>
        <th class="text-uppercase text-center">
          View
        </th>
        <th class="text-uppercase text-center">
          Users
        </th>
      </tr>
    </thead>

    <tbody>
      <tr
        v-for="item in desserts"
        :key="item.dessert"
      >
        <td>
          {{ item.dessert }}
        </td>
        <td class="text-center">
          {{ item.calories }}
        </td>
        <td class="text-center">
          {{ item.fat }}
        </td>
        <td class="text-center">
          {{ item.carbs }}
        </td>
        <td class="text-center">
          {{ item.protein }}
        </td>
        <td class="text-center">
          <VBtn
            flat
            color="transparent"
          >
            ...
          </VBtn>
        </td>
        <td class="text-center">
          <VBtn
            flat
            color="transparent"
          >
            <VIcon>
              mdi-account-group
            </VIcon>
          </VBtn>
        </td>
      </tr>
    </tbody>
  </VTable>
</template>

<style scope>
.VTable {
  box-shadow: none;
}
</style>
