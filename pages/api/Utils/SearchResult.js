// 공연 예약자 검색
import { FormatStudentID, FormatPhoneNumber, FormatDepartment } from './FormCheck.js';

export async function getAudience(Audience, searchName, searchStudentNumber, searchDepartment, searchPhoneNumber) {
  try {
    let formattedStudentID = '';
    let formattedPhoneNumber = '';
    let departmentList = [];

    if (searchStudentNumber) {
      formattedStudentID = await FormatStudentID(searchStudentNumber);
      if (!formattedStudentID) {
        window.alert('학번 형식이 맞지 않습니다. \nex:20231234');
        return null;
      }
    }

    if (searchPhoneNumber) {
      formattedPhoneNumber = await FormatPhoneNumber(searchPhoneNumber);
      if (!formattedPhoneNumber) {
        window.alert('전화번호 형식이 맞지 않습니다. \n010-1234-5678 또는 01012345678');
        return null;
      }
    }

    if (searchDepartment) {
      departmentList = await FormatDepartment(searchDepartment);
      if (!departmentList) {
        window.alert('학과를 다시 선택해주세요');
        return null;
      }
    }

    const filteredAudience = Audience.filter(audience => {
      const filters = [];

      if (formattedStudentID) {
        filters.push(audience.id === formattedStudentID);
      }
    
      if (searchName) {
        filters.push(audience.name === searchName);
      }
    
      if (searchDepartment) {
        if (searchDepartment === '모두') {
          filters.push(audience.department !== null);
        } else {
          filters.push(audience.department === searchDepartment);
        }
      }
    
      if (formattedPhoneNumber) {
        filters.push(audience.phone_number === formattedPhoneNumber);
      }
    
      return filters.some(filter => filter);
    });

    return filteredAudience;
  } catch (error) {
    console.error('Error in searchAudience:', error);
    throw error;
  }
}