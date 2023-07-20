import React from "react"
import { useSelector } from 'react-redux';

const Table = () => {
    const { records } = useSelector((state) => state.records);
    const { searchText, order } = useSelector((state) => state.search);

    const filterRecords = (records) => {
        if (searchText !== "")
            return records.filter(record => { return record.name.toLowerCase().startsWith(searchText.toLowerCase()); });

        return records;
    }

    const orderRecords = () => {
        if (order === "asc")
            return [...records].sort((a, b) => a.name > b.name ? 1 : -1,);
        else if (order === "desc")
            return [...records].sort((a, b) => a.name > b.name ? -1 : 1,);
        else
            return records;
    }

    return (
        <div className='row px-4'>
            <div className='col-sm-12 overflow-x-scroll px-0'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (records !== undefined && records.length > 0) && filterRecords(orderRecords()).map(({ id, name, email, address, phone, website }, index) => (
                                <tr key={index}>
                                    <th>{id}</th>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{`${address.street}, ${address.suite}, ${address.city}`}</td>
                                    <td>{phone}</td>
                                    <td>{website}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table