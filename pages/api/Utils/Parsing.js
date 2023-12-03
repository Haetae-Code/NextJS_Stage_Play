//날짜 파싱
export function DateParse (timeArray) {
  for (let i = 0; i < timeArray.length; i++) {
    const dateRegex = /^(\d{4}-\d{2}-\d{2})/;
    const matchedDay = timeArray[i].view_date.match(dateRegex);
    tiemArray[i].view_date = matchedDay[1];
  }
  return timeArray; 
}