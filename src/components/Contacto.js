// src/components/Contacto.js
import React from 'react';
import './Contacto.css'; // Importa el CSS
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as formik from 'formik';
import * as yup from 'yup';

const Contacto = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        nombre: yup.string().required('El nombre es requerido'),
        email: yup.string().email('Email no válido').required('El email es requerido'),
        telefono: yup.string().required('El teléfono es requerido'),
        mensaje: yup.string().required('El mensaje es requerido'),
    });

    return (
        <div>
            <img className='imagen' src='https://cdn.discordapp.com/attachments/1074886355223580675/1290044031031574528/DALLE_2024-09-29_17.13.46_-_A_professional_woman_working_in_a_call_center._She_is_wearing_a_headset_with_a_microphone_seated_at_a_desk_with_a_computer_in_front_of_her._She_is_in.webp?ex=66fb06a0&is=66f9b520&hm=bf7424f59c3aa470b5c35b7735afc5c24e5755bf53dc26948c62a5f63b674d66&'></img>

        <div className="contacto">
            
            <h2>Contacto</h2>
            <Formik
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values);
                    // Aquí puedes hacer la llamada a la API o cualquier otra acción
                }}
                initialValues={{
                    nombre: '',
                    email: '',
                    telefono: '',
                    mensaje: '',
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={values.nombre}
                                onChange={handleChange}
                                isInvalid={!!errors.nombre && touched.nombre}
                                placeholder="Nombre y Apellido"
                            />
                            <Form.Control.Feedback type="invalid" className="error-message">
                                {errors.nombre}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email && touched.email}
                                placeholder="Email"
                            />
                            <Form.Control.Feedback type="invalid" className="error-message">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="telefono">
                            <Form.Label>Teléfono:</Form.Label>
                            <Form.Control
                                type="tel"
                                name="telefono"
                                value={values.telefono}
                                onChange={handleChange}
                                isInvalid={!!errors.telefono && touched.telefono}
                                placeholder="Teléfono"
                            />
                            <Form.Control.Feedback type="invalid" className="error-message">
                                {errors.telefono}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="mensaje">
                            <Form.Label>Mensaje:</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="mensaje"
                                rows={4}
                                value={values.mensaje}
                                onChange={handleChange}
                                isInvalid={!!errors.mensaje}
                                placeholder="Escribe un mensaje para que nuestro equipo de desarrollo entienda qué necesitas..."
                            />
                            <Form.Control.Feedback type="invalid" className="error-message">
                                {errors.mensaje}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit">Enviar</Button>
                    </Form>
                )}
            </Formik>
        </div>
        </div>

    );
};

export default Contacto;
