import React, { useState } from "react";
import { useEffect } from "react";
import {
  RiAddFill,
  RiGroupLine,
  RiLoader4Fill,
  RiSecurePaymentLine,
  RiShoppingBagLine,
} from "react-icons/ri";
import { getClients } from "../services/clientsServices";
import { useDispatch, useSelector } from "react-redux";
import CreateClient from "./forms/CreateClient";

const SummarySection = ({ data, products }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false)
  const { status, clients } = useSelector((state) => state.clients);
  const statusProducts = useSelector((state) => state.products.status);
  const cantDes = clients?.reduce(
    (total, client) => (!client.enable ? total + 1 : total),
    0
  );
  const productsDes = products?.reduce(
    (total, product) => (!product.enable ? total + 1 : total),
    0
  );

  useEffect(() => {
    if (status === "idle" && data?.id) dispatch(getClients(data?.id));
  }, [status, dispatch, data?.id]);

  const onQuantity = (key) =>
    clients?.reduce((total, client) => (client[key] ? total + 1 : total), 0);
  const onQuantityProducts = (key) =>
    products?.reduce((total, client) => (client[key] ? total + 1 : total), 0);
  const onQuantityCategories = () => {
    const onlyCat = products?.map((product) => product.category);
    const categories = [...new Set(onlyCat)];
    return categories.length;
  };

  if (statusProducts === "loading" || status === "loading") {
    return (
      <div className="flex justify-center items-center">
        <RiLoader4Fill className="text-3xl text-light/80 animate-spin" />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
      <article className="bg-base-light/30 shadow-md rounded-md py-2 px-3 flex flex-col items-start gap-y-2">
        <RiSecurePaymentLine className="text-3xl text-light/80" />
        <h3 className="text-light text-3xl font-bold tracking-wide">
          ${data.total_monthly_sales}
        </h3>
        <p className="text-sm font-medium text-light/80">Balance actual</p>
      </article>
      <article className="bg-base-light/30 shadow-md rounded-md py-2 px-3 flex flex-col items-start gap-y-2">
        {!clients.length && status !== "loading" ? (
          <div className="flex flex-col items-center gap-y-2 justify-center h-full">
            <p className="text-sm font-medium text-light/80">
              Usted no tiene clientes
            </p>
            <p className="text-sm font-medium text-light/80">
              Implemente clientes
            </p>
            <button className="bg-emerald-400 p-2 rounded-md flex items-center gap-x-2 hover:bg-emerald-500 transition-colors"  onClick={() => setShowModal(!showModal)}>
              <RiAddFill />
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-light text-3xl font-bold tracking-wide">
              {clients?.length}
            </h3>
            <p className="text-sm font-medium text-light/80 flex gap-x-1 items-center">
              Clientes <RiGroupLine />
            </p>
            <footer className="flex gap-x-2 items-center">
              <p className="flex gap-x-1 items-center text-sm ">
                {onQuantity("enable")}
                <span className="text-xs font-medium text-emerald-200">
                  Hab
                </span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                {cantDes}
                <span className="text-xs font-medium text-red-200">Des</span>
              </p>
              <p className="flex gap-x-1 items-center text-sm ">
                {onQuantity("vip")}
                <span className="text-xs font-medium text-yellow-200">
                  Vips
                </span>
              </p>
            </footer>
          </>
        )}
      </article>
      <article className="bg-base-light/30 shadow-md rounded-md py-2 px-3 flex flex-col items-start gap-y-2">
        <h3 className="text-light text-3xl font-bold tracking-wide">
          {products?.length}
        </h3>
        <p className="text-sm font-medium text-light/80 flex gap-x-1 items-center w-28">
          Productos disponibles <RiShoppingBagLine className="text-4xl" />
        </p>
        <footer className="flex gap-x-2 items-center">
          <p className="flex gap-x-1 items-center text-sm ">
            {onQuantityProducts("enable")}
            <span className="text-xs font-medium text-emerald-200">Hab</span>
          </p>
          <p className="flex gap-x-1 items-center text-sm ">
            {productsDes}
            <span className="text-xs font-medium text-red-200">Des</span>
          </p>
          <p className="flex gap-x-1 items-center text-sm ">
            {onQuantityCategories()}
            <span className="text-xs font-medium text-yellow-200">Cat</span>
          </p>
        </footer>
      </article>
      <CreateClient isVisible={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default SummarySection;
