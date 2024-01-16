export const BASE_URL = "http://172.105.40.83:8080/"
export const CONSTANTS = {
  authprefix: `api:BVaDN9hl`,
  
}

export const LOGIN_URL = `${BASE_URL}auth/login/email`
export const REGISTER_URL = `auth/register/email`
export const USER_PROFILE_URL = `${CONSTANTS.authprefix}/auth/profile`

/*** START ROLES & PERMISSIONS API URLS ***/
export const PERMISSIONS_URL = `${CONSTANTS.authprefix}/roles_permissions/permissions`
export const CREATE_ROLE_URL = `${CONSTANTS.authprefix}/roles_permissions/store_role`
export const GET_ROLES_URL = `${CONSTANTS.authprefix}/roles_permissions/roles`
export const GET_ROLE_URL = `${CONSTANTS.authprefix}/roles_permissions/role`
export const UPDATE_ROLE_URL = `${CONSTANTS.authprefix}/roles_permissions/update_role`
export const GET_PERMISSIONS_URL = `${CONSTANTS.authprefix}/roles_permissions/get_permissions`
export const GET_ROLE_PERMISSIONS_URL = `${CONSTANTS.authprefix}/roles_permissions/role_permissions`
export const GET_USER_PERMISSIONS_URL = `${CONSTANTS.authprefix}/roles_permissions/user_permissions`
export const ASSIGN_PERMISSIONS_URL = `${CONSTANTS.authprefix}/roles_permissions/assign_permissions`
export const DELETE_ROLE_URL = `${CONSTANTS.authprefix}/roles_permissions/delete_role`

/*** END ROLES & PERMISSIONS API URLS ***/

/*** START AGGREGATORS API URLS ***/
export const AGGREGATORS_URL = `${CONSTANTS.authprefix}/`

/*** END AGGREGATORS API URLS ***/

/*** START ORGANIZATIONS API URLS ***/
export const GET_ALL_ORGANIZATIONS_URL = `${CONSTANTS.authprefix}/organizations`
export const GET_ORGANIZATION_URL = `${CONSTANTS.authprefix}/organization`
export const ADD_ORGANIZATION_URL = `${CONSTANTS.authprefix}/organization/add`
export const UPDATE_ORGANIZATION_URL = `${CONSTANTS.authprefix}/organization/update`
export const DELETE_ORGANIZATION_URL = `${CONSTANTS.authprefix}/organization/delete`

/*** END ORGANIZATIONS API URLS ***/

/*** START COMPANIES API URLS ***/
export const GET_ALL_COMPANIES_URL = `${CONSTANTS.authprefix}/companies`
export const GET_COMPANY_URL = `${CONSTANTS.authprefix}/company`
export const ADD_COMPANY_URL = `${CONSTANTS.authprefix}/companies/add`
export const UPDATE_COMPANY_URL = `${CONSTANTS.authprefix}/companies/update`
export const DELETE_COMPANY_URL = `${CONSTANTS.authprefix}/company/delete`

/*** END COMPANIES API URLS ***/
