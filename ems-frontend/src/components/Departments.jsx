import React from 'react';
import './Department.css';

const Departments = () => {

  const departmentpage= [
    {index:1, Name: 'Cardiology', Description: 'Focus on Heart health, Cardiovascular diseases, and prevention services provideed such as cardiac screenings, diagnostic tests, ECG, treatment for heart conditions(hypertension, coronary artery disease, arrhythmias),etc.'},
    {index:2, Name: 'Neurology', Description: 'Focus on diagnosis and treatment of disorders related to the nervous system, including the brain, Spinal cord and nerves. Services provided by neurology dept. suc as neurological consultations, diagnostic tests(MRI, CT scan, EEG), treatment for neurological conditions(epilepsy,stroke,multiple sclerosis,etc.), and neuro rehabilitation programs.'},
    {index:3, Name: 'Orthopedics', Description: 'Focus on the diagnosis and treatment of musculoskeletal conditions, including bones, joints, ligaments, tendons, and muscles. Services provided by orthopedics dept., such as orthopedic Consultations, diagnostic imaging(X-rays, MRI), orthopedic surgeries(Joint replacements, fracture repairs, arthroscopic procedures), Sports medicine, and physical therapy.'},
    {index:4, Name: 'Opthalmology', Description: 'Focus on eye health, vision care and treatment of eye-related disorders. SErvices provided such as comprehensive eye exams , vision correction, treatment for eye conditions(cataracts, glaucoma,macular degeneration) and eye care.'},
    {index:5, Name: 'Gynaecology', Description: ' Focus on Women Reproductive Health such as routine checkups, pregnancy care,enopause issues and treatment for gynecological issues'},
    {index:6, Name: 'Paediatric', Description: 'Focus on comprehensive healthcare for infants,children, ad adolescents.Services offered Routine check up and vaccinations,treatment of acute and chronic illness,growth and developent assets, nutritional counselling and support,emergency pediatric care'},
  
    {index:7, Name: 'ENT Specialization', Description: 'Focus on providing the expert care for conditions affecting the ear,nose,throat,head,and neck.Services offered diagnostic and treatment of ear infetions and hearing loss, management of sinusitis and nasal disorders, treatment for throat and voice disorders,Allergy Testing and Management'},
    {index:8, Name: 'Cancer', Description: 'Focus on providing the comprehensive and compassionate care to patients battling cancers.Services offered are comprehensive cancer screening and diagnostic service, chemotherapy,radiation therapy,immuotherapy,surgical oncology,palliativeand supportive care,genetic counselling and tesing, survivorship programs and follow up care.'},
  ];
  return (
    <div className = "department-page">
      <h1>Departments</h1>
      <ul className = "department-list">
        {departmentpage.map(dept =>(
          <li key = {dept.index} className="department-item">

            <h2>{dept.Name}</h2>
            <p>{dept.Description}</p>


          </li>
        ))}
        
         </ul>


    </div>
  
  )
}

export default Departments;
