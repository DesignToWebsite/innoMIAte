import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const StepsForm = () => {
  const [steps, setSteps] = useState([
    {
      title: "",
      description: "",
      submissionType: "",
    },
  ]);

  const handleTitleChange = (index, e) => {
    const newSteps = [...steps];
    newSteps[index].title = e.target.value;
    setSteps(newSteps);
  };

  const handleDescriptionChange = (index, e) => {
    const newSteps = [...steps];
    newSteps[index].description = e.target.value;
    setSteps(newSteps);
  };

  const handleSubmissionTypeChange = (index, e) => {
    const newSteps = [...steps];
    newSteps[index].submissionType = e.target.value;
    setSteps(newSteps);
  };

  const handleAddStep = () => {
    const newStep = { title: "", description: "", submissionType: "" };
    setSteps([...steps, newStep]);
  };

  const handleDeleteStep = (index) => {
    const newSteps = [...steps];
    newSteps.splice(index, 1);
    setSteps(newSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(steps);
  };

  return (
    <div className="tw-h-full">
      <form
        onSubmit={handleSubmit}
        className="tw-max-w-lg tw-mx-auto tw-mt-8 tw-p-8 tw-bg-white tw-shadow-md tw-rounded-lg"
      >
        <h2 className="tw-text-2xl tw-mb-4 tw-text-center">Create Steps</h2>
        {steps.map((step, index) => (
          <div key={index} className="tw-mb-4">
            <h3 className="tw-text-lg tw-mb-2">Step {index + 1}</h3>
            <label
              htmlFor={`title-${index}`}
              className="tw-block tw-text-gray-700 tw-mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id={`title-${index}`}
              value={step.title}
              onChange={(e) => handleTitleChange(index, e)}
              required
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
            />
            <label
              htmlFor={`description-${index}`}
              className="tw-block tw-text-gray-700 tw-mb-2"
            >
              Description:
            </label>
            <textarea
              id={`description-${index}`}
              value={step.description}
              onChange={(e) => handleDescriptionChange(index, e)}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-resize-none tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
            ></textarea>
            <label
              htmlFor={`submission-type-${index}`}
              className="tw-block tw-text-gray-700 tw-mb-2"
            >
              Submission Type:
            </label>
            <select
              id={`submission-type-${index}`}
              value={step.submissionType}
              onChange={(e) => handleSubmissionTypeChange(index, e)}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
            >
              <option value="">Select Submission Type</option>
              <option value="code repository">Code Repository</option>
              <option value="video presentations">Video Presentations</option>
              <option value="demo apps">Demo Apps</option>
              <option value="document">Document</option>
              <option value="presentation">Presentation</option>
            </select>
            <button
              type="button"
              onClick={() => handleDeleteStep(index)}
              className="tw-inline-block tw-px-3 tw-py-1 tw-text-xs tw-font-semibold tw-leading-none tw-text-red-600 tw-bg-transparent tw-border tw-border-red-600 tw-rounded tw-hover:tw-bg-red-600 tw-hover:tw-text-white tw-focus:tw-outline-none tw-focus:tw-bg-red-600 tw-focus:tw-text-white"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddStep}
          className="tw-block tw-w-full tw-py-2 tw-mb-4 tw-text-white tw-bg-blue-500 tw-rounded-lg tw-hover:tw-bg-blue-600 tw-focus:tw-outline-none tw-focus:tw-bg-blue-600"
        >
          Add Step
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

export default StepsForm;
