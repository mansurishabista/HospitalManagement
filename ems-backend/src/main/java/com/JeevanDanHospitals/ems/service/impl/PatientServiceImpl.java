package com.JeevanDanHospitals.ems.service.impl;

import com.JeevanDanHospitals.ems.dto.PatientDto;
import com.JeevanDanHospitals.ems.entity.Patient;
import com.JeevanDanHospitals.ems.exception.ResourceNotFoundException;
import com.JeevanDanHospitals.ems.mapper.PatientMapper;
import com.JeevanDanHospitals.ems.repository.PatientRepository;
import com.JeevanDanHospitals.ems.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class PatientServiceImpl implements PatientService {

    private PatientRepository patientrepository;
    @Override

    public PatientDto createPatient(PatientDto patientDto) {
        Patient patient = PatientMapper.mapToPatient(patientDto);
        Patient savedpatient = patientrepository.save(patient);

        return PatientMapper.mapToPatientDto(savedpatient);
    }

    @Override
    public PatientDto getPatientsById(Long patientId) {
        Patient patient = patientrepository.findById(patientId)
                .orElseThrow(() -> new ResourceNotFoundException(" Patient does not exist with provided ID : "+ patientId));

        return PatientMapper.mapToPatientDto(patient);
    }

    @Override
    public List<PatientDto> getAllPatients() {
        List<Patient>  patients = patientrepository.findAll();

        return patients.stream().map((patient -> PatientMapper.mapToPatientDto(patient)))
                .collect(Collectors.toList());
    }

    @Override
    public PatientDto updatePatient(Long patientId, PatientDto updatedPatient) {
        Patient patient = patientrepository.findById(patientId).orElseThrow(
                ()-> new ResourceNotFoundException(" Patient is not exist with given ID: "+ patientId)
        );
        patient.setIndexNo(updatedPatient.getIndexNo());
        patient.setFirstname(updatedPatient.getFirstname());
        patient.setLastname(updatedPatient.getLastname());
        patient.setContactNo(updatedPatient.getContactNo());
        patient.setDOB(updatedPatient.getDOB());
        patient.setGender(updatedPatient.getGender());
        patient.setAge(updatedPatient.getAge());
        patient.setBasicSymptoms(updatedPatient.getBasicSymptoms());

        Patient updatedPatientObj = patientrepository.save(patient);
        return PatientMapper.mapToPatientDto(updatedPatientObj);
    }

    @Override
    public Void deletePatient(Long patientId) {

        Patient patient = patientrepository.findById(patientId).orElseThrow(
                ()-> new ResourceNotFoundException(" Patient is not exist with given ID: "+ patientId)
        );
        patientrepository.deleteById(patientId);

        return null;
    }
}
