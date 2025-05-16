import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
 const URL = "http://localhost:3000/user";
export const Add = () => {
  async function postData(url, body) {
    const res = await axios.post(url, body);
  }
  return (
    <Formik
      initialValues={{ image: "", name: "", price: "" }}
      validationSchema={Yup.object({
        image: Yup.string()
          .required("Required"),
        name: Yup.string()
          .required("Required"),
        price: Yup.number().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        postData(URL,values)
        console.log(values);
        
  
      }}
    >
      <Form>
        <label htmlFor="image">image</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />

        <label htmlFor="name">Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />

        <label htmlFor="price">price </label>
        <Field name="price" type="price" />
        <ErrorMessage name="price" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
