import React, { useState } from 'react'
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";
import NumberFormat from 'react-number-format';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Form = () => {

    const [value, setValue] = useState({
        licence_no: '',
        monthly_expense: '',
        city: []
    })

    const [errorMsg, setErrorMsg] = useState(false)

    // console.log(value, 'value')

    const options = [
        { label: "kolkata", value: "kolkata" },
        { label: "mumbai", value: "mumbai" },
        { label: "delhi", value: "delhi" },
        { label: "pune", value: "pune" },
        { label: "gujrat", value: "gujrat" },
        { label: "ahmedabad", value: "ahmedabad" },
    ];

    const handleOnchange = (val) => {
        console.log(val, 'val_select')
        setValue({ ...value, city: val.split(',') })
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        setErrorMsg(true)

        console.log(value, 'sub_val')


        if (value.city.length === 0) {
            toast.error("Atleast one city is required!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }

        if (value.licence_no === '' || value.monthly_expense === '' || value.city.length === 0) {
            toast.error("All fields are required!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            })
        }
    }


    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div style={{ marginTop: '50px' }}>
                    <label>Licence No: </label>
                    <NumberFormat
                        format='##-##-##-##'
                        value={value.licence_no}
                        onValueChange={(val) => {
                            console.log(val, 'val999')
                            setValue({ ...value, licence_no: val.formattedValue.replaceAll("-", "") })
                        }}
                        required
                    />
                    <div>
                        <p style={{ color: 'red' }}>
                            {errorMsg && value.licence_no === '' ? "Can not be empty" : ""}
                        </p>
                    </div>
                </div>
                <div>
                    <label>Monthly Expence: </label>
                    <NumberFormat
                        thousandSeparator={true}
                        prefix={'$'}
                        value={value.monthly_expense}
                        onValueChange={(val) => {
                            console.log(val.formattedValue, '111')
                            setValue({ ...value, monthly_expense: val.formattedValue.slice(1).replaceAll(",", "") })
                        }}
                        required
                    />
                    <div>
                        <p style={{ color: 'red' }}>
                            {errorMsg && value.monthly_expense === '' ? "Can not be empty" : ""}
                        </p>
                    </div>

                </div>
                <div style={{ width: '40%', marginLeft: '40%', marginTop: '30px' }}>
                    <label>Select city: </label>
                    <MultiSelect name='city' onChange={handleOnchange} options={options} required />
                </div>

                <button type='submit'>Submit</button>
            </form>
            <ToastContainer />
        </>
    )
}

export default Form