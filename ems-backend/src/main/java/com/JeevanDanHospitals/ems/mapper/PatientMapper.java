package com.JeevanDanHospitals.ems.mapper;

import com.JeevanDanHospitals.ems.dto.PatientDto;
import com.JeevanDanHospitals.ems.entity.Patient;

public class PatientMapper {
    public static PatientDto mapToPatientDto(Patient patient){
        return new PatientDto(
                patient.getId(),
                patient.getIndexNo(),
                patient.getFirstname(),
                patient.getLastname(),
                patient.getContactNo(),
                patient.getDOB(),
                patient.getGender(),
                patient.getAge(),
                patient.getBasicSymptoms()

        );
    }

    public static Patient mapToPatient(PatientDto patientDto){

        return new Patient(
                patientDto.getId(),
                patientDto.getIndexNo(),
                patientDto.getFirstname(),
                patientDto.getLastname(),
                patientDto.getContactNo(),
                patientDto.getDOB(),
                patientDto.getGender(),
                patientDto.getAge(),
                patientDto.getBasicSymptoms()

        );
    }

}
