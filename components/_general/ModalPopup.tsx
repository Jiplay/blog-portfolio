// import React, { useState } from "react";
// import { Button, Modal, Form } from "react-bootstrap";
// import {Person, FormGenderReturnValue, createParents, createPeople} from '@/backend/models/models'
// import form from "./ButtonForm.module.css";

// interface PopupProps {
//   onReturnValue: (value: FormGenderReturnValue) => void;
// }

// const FormGender: React.FC<PopupProps> = ({ onReturnValue }) => {
//   const [showModal, setShowModal] = useState(true);
//   const [siblingsNumber, setSiblingsNumber] = useState(0);
//   const [childrenNumber, setChildrenNumber] = useState(0);
//   const [isParentChecked, setIsParentChecked] = useState(false);
//   const [selectedGender, setSelectedGender] = useState('');
//   const [returnValue, setReturnValue] = useState({ShowModal: false, PersonData: {
//     Gender: "Unknown",
//     Parents: [] as Person[],
//     Siblings: [] as Person[],
//     Children: [] as Person[],
//   }});

//   const handleGenderChange = (gender:string) => {
//     setSelectedGender(gender);
//   };

//   const handleSave = async () => {
//     const result : Person = {
//       Gender: selectedGender,
//       Parents: isParentChecked === true ? createParents() : [],
//       Children: childrenNumber !== 0 ? createPeople(childrenNumber) : createPeople(0),
//       Siblings: siblingsNumber !== 0 ? createPeople(siblingsNumber) : createPeople(0),
//     }
//     setShowModal(false)
//     const returnValue : FormGenderReturnValue = {
//       ShowModal:false,
//       PersonData: result,
//     }
//     setReturnValue(returnValue)
//     onReturnValue(returnValue);
//     }

//     if (!showModal) {
//       return (
//         <div>
//           <div className={form.overlay}>
//           </div> 
//         </div>
//       );
//     }

//   return (
//     <div>
//       <div className={form.overlay}>
//         <div className={form.modalContainer}>
//           <Modal.Header closeButton>
//             <h3 className={form.modalTitle}>Add people linked to this person</h3>
//           </Modal.Header>
//           <Modal.Body>
//           <label htmlFor="Number">Number of Siblings:</label>
//             <Form.Control
//               type="Number"
//               placeholder="0"
//               value={siblingsNumber}
//               onChange={(e) => {
//                 setSiblingsNumber(parseInt(e.target.value, 10));
//               }}
//               className={form.customInput}
//             />
//           <label htmlFor="Number">Number of Children:</label>
//             <Form.Control
//               type="Number"
//               placeholder="0"
//               value={childrenNumber}
//               onChange={(e) => {
//                 setChildrenNumber(parseInt(e.target.value, 10));
//               }}
//               className={form.customInput}
//             />
//             <Form.Check
//             type="checkbox"
//             label="Add parents"
//             checked={isParentChecked}
//             className={form.parents}
//             onChange={() => {
//                 setIsParentChecked(!isParentChecked);
//             }}
//             />
//             <Form.Check
//                 type="checkbox"
//                 label="F"
//                 checked={selectedGender === 'F'} // Vérifie si le genre sélectionné est 'F'
//                 onChange={() => handleGenderChange('F')} // Met à jour l'état en fonction de la sélection
//                 className={form.formCheckInline}
//             />
//             <Form.Check
//                 type="checkbox"
//                 label="M"
//                 checked={selectedGender === 'M'} // Vérifie si le genre sélectionné est 'M'
//                 onChange={() => handleGenderChange('M')} // Met à jour l'état en fonction de la sélection
//                 className={form.formCheckInline}
//             />

//         </Modal.Body>
//         <Modal.Footer>
//         <Button
//             variant="secondary"
//             onClick={() => {
//             handleSave();
//             }}
//             className={form.cancelButton} >Cancel
//             </Button>
//             <Button
//               variant="primary"
//               onClick={handleSave}
//               className={form.saveButton} >Save
//             </Button>
//           </Modal.Footer>
//         </div>
//       </div> 
//     </div>
//   );
// };

// export default FormGender;
