import { Button, notification } from 'antd';
import React, { useState, useRef, useEffect } from 'react';
import { getKey } from '../../service/DataService';
import { useNavigate } from 'react-router-dom';

const Verify = () => {

    const [code, setCode] = useState(['', '', '', '', '']);
    const inputRefs = useRef([]);

    const navigate = useNavigate();
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type, msg) => {
        api[type]({
            message: msg
        });
    };

    const [key, setKey] = useState([]);

    const handleGetKey = async () => {
        try {
            const response = await getKey();
            setKey(response.data);
        } catch (error) {
        }
    };

    useEffect(() => {
        handleGetKey();
    }, []);

    useEffect(() => {
        inputRefs.current[0].focus();
    }, []);

    const handleChange = (index, e) => {
        const newCode = [...code];
        newCode[index] = e.target.value;
        setCode(newCode);
        const nextIndex = index < code.length - 1 ? index + 1 : index;
        inputRefs.current[nextIndex].focus();
    };

    const handleKeyUp = (index, e) => {
        if (e.key === 'Backspace' && index > 0 && code[index] === '') {
            const newCode = [...code];
            newCode[index - 1] = '';
            setCode(newCode);
            inputRefs.current[index - 1].focus();
        }
    };

    const getCodeValue = () => {
        const codeValue = code.join('');
        return codeValue;
    };

    const handleCheckKey = () => {

        const codeByInput = getCodeValue();

        if (codeByInput === key[0].key.toString()) {
            console.log("Successfully");
            openNotificationWithIcon('success', 'Verify Successfully');
            setTimeout(() => {
                navigate('/admin', { state: { checked: true } });
            }, 1000)
        } else {
            console.log("Failed");
            openNotificationWithIcon('error', 'Key Not Correct');
            setCode(['', '', '', '', '']);
        }
    }

    return (
        <div className='Verify'>
            {contextHolder}
            <div className='Verify_box'>
                <div className='Verify_title'>
                    <h3>Admin for RET 2024</h3>
                    <span>Tra Vinh University</span>
                </div>
                <p>Enter KEY to continue</p>
                <div className='Verify_input'>
                    {code.map((value, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={value}
                            onChange={(e) => handleChange(index, e)}
                            onKeyUp={(e) => handleKeyUp(index, e)}
                            ref={(ref) => (inputRefs.current[index] = ref)}
                        />
                    ))}
                </div>
                {/* <Button type="primary" size="large" style={{ width: "100%" }}>Verify</Button> */}
                <Button
                    type="primary"
                    size='large'
                    shape="circle"
                    icon={<i className="fa-solid fa-arrow-right"></i>}
                    style={{ width: "50px", height: "50px" }}
                    disabled={code[4] === ""}
                    onClick={() => handleCheckKey()}
                />
            </div>
        </div>
    );
};

export default Verify;
