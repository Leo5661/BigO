import { createSlice } from "@reduxjs/toolkit";

type PersonalDetails = {
    firstName: string,
    lastName: string,
    email: string,
    parentName: string,
    phoneNumber: string,
    address: string,
}

type MemberDetails = {
    memberName: string,
    relation: string,
}

type FormState = {
    personalDetails: PersonalDetails | null,
    familyDetails: MemberDetails[],
}

const initialState: FormState = {
    personalDetails: null,
    familyDetails: [],
}

export const FormSlice = createSlice({
    name: "Form",
    initialState: initialState,
    reducers: {
        setPersonalDetails: (state, action) => {
            state.personalDetails = action.payload
        },
        setFamilyDetails: (state, action) => {
            state.familyDetails = action.payload
        },
    }
});

export const { setPersonalDetails, setFamilyDetails } = FormSlice.actions;
export default FormSlice.reducer