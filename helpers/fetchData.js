async function fetchAPIData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}

export async function fetchOccurrences() {
  const url = "localhost:8000/recurrence";

  const occurrencesJson = await fetchAPIData(url);

  return occurrencesJson;
}

export async function fetchEarliest() {
  const url = "localhost:8000/dates/earliest";

  const earliestJson = await fetchAPIData(url);

  return earliestJson;
}

export async function fetchOldest() {
  const url = "localhost:8000/dates/oldest";

  const oldestJson = await fetchAPIData(url);

  return oldestJson;
}
