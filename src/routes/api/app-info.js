const client_id = import.meta.env.VITE_CLIENT_ID;
export function get(request) {
  if (!client_id) {
    return {
      status: 500,
      body: {
        error: 'VITE_CLIENT_ID is undefined'
      }
    }
  } else {
    return {
      body: {
        client_id
      }
    }
  }
}
