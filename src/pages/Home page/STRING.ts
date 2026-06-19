const STRING = {
    TITLE: 'Home page',
    BUTTON: {
        VIEW_EMPLOYEE: 'View Curent Employee',
        SAVE: 'Save',
    },
    FORM: {
        ERRORS: {
            NETWORK: 'Unexpected error try later',
            FIELD: 'Please fill this field',
        },
        FIRST_NAME: 'First Name',
        LAST_NAME: 'Last Name',
        BIRTH_DATE: 'Date of Birth',
        START_DATE: 'Start Date',
        DEPARTMENT: 'Department',
        ADDRESS: {
            GROUP_NAME: 'Address',
            STREET: 'Street',
            CITY: 'City',
            STATE: 'State',
            ZIP_CODE: 'Zip Code',
        },
    },
    MODAL: {
        CONTENT: 'Employee Created!',
    },
} as const;

export default STRING;
