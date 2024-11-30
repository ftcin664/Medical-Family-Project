import "./FamilyTreePage.scss";
import React, { useEffect, useRef, useState } from 'react'
import MemberModal from "../MemberModal/MemberModal";
import CommonModal from "../CommonModal/CommonModal";
import { useNavigate } from "react-router-dom";
import { fileUploadApi } from "../../utils/fileUpload";
import { END_POINTS } from "../../common/endPoints";
import { getApiRequest } from "../../utils/getApiRequest";
import MyFamilyTree from "../FamilyTree/FamilyTree";
import AddMember from "./AddMember";
import { postApiRequest } from "../../utils/postRequest";
import { toast } from 'react-toastify';

const FamilyTreePage = () => {
    const [members, setMembers] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [modalShow, setModalShow] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [addMember, setAddMember] = useState(false);

    const handleOpenInfo = (userId) => {
        const _selectedUser = members.find(member => member.id == userId);
        setSelectedUser(_selectedUser);
        setModalShow(true);
    };

    const handleSubmit = async (formData) => {
        const form = new FormData();
        form.append("email", formData.email);
        form.append("relationship_type", formData.relationship_type);
        if(formData.is_linked == false) {
            try {
                const response = await postApiRequest(END_POINTS.ADD_MEMBER, form);
                if (response.status == 200) {
                    setAddMember(false);
                    toast.success(`Invite succuss ${formData.email} as ${formData.relationship_type}`)
                    // Optionally, refresh members or perform other actions
                } else {
                    // Handle error
                    toast.error(`Invitation Error`)
                }
            } catch(err){
                toast.error(`Invitation Error`)
            }
        } else {
            form.append("fullName", formData.fullName);
            form.append("linkedAccount", formData.linkedAccounts);
            form.append("relation", formData.relation);
            form.append("mobileNumber", formData.mobileNumber);
           
            form.append("country", formData.country);
            form.append("city", formData.city);
            form.append("dob", formData.dob);
            form.append("gender", formData.gender);
            // form.append("image", selectedImage)
    
            const response = await fileUploadApi(END_POINTS.ADD_MEMBER, form);
            if (response.success) {
                setAddMember(false);
                // Optionally, refresh members or perform other actions
            } else {
                // Handle error
            }
        }
    };

    useEffect(() => {
        async function fetchMembers() {
            const storedDataString = localStorage.getItem('user');
            if (storedDataString) {
                const parsedData = JSON.parse(storedDataString);
                const userId = parsedData._id;
                // response.allRelatives
                setMembers([{ ...parsedData, year: new Date(parsedData.dob).getFullYear() }]);
                // const response = await getApiRequest(END_POINTS.GET_RELATIONS + userId);
                // if (response.success) {
                //     setMembers(_members => [..._members]);
                // }
            }
        }
        fetchMembers();
    }, []);

    // useEffect(() => {
    //     async function fetchMembers(params) {
    //         const storedDataString = localStorage.getItem('user');
    //         if (storedDataString) {
    //             const parsedData = JSON.parse(storedDataString);
    //             const userId = parsedData._id;
    //             setMembers([{...parsedData, year: new Date(parsedData.dob).getFullYear()}])
    //             try {
    //                 const response = await getApiRequest(END_POINTS.GET_RELATIONS + userId);
    //                 if (response.success) {
    //                     setMembers(response.allRelatives)
    //                 } else {

    //                 }
    //             } catch (error) {

    //             }
    //         }
    //     }
    //     fetchMembers()
    // }, [])


    return (
        <>
            {!addMember ? (
                <>
                    <div style={{ height: '100%' }}>
                        {members.length > 0 && (
                            <MyFamilyTree nodes={members} openInfo = {handleOpenInfo} onAdd={setAddMember} />
                        )}
                    </div>
                </>
            ) : (
                <>
                    <AddMember handleSubmit={handleSubmit}/>
                </>
            )}

            <MemberModal selectedUser={selectedUser}  handleDelete={() => { setModalShow(false); setShowDelete(true) }} handleEdit={() => { setShowEdit(true), setModalShow(false) }} show={modalShow}
                onHide={() => setModalShow(false)} />
            {/* <CommonModal title="Report Member" subTitle="Confirm Report this family member?" submitBtnTxt='Report' show={showEdit} onHide={() => setShowEdit(false)} >
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="fullName">
                        Reason
                    </label>
                    <textarea placeholder="Description" class="form-control min-100" id="exampleFormControlTextarea1" rows="3"></textarea>
                    {errors.fullName && (
                      <div className="invalid-feedback d-block">
                        {errors.fullName}
                      </div>
                    )}
                </div>
            </CommonModal>
            <CommonModal title="Delete Member" subTitle="Confirm delete this family member?" submitBtnTxt='Report' show={showDelete} onHide={() => setShowDelete(false)} /> */}
        </>
    );
}

export default FamilyTreePage
