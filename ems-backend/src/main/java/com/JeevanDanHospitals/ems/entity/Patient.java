package com.JeevanDanHospitals.ems.entity;

import jakarta.persistence.*;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name= " pa")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "Index_no")
    private Long IndexNo;
    @Column(name = "first_name")
    private String firstname;
    @Column(name = "last_name")
    private String lastname;
    @Column(name = "contact_no")
    private Long ContactNo  ;
    @Column(name = "DOB")
    private String DOB;
    @Column(name = "gender")
    private String Gender;
    @Column(name = "Age")
    private int Age;
    @Column(name = "basic_symptoms")
    private String BasicSymptoms;



}
