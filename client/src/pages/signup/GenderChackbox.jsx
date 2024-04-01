/* eslint-disable react/prop-types */
const GenderChackbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          } `}
        >
          <span className="label-text text-slate-200">Male</span>
          <input
            type="checkbox"
            className="checkbox border-gray-400 "
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          } `}
        >
          <span className="label-text text-slate-200">Female</span>
          <input
            type="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            className="checkbox border-slate-400 text-gray-300"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderChackbox;
