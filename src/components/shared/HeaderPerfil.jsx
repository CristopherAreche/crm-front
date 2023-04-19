import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { putBoss } from "../../app/features/bossSlice";
import { toggleStatusSeller } from "../../services/sellersServices";
import swal from "sweetalert";
import { toggleStatusMyPerfil } from "../../app/features/authSlice";

const HeaderPerfil = () => {
  const user = useSelector((state) => state.auth.User);
  const dispatch = useDispatch();

  const onToggleEnable = () => {
    swal({
      title: `${
        user.enable
          ? "Estas seguro que quieres darte de baja?"
          : "Estas seguro que quiere habilitar tu perfil?"
      }`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((accept) => {
      if (accept) {
        if (user.role !== "admin") {
          dispatch(toggleStatusSeller({ enable: !user.enable, id: user.id }));
          dispatch(toggleStatusMyPerfil());
        } else dispatch(putBoss({ enable: !user.enable, id: user.id }));
      } else swal("La modificacion no se concreto");
    });
  };

  return (
    <header className="flex justify-between mb-6 border-b border-light/50 pb-6">
      <h3 className="text-2xl font-medium text-light">Perfil de {user.name}</h3>
      <button
        onClick={onToggleEnable}
        className={`${
          user.enable
            ? "text-red-400 border-red-500 "
            : "text-emerald-400 border-emerald-500 "
        } text-sm  border p-1 lg:px-0 px-2 rounded-md hover:scale-[1.03] transition-all`}
      >
        {user.enable ? "Dar de baja" : "Habilitar"}
      </button>
    </header>
  );
};

export default HeaderPerfil;
