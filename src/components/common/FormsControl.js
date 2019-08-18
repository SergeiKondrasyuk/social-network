import React from 'react';
import s from './FormsControls.module.css'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const FormControl = ({input, meta, children, fieldType, label, name, autoComplete, type, ...props}) => {

    switch (fieldType) {

        case 'input': {
            return <TextField
                variant="outlined"
                autoComplete={autoComplete}
                label={label}
                type={type}
                color="primary"
                {...input}
                {...props}
            />
        }
        case 'checkbox': {
            return <Checkbox
                color="primary"
                autoComplete={autoComplete}
                label={label}
                type={type}
                {...input}
                {...props}
            />
        }
        case 'textArea': {
            return <TextareaAutosize
                color="primary"
                autoComplete={autoComplete}
                label={label}
                type={type}
                {...input}
                {...props}
            />
        }
    }
};
/*const hasError = meta.touched && meta.error;*/




export const Textarea = (props) => {
    const {input, meta, child, element, ...restProps} = props;
    return (
        <FormControl {...props}><textarea {...input}{...restProps}/> </FormControl>
    )
};

export const Input = (props) => {
    const {input, meta, child, element, ...restProps} = props;
    return (
        <FormControl {...props}><input {...input}{...restProps}/> </FormControl>
    )
};


const renderTextField = ({
                             input,
                             label,
                             meta: {touched, error},
                             ...custom
                         }) =>
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />