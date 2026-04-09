export async function apiGet(path) {
  try {
    const res = await fetch(path, { credentials: 'include' });
    const contentType = res.headers.get('content-type') || '';
    const text = await res.text();
    if (!res.ok) {
      throw new Error(`Request failed (${res.status}): ${text}`);
    }
    if (!contentType.includes('application/json')) {
      // Server returned non-JSON (often HTML index page). Surface a clearer error.
      throw new Error(`Expected JSON but received: ${text.slice(0, 300)}`);
    }
    try {
      return JSON.parse(text);
    } catch (err) {
      throw new Error(`Invalid JSON response: ${err.message}`);
    }
  } catch (err) {
    throw err;
  }
}

export async function apiPost(path, body) {
  try {
    const res = await fetch(path, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (err) {
    throw err;
  }
}

export async function apiPut(path, body) {
  try {
    const res = await fetch(path, {
      method: 'PUT',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
  } catch (err) {
    throw err;
  }
}

