async function fetchAPIData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}

export async function fetchOccurrences(startDate) {
  var url = "http://localhost:8000/occurrences";

  if (startDate) {
    // We adjust the date format for the get request
    startDate = startDate.replaceAll('/', '-')
    url += '?startDate=' + startDate
  }

  const occurrencesJson = await fetchAPIData(url);

  return occurrencesJson;
}

export async function fetchEarliest(startDate) {
  var url = "http://localhost:8000/dates/earliest";

  if (startDate) {
    // We adjust the date format for the get request
    startDate = startDate.replaceAll('/', '-')
    url += '?startDate=' + startDate
  }

  const earliestJson = await fetchAPIData(url);

  return earliestJson;
}

export async function fetchOldest(startDate) {
  var url = "http://localhost:8000/dates/oldest";

  if (startDate) {
    // We adjust the date format for the get request
    startDate = startDate.replaceAll('/', '-')
    url += '?startDate=' + startDate
  }

  const oldestJson = await fetchAPIData(url);

  return oldestJson;
}
