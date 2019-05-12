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

export async function fetchThemes(authentication) {
  const response = await axios('/api/themes', {
    responseType: 'json',
    params: {
      namespace_code: 'board_tuesday'
    },
    headers: {
      authentication
    }
  });

  return response && response.data && response.data.results;
}

export async function getUserInfo(authentication) {
  const response = await axios('/api/me', {
    responseType: 'json',
    headers: {
      authentication
    }
  });

  return response && response.data && response.data.results;
}
