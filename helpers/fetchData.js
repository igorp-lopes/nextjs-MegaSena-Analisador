async function fetchAPIData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}

export async function fetchOccurrences(query) {
  const url = "http://localhost:8000/occurrences";

  if (query) {
    url += '?startDate=' + query
  }

  const occurrencesJson = await fetchAPIData(url);

  return occurrencesJson;
}

export async function fetchEarliest(query) {
  const url = "http://localhost:8000/dates/earliest";

  if (query) {
    url += '?startDate=' + query
  }

  const earliestJson = await fetchAPIData(url);

  return earliestJson;
}

export async function fetchOldest(query) {
  const url = "http://localhost:8000/dates/oldest";

  if (query) {
    url += '?startDate=' + query
  }

  const oldestJson = await fetchAPIData(url);

  return oldestJson;
}
