package com.JeevanDanHospitals.ems.dto;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class PatientDto {
    private long id;
    private Long IndexNo;
    private String firstname;
    private String lastname;
    private Long ContactNo  ;
    private String DOB;
    private String Gender;
    private int Age;
    private String BasicSymptoms;

}
