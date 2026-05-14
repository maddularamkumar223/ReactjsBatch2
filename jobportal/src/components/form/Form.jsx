const Form = ({ data, handleChange, handleSubmit }) => {
  function gr(state) {
    return (
      <aside value={state.state} onChange={handleChange} key="gender">
        <label htmlFor={state.name}>{state.name}</label>
        {state?.valueData.map((data) => {
          return (
            <>
              <input type="radio" name={state.name} value={data} />
              <label htmlFor="">{data}</label>
            </>
          );
        })}
      </aside>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {data?.map((inputData) => {
        if (inputData.name === "gender" || inputData.name === "role") {
          return gr(inputData);
        } else {
          return (
            <aside key={inputData.name}>
              <label htmlFor={inputData.name}>{inputData.name} : </label>
              <input
                type={inputData.type}
                placeholder={`Enter Your ${inputData.name}`}
                name={inputData.name}
                value={inputData.state}
                onChange={handleChange}
              />
            </aside>
          );
        }
      })}
      <aside>
        <button>Submit</button>
      </aside>
    </form>
  );
};

export default Form;
