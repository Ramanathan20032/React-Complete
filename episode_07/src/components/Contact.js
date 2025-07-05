const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto shadow-md rounded-xl m-7 p-5">
      <h1 className="text-4xl text-center font-semibold capitalize text-blue-950 mb-3">
        contact Us
      </h1>
      <p className="text-lg text-center text-amber-950 mb-5">Contact Page Content</p>
      <div className="input-box flex gap-5">
        <input
          className="border-zinc-800 border-1 p-1.5 rounded-md"
          placeholder="name"
        ></input>
        <input
          className="border-zinc-800 border-1 p-1.5 rounded-md"
          placeholder="phone No"
        ></input>
        <button className="border border-amber-600 p-1 px-2 rounded-md">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
