import React, { useState } from "react";
import ModalSaleDetail from "./ModalSaleDetail";
import {
  RiCheckboxIndeterminateLine,
  RiCheckboxLine,
  RiMailLine,
  RiPhoneLine,
} from "react-icons/ri";
import { MdReadMore } from "react-icons/md";
import { useSelector } from "react-redux";

export default function ModalHistoryActivities({ activitie, clientDetail }) {
  const [showModal, setShowModal] = useState(false);
  const { role } = useSelector((state) => state.auth.User);
  const [hoveredSubject, setHoveredSubject] = useState("");

  if (role === "admin")
    return (
      <table
        key={activitie.id}
        className="bg-base/40 py-1 px-3 rounded-md flex flex-col"
      >
        <header className="flex justify-between gap-x-12">
          <p className="text-sm  text-light/80 flex gap-x-1 activities-center">
            {activitie?.method === "Llamada" ? <RiPhoneLine /> : <RiMailLine />}
            {activitie?.method} - Para:
            <span className="text-white">{clientDetail?.email}</span>
            <span className="text-yellow-400">{activitie.to}</span>
            <button
              className=" hover:text-gray-400/80 transition-all"
              onClick={() => setShowModal(true)}
            >
              {" "}
              Ver detalle...{" "}
            </button>
          </p>
          {showModal && (
            <ModalSaleDetail
              onClose={() => setShowModal(false)}
              clientDetail={clientDetail}
              activitie={activitie}
            />
          )}

          <span
            className={`text-2xl ${
              activitie?.state === "Pendiente"
                ? "text-red-200"
                : "text-emerald-200"
            } lowercase `}
          >
            {activitie?.state === "Pendiente" ? (
              <RiCheckboxIndeterminateLine />
            ) : (
              <RiCheckboxLine />
            )}
          </span>
        </header>
        <p className="tex-sm text-secondary font-medium">
          "{activitie?.subject || "No hay sujeto para mostrar"}"
        </p>
      </table>
    );
  else
    return (
      <tr className=" border-b dark:border-base/30">
        <td className="whitespace-nowrap  px-6 py-4 font-medium">
          {activitie?.method}
        </td>
        <td className="whitespace-nowrap px-6 py-4  font-medium">
          {activitie?.state}
        </td>
        <td
          className=" whitespace-nowrap px-6 py-4 font-medium"
          onMouseEnter={() => setHoveredSubject(true)}
          onMouseLeave={() => setHoveredSubject(false)}
          title={
            hoveredSubject === activitie?.subject ? activitie?.subject : ""
          }
        >
          {activitie?.subject?.length > 20
            ? activitie?.subject.slice(0, 20) + "..."
            : activitie?.subject}
          {hoveredSubject ? (
            <span className="absolute hidden group-hover:flex -left-3 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
              Agregar
            </span>
          ) : null}
        </td>
        <td className="whitespace-nowrap  px-6 py-4">
          {activitie?.createdAt.split("T")[0]}
        </td>
        <td className="whitespace-nowrap  px-6 py-4">
          <button onClick={() => setShowModal(true)}>
            <MdReadMore className="text-2xl " />
          </button>
          {showModal && (
            <ModalSaleDetail
              onClose={() => setShowModal(false)}
              clientDetail={clientDetail}
              activitie={activitie}
            />
          )}
        </td>
      </tr>
    );
}
