import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the datepicker

const Badges = () => {
  const [badgeType, setBadgeType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [criteria, setCriteria] = useState("");
  const [expirationDate, setExpirationDate] = useState(null);

  const handleBadgeTypeChange = (e) => {
    setBadgeType(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleCriteriaChange = (e) => {
    setCriteria(e.target.value);
  };

  const handleExpirationDateChange = (date) => {
    setExpirationDate(date);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Badge Type:", badgeType);
      console.log("Description:", description);
      console.log("Image:", image);
      console.log("Criteria:", criteria);
      console.log("Expiration Date:", expirationDate);
      setBadgeType("");
      setDescription("");
      setImage("");
      setCriteria("");
      setExpirationDate(null);
    };

    return (
      <div className="tw-h-full">
        <form
          onSubmit={handleSubmit}
          className="tw-max-w-lg tw-mx-auto tw-mt-8 tw-p-8 tw-bg-white tw-shadow-md tw-rounded-lg"
        >
          <h2 className="tw-text-2xl tw-mb-4 tw-text-center">Create Badge</h2>

          <div className="tw-mb-4">
            <input
              type="text"
              placeholder="Badge Type"
              value={badgeType}
              onChange={handleBadgeTypeChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500 tw-ml-2"
            />
          </div>

          <div className="tw-mb-4">
            <textarea
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
              rows="4"
            />
          </div>

          <div className="tw-mb-4">
            <input
              type="text"
              placeholder="Image"
              value={image}
              onChange={handleImageChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
            />
          </div>

          <div className="tw-mb-4">
            <textarea
              placeholder="Criteria"
              value={criteria}
              onChange={handleCriteriaChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
              rows="4"
            />
          </div>

          <div className="tw-mb-4">
            <DatePicker
              selected={expirationDate}
              onChange={handleExpirationDateChange}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
              placeholderText="Select Expiration Date"
            />
          </div>

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
};
export default Badges;
