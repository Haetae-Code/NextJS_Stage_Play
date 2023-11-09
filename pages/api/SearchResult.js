export async function handler (Audience, searchName, searchNumber, 
  searchDepartment, searchPhone) 
{
  let result;
  if (Audience) {
    if (searchName) {
        result.push = Audience.filter(ad => ad.name === searchName)
      }

    if (searchNumber) {
      result.push = Audience.filter(ad => ad.id === searchNumber)
    }

    if (searchDepartment) {
      if (searchDepartment == "모두") {
        result.push = Audience.filter(ad => ad.department)
      }
      else {
        result.push = Audience.filter(ad => ad.department === searchDepartment) 
      }
    }

    if (searchPhone) {
      result.push = Audience.filter(ad => ad.phone_number === searchPhone)
    }
  }
  else {
    window.alert("다시 검색해주세요.");
    return;
  }

  return result;
}