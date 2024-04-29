import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const PrizeForm = () => {
  const [prizes, setPrizes] = useState([
    {
      rankStart: 1, // Start with rank 1
      rankEnd: "",
      type: "",
      detail: "",
      currency: "",
    },
  ]);

  const [rankMode, setRankMode] = useState("single"); // Default to single rank mode
  const [nextRank, setNextRank] = useState(2); // Default next rank is 2

  const handleRankModeChange = (e) => {
    setRankMode(e.target.value);
  };

  const handleRankEndChange = (index, e) => {
    const newPrizes = [...prizes];
    newPrizes[index].rankEnd = e.target.value;
    setPrizes(newPrizes);
  };

  const handleTypeChange = (index, e) => {
    const newPrizes = [...prizes];
    newPrizes[index].type = e.target.value;
    setPrizes(newPrizes);
  };

  const handleDetailChange = (index, e) => {
    const newPrizes = [...prizes];
    newPrizes[index].detail = e.target.value;
    setPrizes(newPrizes);
  };

  const handleCurrencyChange = (index, e) => {
    const newPrizes = [...prizes];
    newPrizes[index].currency = e.target.value;
    setPrizes(newPrizes);
  };

  const handleAddPrize = () => {
    const newPrize = {
      rankStart: rankMode === "single" ? nextRank : nextRank - 1,
      rankEnd: "",
      type: "",
      detail: "",
      currency: "",
    };
    setPrizes([...prizes, newPrize]);
    setNextRank(rankMode === "single" ? nextRank + 1 : nextRank);
  };

  const handleDeletePrize = (index) => {
    const updatedPrizes = [...prizes];
    updatedPrizes.splice(index, 1);
    setPrizes(updatedPrizes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(prizes);
  };

  return (
    <div className="tw-h-full">
      <form
        onSubmit={handleSubmit}
        className="tw-max-w-lg tw-mx-auto tw-mt-8 tw-p-8 tw-bg-white tw-shadow-md tw-rounded-lg"
      >
        <h2 className="tw-text-2xl tw-mb-4 tw-text-center">Create Prizes</h2>

        <div className="tw-mb-4">
          <label className="tw-mr-4">
            <input
              type="radio"
              value="single"
              checked={rankMode === "single"}
              onChange={handleRankModeChange}
            />{" "}
            Single Rank
          </label>
          <label>
            <input
              type="radio"
              value="range"
              checked={rankMode === "range"}
              onChange={handleRankModeChange}
            />{" "}
            Range of Ranks
          </label>
        </div>

        {prizes.map((prize, index) => (
          <div key={index} className="tw-mb-4">
            <h3 className="tw-text-lg tw-mb-2">
              Prize for {rankMode === "single" ? "Rank" : "Ranks"}{" "}
              {prize.rankStart} {rankMode === "range" && `- ${prize.rankEnd}`}
            </h3>
            {rankMode === "range" && index !== 0 && (
              <input
                type="number"
                placeholder="Rank End"
                value={prize.rankEnd}
                onChange={(e) => handleRankEndChange(index, e)}
                className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500 tw-ml-2"
              />
            )}
            <select
              value={prize.type}
              onChange={(e) => handleTypeChange(index, e)}
              className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
            >
              <option value="">Select Prize Type</option>
              <option value="financial">Financial Sum</option>
              <option value="material">Material Award</option>
              <option value="course">Course</option>
              <option value="certificate">Certificate</option>
            </select>
            {prize.type === "financial" && (
              <div className="tw-flex">
                <input
                  type="text"
                  placeholder="Amount"
                  value={prize.detail}
                  onChange={(e) => handleDetailChange(index, e)}
                  className="tw-w-1/2 tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Currency"
                  value={prize.currency}
                  onChange={(e) => handleCurrencyChange(index, e)}
                  className="tw-w-1/2 tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500 tw-ml-2"
                />
              </div>
            )}
            {prize.type !== "financial" && (
              <input
                type="text"
                placeholder={
                  prize.type === "material"
                    ? "Material Award Description"
                    : prize.type === "course"
                    ? "Course Description"
                    : prize.type === "certificate"
                    ? "Certificate Description"
                    : "Prize Detail"
                }
                value={prize.detail}
                onChange={(e) => handleDetailChange(index, e)}
                className="tw-w-full tw-px-4 tw-py-2 tw-mb-2 tw-border tw-border-gray-300 tw-rounded-lg tw-focus:tw-outline-none tw-focus:tw-border-blue-500"
              />
            )}
            <button
              type="button"
              onClick={() => handleDeletePrize(index)}
              className="tw-inline-block tw-px-3 tw-py-1 tw-text-xs tw-font-semibold tw-leading-none tw-text-red-600 tw-bg-transparent tw-border tw-border-red-600 tw-rounded tw-hover:tw-bg-red-600 tw-hover:tw-text-white tw-focus:tw-outline-none tw-focus:tw-bg-red-600 tw-focus:tw-text-white"
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddPrize}
          className="tw-block tw-w-full tw-py-2 tw-mb-4 tw-text-white tw-bg-blue-500 tw-rounded-lg tw-hover:tw-bg-blue-600 tw-focus:tw-outline-none tw-focus:tw-bg-blue-600"
        >
          Add Prize
        </button>
        <div className="tw-h-6"></div>
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

export default PrizeForm;
