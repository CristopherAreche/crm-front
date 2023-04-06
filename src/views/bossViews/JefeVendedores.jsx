import React from "react";
import { resetSellers, searchSellers } from "../../app/features/sellerSlice";
import { useSelector, useDispatch } from "react-redux";
import BossFilterTop from "../../components/bossComponents/BossFilterTop";
import Header from "../../components/Header";
import SellerList from "../../components/bossComponents/SellersList";

function JefeVendedores() {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellers.sellers);

  return (
    <>
      <Header
        mainText={"VENDEDORES"}
        data={sellers}
        onSearch={(filteredSellers) => dispatch(searchSellers(filteredSellers))}
        onReset={() => dispatch(resetSellers())}
      />
      <BossFilterTop />
      <SellerList />
    </>
  );
}

export default JefeVendedores;
