import React from "react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { create } from "../api/categoriesApi";
export default function CategoryModal({open, handleOpen, fetch}) {

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
    },

    onSubmit: (values) => {
      console.log(values)
      create(values).then(() => {
        fetch();
        handleOpen();
      })
    },
  });
  return (
    <>
      {open ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">New category</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => handleOpen()}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
                  </button>
                </div>
                {/*body*/}
                <form
                  onSubmit={formik.handleSubmit.bind(this)}
                  class="space-y-6"
                >
                  <div>
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      type="textarea"
                      id="name"
                      placeholder="Category name"
                      aria-label="Category name"
                      label="Category name"
                    />
                  </div>
                  <div>
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                      onChange={formik.handleChange}
                      value={formik.values.type}
                      type="textarea"
                      id="type"
                      placeholder="Category type"
                      aria-label="Category type"
                      label="Category type"
                    />
                  </div>
                  <button
                    className="text-green-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    submit
                  </button>
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleOpen()}
                  >
                    Close
                  </button>
                </form>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
