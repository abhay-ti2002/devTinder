import React from "react";

const UserCards = (props) => {
  const { name, age, gender, about, photourl} = props.user ?? {};
  // console.log(name);

  return (
    <div className="card bg-base-300 w-80 shadow-md  shadow-gray-700">
      <figure>
        <img src={photourl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3>Age: {age}</h3>
        <h3>Gender: {gender}</h3>
        <p>{about}</p>
        <div className="flex justify-center">
          <button className="btn btn-primary mr-5 shadow-md shadow-slate-500">
            Ignore
          </button>
          <button className="btn btn-primary shadow-md shadow-slate-500">
            Connection
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCards;
