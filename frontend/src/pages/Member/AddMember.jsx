import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import ProfileSelector from '../../components/ProfileSelector/ProfileSelector';
import { Typeahead } from 'react-bootstrap-typeahead';


export default function AddMember() {
    const [members, setMembers] = useState([])
    const [showDelete, setShowDelete] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [modalShow, setModalShow] = useState(false);
    const [relation, setRelation] = useState([]);
    const [linkedAccounts, setLinkedAccounts] = useState([])
    const [country, setCountry] = useState([]);
    const [city, setCity] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [addMember, setAddMember] = useState(false);

    const [errors, setErrors] = useState({});

    
    const relationships = ['Single', 'Married', 'Unmarried']
    const linkedAccoutsList = ['Account 1', 'Account 2', 'Account 3']
    const countries = ["Country 1", "Country 2"];
    const cities = ["City 1", "City 2"];
    
    const handleSubmit = async (event) => {

    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;
        setFormData((values) => ({ ...values, [name]: value }));
    };
  return (
    <>
    <div className='rounded_border bg_secondary p-4'>
        <form onSubmit={handleSubmit}>
            <h1 className="sign-up-heading mb-3">Add Member</h1>
            {/* <ProfileSelector image={selectedImage} handleChange={handleImageChange} handleClick={handleImageClick} fileRef={fileInputRef} /> */}
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
                    // value={formData.fullName}
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
                    // value={formData.mobileNumber || ''}
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
                    // value={formData.email}
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
                    // value={formData.dob}
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
                        // checked={formData.gender === "Male"}
                        onChange={handleChange}
                    />
                    <Form.Check // prettier-ignore
                        className='grey_dark poppins_font'
                        type="radio"
                        name="gender"
                        label={`Female`}
                        value="Female"
                        // checked={formData.gender === "Female"}
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
  )
}
