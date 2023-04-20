import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiUser3Line,
  RiCopyrightLine,
  RiGlobalLine,
  RiHonourLine,
} from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import swal from "sweetalert";
import { putUser } from "../../services/authServices";

const FormEditPerfilBoss = ({ onClose, inView }) => {
  const [file, setFile] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const boss = useSelector((state) => state.auth.User);
  const dispatch = useDispatch();
  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("formLogin", JSON.stringify(data));
    swal({
      title: "Estas seguro que quieres modificar tus cambios?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((accept) => {
      if (accept) dispatch(putUser(formData));
      else swal("La modificacion no se concreto");
    });
    onClose();
  });

  const handleChange = (e) => setFile(e.target.files[0]);

  useEffect(() => {
    if (boss) {
      inView === "personal"
        ? reset({
            name: boss.name,
            phone: boss.phone,
            email: boss.email,
            address: boss.address,
            id: boss.id,
          })
        : reset({
            company: boss.company,
            company_description: boss.company_description,
            commercial_register: boss.commercial_register,
            id: boss.id,
          });
    }
  }, [reset, boss, inView]);

  return (
    <div className="fixed inset-0  bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="w-[90vw] lg:w-96 bg-base-light/60 py-6 px-8 rounded-md flex flex-col items-start gap-y-4 h-auto overflow-y-auto"
      >
        <h2 className="text-xl font-bold text-light">EDITAR PERFIL</h2>
        {inView === "personal" ? (
          <>
            {/* Input Name */}
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-sm font-medium text-light">
                Nombre completo
              </label>
              <div className="relative w-full">
                <input
                  {...register("name")}
                  type="text"
                  className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
                />
                <RiUser3Line className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
              </div>
              {errors.name && (
                <span className="text-sm font-medium text-red-400">
                  Este campo debe tener un max o min de 12 caracteres
                </span>
              )}
            </div>
            {/* Input Email */}
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-sm font-medium text-light">
                Correo electronico
              </label>
              <div className="relative w-full">
                <input
                  {...register("email")}
                  type="text"
                  className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
                />
                <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
              </div>
              {errors.email && (
                <span className="text-sm font-medium text-red-400">
                  Este campo solo acepta numeros!
                </span>
              )}
            </div>
            {/* Input Phone */}
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-sm font-medium text-light">Telefono</label>
              <div className="relative w-full">
                <input
                  {...register("phone", {pattern : /^[0-9]+$/})}
                  type="text"
                  className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
                />
                <RiPhoneLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
              </div>
              {errors.phone && (
                <span className="text-sm font-medium text-red-400">
                  Este campo solo acepta numeros!
                </span>
              )}
            </div>
            {/* Input Adress */}
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-sm font-medium text-light">
                Direccion
              </label>
              <div className="relative w-full">
                <input
                  {...register("address")}
                  type="text"
                  className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
                />
                <RiMapPinLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
              </div>
              {errors.address && (
                <span className="text-sm font-medium text-red-400">
                  Este campo es requerido!
                </span>
              )}
            </div>
            <div className="flex iems-center gap-x-4">
              <img
                src={
                  boss.image
                    ? boss.image
                    : "https://cdn-icons-png.flaticon.com/512/219/219983.png"
                }
                alt="user icon"
                className="w-16 h-16 rounded-md object-cover"
              />
              <input
                onChange={(e) => handleChange(e)}
                name="image"
                type="file"
                className="bg-base-light/70 py-1 rounded-md outline-none  "
              />
            </div>
          </>
        ) : (
          <>
            {/* Input Company Name */}
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-sm font-medium text-light">
                Nombre de compania
              </label>
              <div className="relative w-full">
                <input
                  {...register("company")}
                  type="text"
                  className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
                />
                <RiGlobalLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
              </div>
              {errors.company && (
                <span className="text-sm font-medium text-red-400">
                  Este campo es requerido!
                </span>
              )}
            </div>
            {/* Input Company Description */}
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-sm font-medium text-light">
                Descripcion de compania
              </label>
              <div className="relative w-full">
                <input
                  {...register("company_description")}
                  type="text"
                  className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
                />
                <RiHonourLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
              </div>
              {errors.company_description && (
                <span className="text-sm font-medium text-red-400">
                  Este campo es requerido!
                </span>
              )}
            </div>
            {/* Input Company Register */}
            <div className="flex flex-col gap-y-2 w-full">
              <label className="text-sm font-medium text-light">
                Registro Comercial
              </label>
              <div className="relative w-full">
                <input
                  {...register("commercial_register")}
                  type="text"
                  className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
                />
                <RiCopyrightLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
              </div>
              {errors.commercial_register && (
                <span className="text-sm font-medium text-red-400">
                  Este campo es requerido!
                </span>
              )}
            </div> 
          </>
        )}
        <section className="flex justify-between items-center w-full">
          <button
            type="button"
            className="p-2 rounded-md font-medium text-base bg-gray-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
            onClick={onClose}
          >
            Cerrar
          </button>
          <button
            className="p-2 bg-emerald-400 shadow-md shadow-emerald-400/20 rounded-md hover:bg-emerald-400/80 transition-all"
            type="submit"
          >
            Actualizar
          </button>
        </section>
      </form>
    </div>
  );
};

export default FormEditPerfilBoss;
