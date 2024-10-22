//데이타 포맷 검사
import { departmentList } from "../../../public/data/departmentList.js";

//학번
export async function FormatStudentID (studentID) 
{
  const studentIDRegex = /^[0-9]{8}$/;
  return studentIDRegex.test(studentID) ? studentID : null;
}

//전화번호
export async function FormatPhoneNumber(phone_number) {
  const phoneNumberRegex = /^01(?:0|1|[6-9])-(\d{3}|\d{4})-\d{4}$/;

  if (phone_number.replace(/\D/g, '').length !== 11) {
    return null; // Return null for invalid 11-digit numbers
  }

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

//학과
export async function FormatDepartment(department) {
  try {
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
