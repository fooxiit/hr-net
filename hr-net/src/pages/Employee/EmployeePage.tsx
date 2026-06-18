import { TabData } from '@fooxit/tab-data';
import { useLoaderData } from 'react-router';
import type { Employee } from '../../services/employeesService';
import STRING from './STRING';
import './employeePage.css';

export default function EmployeePage() {
    const employees = useLoaderData<Employee[]>();

    return (
        <div className="employee-tab-data__warper">
            <TabData
                search={{ label: 'Search: ' }}
                id="employee-tab-data"
                datas={employees}
                maxRow={10}
                rowModel={{
                    idKey: 'id',
                    sort: true,
                    columns: [
                        { dataKey: 'firstName', label: STRING.TAB_LABEL.FIRST_NAME },
                        { dataKey: 'lastName', label: STRING.TAB_LABEL.Last_Name },
                        { dataKey: 'startDate', label: STRING.TAB_LABEL.START_DATE },
                        { dataKey: 'department', label: STRING.TAB_LABEL.DEPARTMENT },
                        { dataKey: 'dateOfBirth', label: STRING.TAB_LABEL.BIRTH_DATE },
                        { dataKey: 'street', label: STRING.TAB_LABEL.STREET },
                        { dataKey: 'city', label: STRING.TAB_LABEL.CITY },
                        { dataKey: 'state', label: STRING.TAB_LABEL.STATE },
                        { dataKey: 'zipCode', label: STRING.TAB_LABEL.ZIP_CODE },
                    ],
                }}
            />
        </div>
    );
}
