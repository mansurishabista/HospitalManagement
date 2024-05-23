package com.JeevanDanHospitals.ems.repository;


import com.JeevanDanHospitals.ems.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatientRepository extends JpaRepository <Patient, Long>{


}
