package com.JeevanDanHospitals.ems.service;

import com.JeevanDanHospitals.ems.dto.PatientDto;

import java.util.List;

public interface PatientService {
    PatientDto createPatient(PatientDto patientDto);

    PatientDto getPatientsById(Long patientId);
    List<PatientDto> getAllPatients();

    PatientDto updatePatient(Long patientId, PatientDto updatedPatient );

    Void deletePatient(Long patientId);



}
