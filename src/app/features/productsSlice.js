import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/productsServices";


const initialState = {
    error: null,
    products: [],
    message: "",
    status: "idle",
    };


