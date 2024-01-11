import httpClient from "./httpClient"
import {
  LOGIN_URL,
  USER_PROFILE_URL,
} from "@/API/urls"

export async function loginHandler(payload) {
  const response = await httpClient.post(LOGIN_URL, payload)
  
  return response.data
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
