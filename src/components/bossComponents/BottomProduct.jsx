import {
  RiAddFill,
  RiEdit2Line,
  RiCloseCircleLine,
  RiCheckboxCircleLine,
  RiDeleteBin5Line,
} from "react-icons/ri";
import FormProduct from "../forms/FormProduct";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteProduct,
  toggleStatusProduct,
} from "../../services/productsServices";
import { cleanProductSelect } from "../../app/features/productsSlice";

const BottomProduct = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const { productSelected } = useSelector((state) => state.products);
  const onDisabled = () =>
    dispatch(toggleStatusProduct({ productSelected, enable: false }));
  const onEnabled = () =>
    dispatch(toggleStatusProduct({ productSelected, enable: true }));
  const onCreate = () => {
    dispatch(cleanProductSelect());
    setShowModal(true);
  };
  const onDelete = () => dispatch(deleteProduct(productSelected));

  return (
    <section className=" text-white text-bold flex justify-evenly w-full  items-center rounded-md flex-wrap gap-4 ">
      <button
        className=" rounded-xl py-2 px-3 shadow-emerald-400/20 hover:scale-[1.03] hover:bg-emerald-400/80 transition-all shadow-md bg-emerald-400 "
        onClick={onCreate}
      >
        <RiAddFill className="text-2xl" />
      </button>
      <button
        className=" rounded-xl py-2 px-3 shadow-indigo-400/20 hover:scale-[1.03] hover:bg-indigo-400/60 transition-all shadow-md bg-indigo-400 "
        onClick={() => setShowModal(true)}
      >
        <RiEdit2Line className="text-2xl" />
      </button>
      <button
        className=" rounded-xl py-2 px-3 shadow-gray-500/20 hover:scale-[1.03] hover:bg-gray-500/60 transition-all shadow-md bg-gray-500 "
        onClick={onDisabled}
      >
        <RiCloseCircleLine className="text-2xl" />
      </button>
      <button
        className=" rounded-xl py-2 px-3 shadow-green-400/20 hover:scale-[1.03] hover:bg-green-400/60 transition-all shadow-md bg-green-400 "
        onClick={onEnabled}
      >
        <RiCheckboxCircleLine className="text-2xl" />
      </button>

      <button
        className="rounded-xl py-2 px-3 shadow-gray-500/20 hover:scale-[1.03] hover:bg-gray-500/60 transition-all shadow-md bg-gray-500 "
        onClick={onDelete}
      >
        <RiDeleteBin5Line className="text-2xl" />
      </button>
      <FormProduct isVisible={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default BottomProduct;
