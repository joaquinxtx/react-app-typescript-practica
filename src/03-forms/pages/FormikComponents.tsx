import React from 'react';
import { useFormik,Formik,Form ,ErrorMessage,Field} from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';



export const FormikComponents = () => {

   

  return (
    <div>
        <h1>Formik Components </h1>

        <Formik
            initialValues={{
                firstName:'',
                lastName:'',
                email:'',
                terms:false,
                jobType:''
            }}
            onSubmit={(values)=>{
                console.log(values);
                
            }}
            validationSchema={
                Yup.object({
                    firstName:Yup.string()  
                                .max(15,'Debe tener 15 caracteres')
                                .required('Requerido'),
        
                    lastName:Yup.string()  
                                .max(15,'Debe tener 10 caracteres')
                                .required('Requerido'),
        
                    email:Yup.string()  
                                .email('El Email no tiene un formato valido')
                                .required('Requerido'),
                    jobType:Yup.string()
                                .notOneOf(['it-senior'],'Esta opcion no es permitida')  
                                .required('Requerido'),
                    terms:Yup.boolean()  
                                .oneOf([true], 'Debe de aceptar las condiciones')
                                

                })}
        >
            { (formik)=>(
            <Form  noValidate >
                <label htmlFor="firstName">First Name</label>
                <Field name='firstName' type='text' />
                <ErrorMessage name='firstName' component='span'/>

                <label htmlFor="lastName">First Name</label>
                <Field name='lastName' type='text' />
                <ErrorMessage name='lastName' component='span'/>

                <label htmlFor="email">First Name</label>
                <Field name='email' type='text' />
                <ErrorMessage name='email' component='span'/>
                
                <label htmlFor="jobType">Job Type</label>
                <Field name='jobType' as='select' >
                    <option value="">Pick something</option>
                    <option value="developer">Developer</option>
                    <option value="designer">Designer</option>
                    <option value="it-senior">IT Senior</option>
                </Field>
                <ErrorMessage name='jobType' component='span'/>
                
                <label >
                    <Field name='terms' type='checkbox' />
                    Terms and Conditions
                </label>
                <ErrorMessage name='terms' component='span'/>

                <button type='submit'>Enviar</button>
                
            </Form>
                )
            }

        </Formik>

        
    </div>
  )
}