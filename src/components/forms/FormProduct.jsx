import { useEffect, useState } from "react";
import validation from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";

import {
  RiProductHuntLine,
  RiImageAddFill,
  RiMoneyDollarBoxLine,
  RiPercentLine,
  RiStore3Fill,
  RiBubbleChartLine,
} from "react-icons/ri";
import swal from "sweetalert";
import { createProduct, updateProduct } from "../../services/productsServices";

function Formproduct({ isVisible, onClose }) {
  const dispatch = useDispatch();
  const productId = useSelector((state) => state.products.productSelected);

  const bossId = useSelector((state) => state.auth.User.id);

  const products = useSelector((state) => state.products.products);
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const [file, setFile] = useState(null);

  const [productData, setProductData] = useState({
    name: "",
    quantity: "",
    enable: true,
    cost_price: "",
    sale_price: "",
    discount: "",
    category: "",
    bossId,
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    quantity: "",

    cost_price: "",
    sale_price: "",
    discount: "",
    category: "",
  });

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "image") {
      setFile(files[0]);
    } else {
      setProductData({
        ...productData,
        [name]: value,
      });
    }
    setErrors(
      validation({
        ...productData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("productData", JSON.stringify(productData));
    for (let entry of formData.entries()) {
    }

    if (errors.name) {
      swal("Error", "Por favor revise los datos introducidos. ", "error");
    } else if (productId) {
      swal({
        title: "Estas seguro que deseas modificar el producto?",
        text: `Nombre: ${productData.name}
         Cantidad: ${productData.quantity}
         Precio de costo: ${productData.cost_price}
         Precio de venta:${productData.sale_price}
         Descuento:${productData.discount}
         Categoría:${productData.category}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((edit) => {
        if (edit) {
          swal(
            "El producto fue modificado",

            dispatch(updateProduct(formData)),
            onClose(),
            {
              icon: "success",
            }
          );
        } else {
          swal("El producto no se ha modificado");
        }
      });
    } else {
      swal({
        title: "Estas seguro que deseas agregar el producto?",
        text: `Nombre: ${productData.name}
        Cantidad: ${productData.quantity}
        Precio de costo: ${productData.cost_price}
        Precio de venta:${productData.sale_price}
        Descuento:${productData.discount}
        Categoría:${productData.category}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((edit) => {
        if (edit) {
          swal(
            "El producto fue agregado",
            dispatch(createProduct(formData)),
            setProductData({
              name: "",

              quantity: "",
              enable: true,
              cost_price: "",
              sale_price: "",
              discount: "",
              category: "",
              bossId,
            }),
            onClose(),
            {
              icon: "success",
            }
          );
        } else {
          swal("El producto no ha sido agregado");
        }
      });
    }
  };

  useEffect(() => {
    if (productId) {
      const obj = products.find((product) => product.id === productId);

      setProductData({ ...obj, id: productId });
    } else
      setProductData({
        name: "",

        quantity: "",
        enable: true,
        cost_price: "",
        sale_price: "",
        discount: "",
        category: "",
        bossId,
      });
  }, [productId, products, dispatch]);

  if (!isVisible) return undefined;
  return (
    <div
      className="fixed inset-0  bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      {" "}
      <form
        className="w-96 bg-base-light/70 py-6 px-4 rounded-md flex flex-col gap-y-4"
        onSubmit={handleSubmit}
      >
        <h4 className="text-xl font-medium text-light">
          {productId ? "Actualizar producto" : "Guardar un producto"}
        </h4>
        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="name">
            Nombre:
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={productData.name}
              name="name"
              onChange={handleInputChange}
            />
            <RiProductHuntLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.name && <span style={{ color: "red" }}> {errors.name}</span>}
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="image">
            Imagen:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="file"
              FileList={file}
              name="image"
              onChange={handleInputChange}
            />
            <RiImageAddFill className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.image && (
            <span style={{ color: "red" }}> {errors.image}</span>
          )}
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="quantity">
            Cantidad:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={productData.quantity}
              name="quantity"
              onChange={handleInputChange}
            />
            <RiBubbleChartLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.quantity && (
            <span style={{ color: "red" }}> {errors.quantity}</span>
          )}
        </section>

        <section className="flex flex-col gap-y-2">
          <label
            className="text-sm font-medium text-light"
            htmlFor="cost_price"
          >
            Precio de costo:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={productData.cost_price}
              name="cost_price"
              onChange={handleInputChange}
            />
            <RiMoneyDollarBoxLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.cost_price && (
            <span style={{ color: "red" }}> {errors.cost_price}</span>
          )}
        </section>

        <section className="flex flex-col gap-y-2">
          <label
            className="text-sm font-medium text-light"
            htmlFor="sale_price"
          >
            Precio de venta:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={productData.sale_price}
              name="sale_price"
              onChange={handleInputChange}
            />
            <RiMoneyDollarBoxLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.sale_price && (
            <span style={{ color: "red" }}> {errors.sale_price}</span>
          )}
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="discount">
            Descuento:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={productData.discount}
              name="discount"
              onChange={handleInputChange}
            />
            <RiPercentLine className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.discount && (
            <span style={{ color: "red" }}> {errors.discount}</span>
          )}
        </section>

        <section className="flex flex-col gap-y-2">
          <label className="text-sm font-medium text-light" htmlFor="category">
            Categoría:{" "}
          </label>
          <div className="relative">
            <input
              className="bg-base-light/70 py-1 rounded-md outline-none pl-8 pr-4 w-full"
              type="text"
              value={productData.category}
              name="category"
              onChange={handleInputChange}
            />
            <RiStore3Fill className="absolute top-1/2 -translate-y-1/2 left-2 text-xl text-secondary " />
          </div>
          {errors.category && (
            <span style={{ color: "red" }}> {errors.category}</span>
          )}
        </section>

        <footer className="flex justify-between items-center">
          <button
            type="button"
            className="p-2 rounded-md font-medium text-base bg-gray-300 shadow-md shadow-gray-300/20 hover:bg-gray-300/80 transition-all"
            onClick={() => {
              onClose();
            }}
          >
            CERRAR
          </button>
          <button
            className="p-2 bg-emerald-400 shadow-md shadow-emerald-400/20 rounded-md hover:bg-emerald-400/80 transition-all"
            type="submit"
          >
            {productId ? "Actualizar" : "Guardar"}
          </button>
        </footer>
      </form>
    </div>
  );
}

export default Formproduct;
