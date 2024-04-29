import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const SubmissionForm = () => {
  const [submission, setSubmission] = useState({
    title: "",
    description: "",
    fileModels: [],
  });

  const handleTitleChange = (e) => {
    setSubmission({ ...submission, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setSubmission({ ...submission, description: e.target.value });
  };

  const handleAddFileModel = () => {
    const newFileModel = { type: "", title: "", description: "" };
    setSubmission({
      ...submission,
      fileModels: [...submission.fileModels, newFileModel],
    });
  };

  const handleFileModelChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFileModels = [...submission.fileModels];
    updatedFileModels[index][name] = value;
    setSubmission({ ...submission, fileModels: updatedFileModels });
  };

  const handleDeleteFileModel = (index) => {
    const updatedFileModels = [...submission.fileModels];
    updatedFileModels.splice(index, 1);
    setSubmission({ ...submission, fileModels: updatedFileModels });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submission);
  };

  return (
    <div className="tw-h-full">
      {" "}
      {/* Container with increased height */}
      <form
        onSubmit={handleSubmit}
        className="tw-max-w-lg tw-mx-auto tw-mt-8 tw-p-8 tw-bg-white tw-shadow-md tw-rounded-lg"
      >
        <h2 className="tw-text-2xl tw-mb-4 tw-text-center">
          Create Submission
        </h2>
        <label htmlFor="title" className="tw-block tw-text-gray-700 tw-mb-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={submission.title}
          onChange={handleTitleChange}
          required
          className="tw-w-full tw-px-4 tw-py-2 tw-mb-4 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
        />
        <label
          htmlFor="description"
          className="tw-block tw-text-gray-700 tw-mb-2"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          value={submission.description}
          onChange={handleDescriptionChange}
          className="tw-w-full tw-px-4 tw-py-2 tw-mb-4 tw-border tw-border-gray-300 tw-rounded-lg tw-resize-none tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
        ></textarea>
        {submission.fileModels.map((fileModel, index) => (
          <div key={index} className="tw-mb-4">
            <h3 className="tw-text-lg tw-mb-2">File Model {index + 1}</h3>
            <select
              name="type"
              value={fileModel.type}
              onChange={(e) => handleFileModelChange(index, e)}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
            >
              <option value="">Select File Type</option>
              <option value="powerpoint">PowerPoint</option>
              <option value="video">Video</option>
              <option value="link">Link</option>
            </select>
            <input
              type="text"
              name="title"
              placeholder="Title (optional)"
              value={fileModel.title}
              onChange={(e) => handleFileModelChange(index, e)}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
            />
            <input
              type="text"
              name="description"
              placeholder="Description (optional)"
              value={fileModel.description}
              onChange={(e) => handleFileModelChange(index, e)}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
            />
            <button
              type="button"
              onClick={() => handleDeleteFileModel(index)}
              className="tw-inline-block tw-px-3 tw-py-1 tw-text-xs tw-font-semibold tw-leading-none tw-text-red-600 tw-bg-transparent tw-border tw-border-red-600 tw-rounded tw-hover:tw-bg-red-600 tw-hover:tw-text-white tw-focus:tw-outline-none tw-focus:tw-bg-red-600 tw-focus:tw-text-white"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddFileModel}
          className="tw-block tw-w-full tw-py-2 tw-mb-4 tw-text-white tw-bg-blue-500 tw-rounded-lg tw-hover:tw-bg-blue-600 tw-focus:tw-outline-none tw-focus:tw-bg-blue-600"
        >
          Add File Model
        </button>
        <div className="tw-h-6"></div> {/* Vertical space between buttons */}
        <button
          type="submit"
          className="tw-block tw-w-full tw-py-2 tw-text-white tw-bg-green-500 tw-rounded-lg tw-hover:tw-bg-green-600 tw-focus:tw-outline-none tw-focus:tw-bg-green-600"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;
