//검색 포맷 검사
export async function FormatStudentID (studentID) 
{
  const studentIDRegex = /^[0-9]{8}$/;
  return studentIDRegex.test(studentID) ? studentID : null;
}

export async function FormatPhoneNumber(phone_number) {
  const phoneNumberRegex = /^01(?:0|1|[6-9])-(\d{3}|\d{4})-\d{4}$/;

  if (!phoneNumberRegex.test(phone_number)) {
    // If '-' is not present, add it to the phoneNumber
    const formattedPhoneNumber = phone_number.replace(/(\d{3})(\d{4})(\d{4})/, '010-$1-$2-$3');
    
    return phoneNumberRegex.test(formattedPhoneNumber) ? formattedPhoneNumber : null;
  }

  return formattedPhoneNumberWithDashes(phone_number);
}

function formattedPhoneNumberWithDashes(phone_number) {
  // Format the phone number to have dashes
  return phone_number.replace(/(\d{3})(\d{4})(\d{4})/, '010-$1-$2-$3');
}

const departmentListFile = '../../../public/data/departmentList.js';
export async function FormatDepartment(department) {
  try {
    const response = await fetch(departmentListFile);
    const departmentList = await response.json();

    if (department === '모두' || departmentList.includes(department)) {
      return department;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching department list:', error);
    return null;
  }
}
