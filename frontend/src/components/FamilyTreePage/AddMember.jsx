import React, { useState, useRef, useEffect } from "react";
import { Form } from 'react-bootstrap';
import ProfileSelector from '../ProfileSelector/ProfileSelector';
import { Typeahead } from 'react-bootstrap-typeahead';
import { getApiRequest } from "../../utils/getApiRequest";
import { END_POINTS } from "../../common/endPoints";

const AddMember = ({ handleSubmit }) => {

    const [relation, setRelation] = useState([]);
    const [isLinked, setIsLinked] = useState(false);
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState([]);
    const [countryCode, setCountryCode] = useState("+1");
    const [city, setCity] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    const [formData, setFormData] = useState({
        is_linked: false,
        relationship_type: "",
        fullName: "",
        email: "",
        dob: "",
        gender: "",
        mobileNumber: "",
        country: "",
        city: "",
    });
    const [related, setRelated] = useState([]);
    const [relateds, setRelateds] = useState([]);
    const [errors, setErrors] = useState({});
    const fileInputRef = useRef(null);

    useEffect(() => {
        let response;
        if(relation == 'CHILD') {
            response = getApiRequest(`${END_POINTS.GET_PARTNERS}?email=${formData.email}`)
        } else if(relation == 'PARTNER') {
            response = getApiRequest(`${END_POINTS.GET_CHILDS}?email=${formData.email}`)
        } else return;
        
    }, [email])

    const handleCountryCodeChange = (e) => {
        setCountryCode(e.target.value);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setFormData((values) => ({...values, email: e.target.value}));
    }

    const handleChangeRelation = (e) => {
        setRelation(e);
        setFormData((values) => ({ ...values, relationship_type: e }));
    }

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData((values) => ({ ...values, [name]: value }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const handleCheckboxChange = () => {
        setIsLinked(!isLinked);
        setFormData((values) => ({...values, is_linked: !isLinked}));
    };

    const relationships = ['Father', "Mother", 'Child', 'Sibling', 'Partner'];
    const countries = ["US", "Canada"];
    const cities = ["Woshington", "New York"];

    return (
        <form onSubmit={(e) => {handleSubmit(formData), e.preventDefault()}} className="p-4">
            <h1 className="sign-up-heading mb-3">Add Member</h1>
            <Form.Group className="mb-3">
                <Form.Label>Relation</Form.Label>
                <Typeahead
                    placeholder="Enter here"
                    className="search-select-icon border-0"
                    id="relation"
                    labelKey="name"
                    onChange={handleChangeRelation}
                    options={relationships}
                    selected={relation}
                />
                {errors.relation && (
                    <div className="invalid-feedback d-block">
                        {errors.relation}
                    </div>
                )}
            </Form.Group>
            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="email">
                    Email
                </label>
                <input
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
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
                <Form.Check
                    type="checkbox"
                    id="isLinked"
                    label="Is Linked?"
                    checked={isLinked}
                    onChange={handleCheckboxChange}
                    className="poppins_font grey_dark"
                />
            </div>
            {
                isLinked && (
                    <><ProfileSelector image={selectedImage} handleChange={handleImageChange} handleClick={handleImageClick} fileRef={fileInputRef} />

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
                            <div className="number-with-conuntry-code d-flex align-items-center">
                                <select
                                    value={countryCode}
                                    onChange={handleCountryCodeChange}
                                    className="form-select border-0 bg-transparent"
                                    style={{ maxWidth: "120px", height: "48px" }}
                                >
                                    <option value="+1">+1 (US)</option>
                                    <option value="+91">+91 (IN)</option>
                                    <option value="+44">+44 (UK)</option>
                                    <option value="+61">+61 (AU)</option>
                                    <option value="+81">+81 (JP)</option>
                                </select>
                                <span className="st-line">|</span>
                                <div className="phone-number-input-field">
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Enter here"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`border-0 transparent-input login-input form-control phone-number-input ${errors.phone ? "is-invalid" : ""}`}
                                    />
                                </div>
                            </div>
                            {errors.mobileNumber && (
                                <div className="invalid-feedback d-block">
                                    {errors.mobileNumber}
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
                                <Form.Check
                                    className='grey_dark poppins_font'
                                    type="radio"
                                    name="gender"
                                    label={`Male`}
                                    value="Male"
                                    checked={formData.gender === "Male"}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    className='grey_dark poppins_font'
                                    type="radio"
                                    name="gender"
                                    label={`Female`}
                                    value="Female"
                                    checked={formData.gender === "Female"}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    className='grey_dark poppins_font'
                                    type="radio"
                                    name="gender"
                                    label={`Non-binary `}
                                    value="Non-binary "
                                    checked={formData.gender === "Non-binary "}
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
                    </>
                )
            }

            <button
                type="submit"
                className="add_member_btn login-btn btn-block mb-4 px-5 mx-auto"
            >
                Add Member
            </button>
        </form>
    );
};

export default AddMember;