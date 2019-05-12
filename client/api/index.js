import axios from 'axios';

export async function getSessionIdByToken(token) {
  if (typeof token !== 'string' || !/^[\w-]+$/.test(token)) {
    return '';
  }

  const response = await axios(`/api/login?token=${token}`, {
    responseType: 'json'
  });

  return response && response.data && response.data.Authentication;
}

export async function fetchThemes(sessionId) {
  const response = await axios('/api/themes', {
    responseType: 'json',
    params: {
      namespace_code: 'board_tuesday'
    },
    headers: {
      authentication: sessionId
    }
  });

  return response && response.data && response.data.result;
}
