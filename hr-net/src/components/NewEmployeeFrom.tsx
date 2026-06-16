import { useState, type PropsWithChildren } from 'react';
import { USA_STATE } from '../constant/USA_STATE';
import STRING from '../pages/Home page/STRING';
import type { Department } from '../services/department';
import { saveEmployee, type NewEmployee } from '../services/employeesService';
import type React from 'react';
import useModalContext from '../hook/useModalContext';

type NewEmployeeFormProps = PropsWithChildren & {
    departments: Department[];
};

export default function NewEmployeeFrom({ departments }: NewEmployeeFormProps) {
    const { open } = useModalContext();
    const [isValid, setIsValid] = useState({ valid: true, error: new Map() });
    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const newEmployee = employeeAdapter(e.target);
        const formIsValid = validateForm(newEmployee);
        if (formIsValid.valid) {
            const postNewEmployeeResult = saveEmployee(newEmployee);
            if ((await postNewEmployeeResult).success) {
                setIsValid({ valid: true, error: new Map() });
                open();
                return e.target.reset();
            }
            setIsValid({ valid: false, error: new Map([['network', true]]) });
        } else {
            setIsValid(formIsValid);
        }
    }

    return (
        <form
            id="new-employee-form"
            className="form"
            action=""
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
            }}
        >
            <div className="form__field">
                <label htmlFor="first-name">{STRING.FORM.FIRST_NAME}</label>
                <input type="text" id="first-name" name="firstName" />
                {!isValid.valid && isValid.error.has('firstName') && <span>{STRING.FORM.ERRORS.FIELD}</span>}
            </div>
            <div className="form__field">
                <label htmlFor="last-name">{STRING.FORM.LAST_NAME}</label>
                <input type="text" id="last-name" name="lastName" />
                {!isValid.valid && isValid.error.has('lastName') && <span>{STRING.FORM.ERRORS.FIELD}</span>}
            </div>
            <div className="form__field">
                <label htmlFor="birth-date">{STRING.FORM.BIRTH_DATE}</label>
                <input type="date" id="birth-date" name="dateOfBirth" />
                {!isValid.valid && isValid.error.has('dateOfBirth') && <span>{STRING.FORM.ERRORS.FIELD}</span>}
            </div>
            <div className="form__field">
                <label htmlFor="start-date">{STRING.FORM.START_DATE}</label>
                <input type="date" id="start-date" name="startDate" />
                {!isValid.valid && isValid.error.has('startDate') && <span>{STRING.FORM.ERRORS.FIELD}</span>}
            </div>
            <div className="from__group-field">
                <div className="form__field">
                    <label htmlFor="street">{STRING.FORM.ADDRESS.STREET}</label>
                    <input type="text" id="street" name="street" />
                    {!isValid.valid && isValid.error.has('street') && <span>{STRING.FORM.ERRORS.FIELD}</span>}
                </div>
                <div className="form__field">
                    <label htmlFor="city">{STRING.FORM.ADDRESS.CITY}</label>
                    <input type="text" id="city" name="city" />
                    {!isValid.valid && isValid.error.has('city') && <span>{STRING.FORM.ERRORS.FIELD}</span>}
                </div>
                <div className="form__field">
                    <label htmlFor="state">{STRING.FORM.ADDRESS.STATE}</label>
                    <select name="state" id="state">
                        <option value="">-</option>
                        {USA_STATE.map((state, index) => (
                            <option value={state.value} key={`state-${index}`}>
                                {state.label}
                            </option>
                        ))}
                    </select>
                    {!isValid.valid && isValid.error.has('state') && <span>{STRING.FORM.ERRORS.FIELD}</span>}
                </div>
                <div className="form__field">
                    <label htmlFor="zip-code">{STRING.FORM.ADDRESS.ZIP_CODE}</label>
                    <input type="number" id="zip-code" name="zipCode" />
                    {!isValid.valid && isValid.error.has('zipCode') && <span>{STRING.FORM.ERRORS.FIELD}</span>}
                </div>
            </div>
            <div className="form__field">
                <label htmlFor="department">{STRING.FORM.DEPARTMENT}</label>
                <select name="department" id="state">
                    <option value="">-</option>
                    {departments.map((department) => (
                        <option value={department.value} key={department.id}>
                            {department.label}
                        </option>
                    ))}
                </select>
                {!isValid.valid && isValid.error.has('state') && <span>{STRING.FORM.ERRORS.FIELD}</span>}
            </div>
            {!isValid.valid && isValid.error.has('network') && <span>{STRING.FORM.ERRORS.NETWORK}</span>}
            <button type="submit">{STRING.BUTTON.SAVE}</button>
        </form>
    );
}

function employeeAdapter(formEmployee: HTMLFormElement) {
    const form = new FormData(formEmployee);
    const newEmployee = Object.fromEntries(form.entries());
    console.log(newEmployee);
    return newEmployee as unknown as NewEmployee;
}

function validateForm(newEmployee: NewEmployee) {
    let isValid = { valid: true, error: new Map() };
    if (newEmployee.city === '') isValid = { ...isValid, valid: false, error: isValid.error.set('city', true) };
    if (newEmployee.firstName === '') isValid = { ...isValid, valid: false, error: isValid.error.set('firstName', true) };
    if (newEmployee.lastName === '') isValid = { ...isValid, valid: false, error: isValid.error.set('lastName', true) };
    if (newEmployee.state === '') isValid = { ...isValid, valid: false, error: isValid.error.set('state', true) };
    if (newEmployee.zipCode === '') isValid = { ...isValid, valid: false, error: isValid.error.set('zipCode', true) };
    if (newEmployee.department === '') isValid = { ...isValid, valid: false, error: isValid.error.set('department', true) };
    if (newEmployee.street === '') isValid = { ...isValid, valid: false, error: isValid.error.set('street', true) };
    return isValid;
}
