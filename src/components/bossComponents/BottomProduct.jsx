import {
  RiAddFill,
  RiEdit2Line,
  RiCloseCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import FormProduct from "../forms/FormProduct";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { toggleStatusProduct } from "../../services/productsServices";
import { cleanProductSelect } from "../../app/features/productsSlice";

const BottomProduct = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { productSelected } = useSelector((state) => state.products);

  const onDisabled = () => {
    dispatch(toggleStatusProduct({ productSelected, enable: false }));
  };

  const onEnabled = () => {
    dispatch(toggleStatusProduct({ productSelected, enable: true }));
  };
  const onCreate = () => {
    setShowModal(true);
    dispatch(cleanProductSelect());
  };

  const handleShowModal = () => {
    setShowModal(true);
  };
  // const onDelete = () => dispatch(deleteProduct(productSelected));

  return (
    <section className=" text-white text-bold flex justify-evenly w-full  items-center rounded-md flex-wrap gap-4 ">
      <button
        className="group rounded-xl py-2 px-3 shadow-emerald-400/20 hover:scale-[1.03] hover:bg-emerald-400/80 transition-all shadow-md bg-emerald-400 "
        onClick={onCreate}
      >
        <RiAddFill className="text-2xl" />
        <span className="absolute hidden group-hover:flex -left-3 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
          Agregar
        </span>
      </button>
      <button
        className="group rounded-xl py-2 px-3 shadow-indigo-400/20 hover:scale-[1.03] hover:bg-indigo-400/60 transition-all shadow-md bg-indigo-400 "
        onClick={() => handleShowModal()}
      >
        <RiEdit2Line className="text-2xl" />
        <span className="absolute hidden group-hover:flex -left-1 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
          Editar
        </span>
      </button>
      <button
        className="group rounded-xl py-2 px-3 shadow-gray-500/20 hover:scale-[1.03] hover:bg-gray-500/60 transition-all shadow-md bg-gray-500 "
        onClick={() => onDisabled()}
      >
        <RiCloseCircleLine className="text-2xl" />
        <span className="absolute hidden group-hover:flex -left-5 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
          Deshabilitar
        </span>
      </button>
      <button
        className="group rounded-xl py-2 px-3 shadow-green-400/20 hover:scale-[1.03] hover:bg-green-400/60 transition-all shadow-md bg-green-400 "
        onClick={() => onEnabled()}
      >
        <RiCheckboxCircleLine className="text-2xl" />
        <span className="absolute hidden group-hover:flex -left-3 -top-2 -translate-y-full w-auto px-2 py-1 bg-gray-700 rounded-lg text-center text-white text-sm after:content-[''] after:absolute after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-gray-700">
          Habilitar
        </span>
      </button>

      {/* <button
        className="rounded-xl py-2 px-3 shadow-gray-500/20 hover:scale-[1.03] hover:bg-gray-500/60 transition-all shadow-md bg-gray-500 "
        onClick={onDelete}
      >
        <RiDeleteBin5Line className="text-2xl" />
      </button> */}
      <FormProduct isVisible={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default BottomProduct;
