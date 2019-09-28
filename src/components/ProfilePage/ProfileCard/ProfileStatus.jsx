import React, {useState} from 'react';

let ProfileStatus = (props) => {

    const [statusEditMode, setStatusEditMode] = useState(false);
    const [statusValue, setStatusValue] = useState(props.status);

    let onStatusBlurEvent = () => {
        setStatusEditMode(false);
        if (props.status !== statusValue) {
            props.updateStatus(statusValue);
        }
    };

    let onStatusClickEvent = () => {
        setStatusEditMode(true);
    };

    let onStatusChange = (e) => {
        setStatusValue(e.currentTarget.value);
    };

    let statusInputRef = React.createRef();

    return <>
        <span><b>Status: </b></span>
        {statusEditMode
            ? <input value={statusValue} onBlur={onStatusBlurEvent}
                     ref={statusInputRef} autoFocus={true} onChange={onStatusChange}/>
            : <span onClick={onStatusClickEvent} style={{cursor: 'pointer'}}>{props.status}</span>
        }
    </>

};

export default ProfileStatus;