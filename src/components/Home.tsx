import React, { useState } from "react";
import { Text } from "vcc-ui";
import { useCars } from "../hooks/useCars";
import { CarCard } from "./CarCard";

import styles from "../../public/css/home.module.css";
import { Spacer } from "./Spacer";
import PaginationDesktop from "./PaginationDesktop";
import PaginationMobile from "./PaginationMobile";

export const Home: React.FC = () => {
  const { cars } = useCars();
  const [selected, setSelected] = useState(0);

  const onClickNavigate = (left: boolean) => {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;

    if (left) cardList?.scrollTo({ left: scrollPosition - cardSize });
    else cardList?.scrollTo({ left: scrollPosition + cardSize });
  };

  const onClickMobile = (index: number) => {
    let cardList = document.getElementById("card-list");
    let card = cardList?.firstElementChild;
    let cardSize = (card?.clientWidth ?? 0) + 24;
    let scrollPosition = cardList?.scrollLeft ?? 0;
    if (Math.abs(selected - index) > 1) {
      cardList?.scrollTo({
        left:
          index > selected
            ? scrollPosition + cardSize * (index - selected)
            : scrollPosition - cardSize * (selected - index),
        behavior: "smooth",
      });
    } else {
      cardList?.scrollTo({
        left:
          index > selected
            ? scrollPosition + cardSize
            : scrollPosition - cardSize,
        behavior: "smooth",
      });
    }
    setSelected(index);
  };

  return (
    <div className={styles.homeWrapper}>
      <Text variant="cook">Todos os modelos Recharge</Text>
      <Spacer></Spacer>
      <div className={styles.cardsWrapper} id="card-list">
        {cars.map((car) => (
          <CarCard key={car.id} car={car}></CarCard>
        ))}
      </div>
      <PaginationDesktop
        onClickLeft={() => onClickNavigate(true)}
        onClickRight={() => onClickNavigate(false)}
      ></PaginationDesktop>
      <PaginationMobile
        selected={selected}
        onClick={onClickMobile}
        total={cars.length}
      ></PaginationMobile>
    </div>
  );
};
