import React from "react";

const PrincipalInformation = ({ data }) => {
  return (
    <section className="flex flex-row lg:flex-col gap-x-4 lg:gap-y-2 items-center lg:items-start">

      {data.role === "admin" ? (
        <img
          src={
            data.logo
              ? data.logo
              : "https://cdn-icons-png.flaticon.com/512/219/219983.png"
          }
          alt="placeholde"
          className="h-32 w-32 rounded-full object-cover"
        />
      ) : (
        <img
          src={
            data.image
              ? data.image
              : "https://cdn-icons-png.flaticon.com/512/219/219983.png"
          }
          alt="placeholde"
          className="h-32 w-32 rounded-full object-cover"
        />
      )}
      <div className="flex flex-col gap-y-2">
        <h4 className="text-2xl font-medium text-light">{data.name}</h4>
        <p className="text-light/80">{data.email}</p>
      </div>
    </section>
  );
};

export default PrincipalInformation;
