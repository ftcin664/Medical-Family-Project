import "./FamilyTreePage.scss";
import React, { useEffect, useRef, useState } from 'react'
import UserImage1 from "../../assets/images/TreeUsers/user1.png";
import UserImage2 from "../../assets/images/TreeUsers/user2.png";
import UserImage3 from "../../assets/images/TreeUsers/user3.png";
import UserImage4 from "../../assets/images/TreeUsers/user4.png";
import UserImage5 from "../../assets/images/TreeUsers/user5.png";
import UserImage6 from "../../assets/images/TreeUsers/user6.png";
import TreeCard from "../TreeCard/TreeCard";
import { Col, Form, Row } from 'react-bootstrap';
import user from "../../assets/images/people.svg";
import { Typeahead } from 'react-bootstrap-typeahead';
import ProfileSelector from "../ProfileSelector/ProfileSelector";
import MemberModal from "../MemberModal/MemberModal";
import CommonModal from "../CommonModal/CommonModal";
import { useNavigate } from "react-router-dom";
import { fileUploadApi } from "../../utils/fileUpload";
import { END_POINTS } from "../../common/endPoints";
import { getApiRequest } from "../../utils/getApiRequest";
import MyFamilyTree from "../FamilyTree/FamilyTree";

const users = [
    {
        id: 1,
        image: UserImage1,
        name: 'Alber John',
        address: '1970, Hamburg Riyana John',
    },
    {
        id: 2,
        image: UserImage2,
        name: 'Clay John',
        address: '1970, Hamburg Riyana John',
    },
    {
        id: 3,
        image: UserImage3,
        name: 'Alber John',
        address: '1970, Hamburg Riyana John',
    },

    {
        id: 4,
        image: UserImage4,
        name: 'Alber John',
        address: '1970, Hamburg Riyana John',
    },
    {
        id: 5,
        image: UserImage5,
        name: 'Alber John',
        address: '1970, Hamburg Riyana John',
    },
    {
        id: 6,
        image: UserImage6,
        name: 'Alber John',
        address: '1970, Hamburg Riyana John',
    },
]
const FamilyTreePage = () => {
    const [members, setMembers] = useState([])
    const [showDelete, setShowDelete] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);
    const [relation, setRelation] = useState([]);
    const [linkedAccounts, setLinkedAccounts] = useState([])
    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);
    const [addMember, setAddMember] = useState(false);
    const navigate = useNavigate();

    const handleImageClick = () => {
        console.log("handleImageClick")
        fileInputRef.current.click();
    };

    const handleCardClick = (userId) => {
        navigate({ pathname: window.location.pathname, search: `?userId=${userId}` });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        dob: "",
        gender: "",
        mobileNumber: "",
    });
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        setFormData((values) => ({ ...values, [name]: value }));
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.fullName) formErrors.fullName = "Full Name is required";
        if (!formData.mobileNumber.trim()) {
            formErrors.mobileNumber = "Mobile number is required";
        } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
            formErrors.mobileNumber = "Invalid mobile number format";
        }
        if (!formData.email) formErrors.email = "Email is required";
        if (!formData.dob) formErrors.dob = "Date of Birth is required";
        if (!formData.gender) formErrors.gender = "Please select your gender";
        if (relation.length === 0) formErrors.relation = "Relation is required";
        if (linkedAccounts.length === 0) formErrors.linkedAccounts = "Linked Account is required";
        if (country.length === 0) formErrors.country = "Country is required";
        if (city.length === 0) formErrors.city = "City is required";
        setErrors(formErrors);
        console.log("formErrors", formErrors);
        return Object.keys(formErrors).length === 0;
    };
    const handleSubmit = async (event) => {
        console.log('handleSubmit')
        event.preventDefault();
        try {
            if (validateForm()) {
                if (Object.keys(formErrors).length === 0) {
                    const form = new FormData();
                    form.append("fullName", formData.fullName);
                    form.append("linkedAccount", linkedAccounts);
                    form.append("relation", relation);
                    form.append("mobileNumber", formData.mobileNumber);
                    form.append("email", formData.email);
                    form.append("country", formData.country);
                    form.append("city", formData.city);
                    form.append("dob", formData.dob);
                    form.append("gender", formData.gender);
                    // form.append("image", selectedImage)
                    console.log('form', form)
                    const response = await fileUploadApi(END_POINTS.ADD_MEMBER, form);
                    console.log("response: ", response);
                    if (response.success) {
                        console.log("response: ", response);
                    } else {
                        toast.error(response?.data?.message);
                    }
                } else {
                    console.log("Form submission failed due to errors", formErrors);
                }
            }
        } catch (error) {
            console.log("error: ", error);
        }
    };

    const relationships = ['Single', 'Married', 'Unmarried']
    const linkedAccoutsList = ['Account 1', 'Account 2', 'Account 3']
    const countries = ["Country 1", "Country 2"];
    const cities = ["City 1", "City 2"];

    useEffect(() => {
        async function fetchMembers(params) {
            const storedDataString = localStorage.getItem('user');
            if (storedDataString) {
                const parsedData = JSON.parse(storedDataString);
                const userId = parsedData._id;

                try {
                    const response = await getApiRequest(END_POINTS.GET_RELATIONS + userId);
                    if (response.success) {
                        setMembers(response.allRelatives)

                    } else {

                    }
                } catch (error) {

                }
            }
        }
        fetchMembers()
    }, [])


    return (
        <>
            {!addMember ? (
                <>
                    <div style={{ height: '100%' }}>

                        <MyFamilyTree nodes={members} />
                    </div>
                    <Row className="d-none">
                        <Col md={{ span: 12 }}>
                            <div className="line-container-1 d-flex align-items-start justify-content-between">
                                <TreeCard handleCardClick={() => handleCardClick(users[0].id)} editClick={() => setModalShow(true)} image={users[0].image} name={users[0].name} address={users[0].address} isVerified />
                                <div style={{ marginTop: '95px' }} className="w-100">
                                    <div className="vertical-line-1"></div>
                                    <div className="horizontal-line-1"></div>
                                </div>
                                <TreeCard handleCardClick={() => handleCardClick(users[1].id)} image={users[1].image} name={users[1].name} address={users[1].address} isVerified isSquare />

                            </div>
                            <div className="line-container-2">
                                <div style={{ marginLeft: '95px', marginRight: "95px" }} className="vertical-line-1 ">
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="horizontal-line-2">
                                        </div>
                                        <TreeCard handleCardClick={() => handleCardClick(users[2].id)} image={users[2].image} name={users[2].name} address={users[2].address} isVerified />

                                        <div className="horizontal-line-2">
                                        </div>

                                    </div>
                                    <div>
                                        <div className="horizontal-line-2">
                                        </div>
                                        <TreeCard handleCardClick={() => handleCardClick(users[3].id)} image={users[3].image} name={users[3].name} address={users[3].address} handleClick={() => setAddMember(true)} isVerified isSquare isDark addMember />

                                    </div>
                                </div>
                            </div>
                            <div className="line-container-3">
                                <div style={{ marginLeft: '95px', marginRight: "95px" }} className="vertical-line-1 ">
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="horizontal-line-2">
                                        </div>
                                        <TreeCard handleCardClick={() => handleCardClick(users[4].id)} image={users[4].image} name={users[4].name} address={users[4].address} isVerified />

                                    </div>
                                    <div>
                                        <div className="horizontal-line-2">
                                        </div>
                                        <TreeCard handleCardClick={() => handleCardClick(users[5].id)} image={users[5].image} name={users[5].name} address={users[5].address} isVerified />

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </>
            ) : (
                <>
                    <div className='rounded_border bg_secondary p-4'>
                        <form onSubmit={handleSubmit}>
                            <h1 className="sign-up-heading mb-3">Add Member</h1>
                            <ProfileSelector image={selectedImage} handleChange={handleImageChange} handleClick={handleImageClick} fileRef={fileInputRef} />
                            <Form.Group className="mb-3">
                                <Form.Label>Relation</Form.Label>
                                <Typeahead
                                    placeholder="Enter here"
                                    className="search-select-icon border-0"
                                    id="relation"
                                    labelKey="name"
                                    onChange={setRelation}
                                    options={relationships}
                                    selected={relation}
                                />
                                {errors.relation && (
                                    <div className="invalid-feedback d-block">
                                        {errors.relation}
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Linked Acounts</Form.Label>
                                <Typeahead
                                    placeholder="Enter here"
                                    className="search-select-icon border-0"
                                    id="linkedAccounts"
                                    labelKey="name"
                                    onChange={setLinkedAccounts}
                                    options={linkedAccoutsList}
                                    selected={linkedAccounts}
                                />
                                {errors.linkedAccounts && (
                                    <div className="invalid-feedback d-block">
                                        {errors.linkedAccounts}
                                    </div>
                                )}
                            </Form.Group>
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="fullName">
                                    Full Name
                                </label>
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter here"
                                    id="fullName"
                                    className="border-0 sign-up-input form-control"
                                />
                                {errors.fullName && (
                                    <div className="invalid-feedback d-block">
                                        {errors.fullName}
                                    </div>
                                )}
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="mobileNumber">
                                    Mobile Phone Number
                                </label>
                                <input
                                    name="mobileNumber"
                                    value={formData.mobileNumber || ''}
                                    onChange={handleChange}
                                    type="tel"
                                    placeholder="Enter here"
                                    id="mobileNumber"
                                    className="border-0 sign-up-input form-control"
                                />
                                {errors.mobileNumber && (
                                    <div className="invalid-feedback d-block">
                                        {errors.mobileNumber}
                                    </div>
                                )}
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Enter here"
                                    id="email"
                                    className="border-0 sign-up-input form-control"
                                />
                                {errors.email && (
                                    <div className="invalid-feedback d-block">
                                        {errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label" htmlFor="dob">
                                    DOB
                                </label>
                                <input

                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    type="date"
                                    id="dob"
                                    className="border-0 sign-up-input form-control"
                                />
                                {errors.dob && (
                                    <div className="invalid-feedback d-block">
                                        {errors.dob}
                                    </div>
                                )}
                            </div>
                            <div className="form-outline mb-3">
                                <label className="form-label">Gender</label>
                                <div className="d-flex gap-3">
                                    <Form.Check // prettier-ignore
                                        className='grey_dark poppins_font'
                                        type="radio"
                                        name="gender"
                                        label={`Male`}
                                        value="Male"
                                        checked={formData.gender === "Male"}
                                        onChange={handleChange}
                                    />
                                    <Form.Check // prettier-ignore
                                        className='grey_dark poppins_font'
                                        type="radio"
                                        name="gender"
                                        label={`Female`}
                                        value="Female"
                                        checked={formData.gender === "Female"}
                                        onChange={handleChange}
                                    />

                                </div>
                                {errors.gender && (
                                    <div className="invalid-feedback d-block">
                                        {errors.gender}
                                    </div>
                                )}
                            </div>
                            <Form.Group className="mb-3">
                                <Form.Label>Country</Form.Label>
                                <Typeahead
                                    placeholder="Enter here"
                                    className="search-select-icon border-0"
                                    id="country"
                                    labelKey="name"
                                    onChange={setCountry}
                                    options={countries}
                                    selected={country}
                                />
                                {errors.country && (
                                    <div className="invalid-feedback d-block">
                                        {errors.country}
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label>City</Form.Label>
                                <Typeahead
                                    placeholder="Enter here"
                                    className="search-select-icon border-0"
                                    id="city"
                                    labelKey="name"
                                    onChange={setCity}
                                    options={cities}
                                    selected={city}
                                />
                                {errors.city && (
                                    <div className="invalid-feedback d-block">
                                        {errors.city}
                                    </div>
                                )}
                            </Form.Group>
                            <button
                                type="submit"
                                className="add_member_btn login-btn btn-block mb-4 px-5 mx-auto"
                            >
                                Add Member
                            </button>
                        </form>
                    </div>
                </>
            )}

            <MemberModal handleDelete={() => { setModalShow(false); setShowDelete(true) }} handleEdit={() => { setShowEdit(true), setModalShow(false) }} show={modalShow}
                onHide={() => setModalShow(false)} />
            <CommonModal title="Report Member" subTitle="Confirm Report this family member?" submitBtnTxt='Report' show={showEdit} onHide={() => setShowEdit(false)} >
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="fullName">
                        Reason
                    </label>
                    <textarea placeholder="Description" class="form-control min-100" id="exampleFormControlTextarea1" rows="3"></textarea>
                    {/* {errors.fullName && (
                      <div className="invalid-feedback d-block">
                        {errors.fullName}
                      </div>
                    )} */}
                </div>
            </CommonModal>
            <CommonModal title="Delete Member" subTitle="Confirm delete this family member?" submitBtnTxt='Report' show={showDelete} onHide={() => setShowDelete(false)} />
        </>
    );
}

export default FamilyTreePage
