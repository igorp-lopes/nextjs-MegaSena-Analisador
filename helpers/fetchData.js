function sortJsonByDate(json, ascending) {
  var sortingFunction;
  if (ascending) {
    sortingFunction = (a, b) => {
      var [day1, month1, year1] = a.Data.split("-");
      var [day2, month2, year2] = b.Data.split("-");
      return new Date(year1, month1, day1) - new Date(year2, month2, day2);
    };
  } else {
    sortingFunction = (a, b) => {
      var [day1, month1, year1] = a.Data.split("-");
      var [day2, month2, year2] = b.Data.split("-");
      return new Date(year2, month2, day2) - new Date(year1, month1, day1);
    };
  }

  const sortedJson = json.sort(sortingFunction);

  return sortedJson;
}

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

  var occurrencesJson = await fetchAPIData(url);

  occurrencesJson = occurrencesJson.sort(function (a, b) {
    return b.ocorrencias - a.ocorrencias;
  });

  return occurrencesJson;
}

export async function fetchEarliest(startDate) {
  var url = "http://localhost:8000/dates/earliest";

  if (startDate) {
    // We adjust the date format for the get request
    startDate = startDate.replaceAll('/', '-')
    url += '?startDate=' + startDate
  }

  var earliestJson = await fetchAPIData(url);

  earliestJson = sortJsonByDate(earliestJson, false);

  return earliestJson;
}

export async function fetchOldest(startDate) {
  var url = "http://localhost:8000/dates/oldest";

  if (startDate) {
    // We adjust the date format for the get request
    startDate = startDate.replaceAll('/', '-')
    url += '?startDate=' + startDate
  }

  var oldestJson = await fetchAPIData(url);

  oldestJson = sortJsonByDate(oldestJson, true);

  return oldestJson;
}
