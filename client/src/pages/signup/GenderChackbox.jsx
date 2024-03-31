const GenderChackbox = () => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className="label gap-2  cursor-pointer">
          <span className="label-text text-slate-200">Male</span>
          <input type="checkbox" className="checkbox border-gray-400 " />
        </label>
      </div>
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text text-slate-200">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-400 text-gray-300"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderChackbox;
