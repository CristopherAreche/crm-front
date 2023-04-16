import React from "react";
import { resetSellers, searchSellers } from "../../app/features/sellerSlice";
import { useSelector, useDispatch } from "react-redux";
import BossFilterTop from "../../components/bossComponents/BossFilterTop";
import Header from "../../components/Header";
import SellerList from "../../components/bossComponents/SellersList";
import BossFilterBottom from "../../components/bossComponents/BossFilterBottom";

function JefeVendedores() {
  const dispatch = useDispatch();
  const sellers = useSelector((state) => state.sellers.sellers);

  return (
    <section className="py-6 px-12 z-[2] ">
      <Header
        mainText={"VENDEDORES"}
        data={sellers}
        onSearch={(filteredSellers) => dispatch(searchSellers(filteredSellers))}
        onReset={() => dispatch(resetSellers())}
      />
      <BossFilterTop />
      <SellerList data={sellers} />
      <BossFilterBottom />
    </section>
  );
}

export default JefeVendedores;
