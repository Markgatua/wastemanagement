import axios from "axios"
import httpClient from "./httpClient"
import {
  BASE_URL,
  LOGIN_URL,
  REGISTER_URL,
  USER_PROFILE_URL,
  ADD_ORGANIZATION_URL,
  GET_ALL_ORGANIZATIONS_URL,
  GET_ORGANIZATION_URL,
  UPDATE_ORGANIZATION_URL,
  DELETE_ORGANIZATION_URL,
  ADD_COMPANY_URL,
  GET_ALL_COMPANIES_URL,
  GET_COMPANY_URL,
  UPDATE_COMPANY_URL,
  DELETE_COMPANY_URL,
} from "@/API/urls"


export async function loginHandler(payload) {
  // const response = await httpClient.post(LOGIN_URL, payload)
  const config = {
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    timeout: 5000,
    data: payload,
  }

  await axios.post(LOGIN_URL, config)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error('Error trying to log in:', error)
    })
}
  
export async function loggedUser(AuthToken) {
  try {
    const response = await httpClient.get(
      `${USER_PROFILE_URL}?authtoken=${AuthToken}`,
    )
    
    return response.data
  } catch (error) {
    console.error("Error fetching logged in user data:", error)
    throw error
  }
}

export async function registerUser(payload) {
  try {
    const response = await httpClient.post(REGISTER_URL, payload)
    
    return response.data
  } catch (error) {
    console.error("Error registering user:", error)
    throw error
  }
}

export async function getAggregators() {
  try {
    const response = await httpClient.get(ADMIN_USERS_URL)
    
    return response.data
  } catch (error) {
    console.error("Error while fetching admin users:", error)
    throw error
  }
}


//ORGANIZATIONS
export async function addOrganization(payload) {
  try {
    const response = await httpClient.post(ADD_ORGANIZATION_URL, payload)

    return response.data
  } catch (error) {
    console.error("Error adding a new organization:", error)
    throw error
  }
}

export async function getOrganizations() {
  try {
    const response = await httpClient.get(GET_ALL_ORGANIZATIONS_URL)

    return response.data
  } catch (error) {
    console.error("Error while fetching organization data:", error)

    throw error
  }
}

export async function getOrganization(id) {
  try {
    const response = await httpClient.get(`${GET_ORGANIZATION_URL}/${id}`)

    return response.data
  } catch (error) {
    console.error(`Error while fetching organization ${id} data:`, error)

    throw error
  }
}

export async function updateOrganization(payload) {
  try {
    const response = await httpClient.put(UPDATE_ORGANIZATION_URL, payload)

    return response.data
  } catch (error) {
    console.error("Error updating organization:", error)

    throw error
  }
}

export async function deleteOrganization(id) {
  try {
    const response = await httpClient.delete(`${DELETE_ORGANIZATION_URL}/${id}`)

    return response.data
  } catch (error) {
    console.error("Error deleting organization:", error)

    throw error
  }
  
}

//COMPANIES
export async function addCompany(payload) {
  try {
    const response = await httpClient.post(ADD_COMPANY_URL, payload)

    return response.data
  } catch (error) {
    console.error("Error adding a new company:", error)
    throw error
  }
}

export async function getCompanies() {
  try {
    const response = await httpClient.get(GET_ALL_COMPANIES_URL)

    return response.data
  } catch (error) {
    console.error("Error while fetching companies data:", error)

    throw error
  }
}

export async function getCompany(id) {
  try {
    const response = await httpClient.get(`${GET_COMPANY_URL}/${id}`)

    return response.data
  } catch (error) {
    console.error(`Error while fetching company ${id} data:`, error)

    throw error
  }
}

export async function updateCompany(payload) {
  try {
    const response = await httpClient.put(UPDATE_COMPANY_URL, payload)

    return response.data
  } catch (error) {
    console.error("Error updating company:", error)

    throw error
  }
}

export async function deleteCompany(id) {
  try {
    const response = await httpClient.delete(`${DELETE_COMPANY_URL}/${id}`)

    return response.data
  } catch (error) {
    console.error("Error deleting company:", error)

    throw error
  }
}
