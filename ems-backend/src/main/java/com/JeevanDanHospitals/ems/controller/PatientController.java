package com.JeevanDanHospitals.ems.controller;

import com.JeevanDanHospitals.ems.dto.PatientDto;
import com.JeevanDanHospitals.ems.service.PatientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor

@RestController
@RequestMapping("/api/patients")
public class PatientController {

    private PatientService patientService;

    //Build Add Patient REST API
    @PostMapping

    public ResponseEntity<PatientDto> createPatient( @RequestBody PatientDto patientDto){

       PatientDto savedPatient =  patientService.createPatient(patientDto);
               return new ResponseEntity<>(savedPatient, HttpStatus.CREATED);

    }

    //Build Get Employee REST API
    @GetMapping("{id}")

    public ResponseEntity<PatientDto> getPatientById(@PathVariable("id") Long patientId){
      PatientDto patientDto = patientService.getPatientsById(patientId);
        return ResponseEntity.ok(patientDto);

    }

    //Build Get All Employee REST API
    @GetMapping
    public ResponseEntity<List<PatientDto>> getAllPatients(){
         List<PatientDto> patient = patientService.getAllPatients();
         return ResponseEntity.ok(patient);
    }

    //Build update patient REST API
    @PutMapping("{id}")
    public ResponseEntity<PatientDto> updatePatient(@PathVariable("id") Long patientId, @RequestBody PatientDto updatedPatient){
        PatientDto patientDto = patientService.updatePatient(patientId,updatedPatient );
        return ResponseEntity.ok(patientDto);
    }

    // Build Delete Patient REST API
    @DeleteMapping("{id}")

    public ResponseEntity<String> deletePatient(@PathVariable("id") Long patientId){
        patientService.deletePatient(patientId);
        return ResponseEntity.ok("Yippeeeeeee...!!! Patient is Gone ");

    }

}
