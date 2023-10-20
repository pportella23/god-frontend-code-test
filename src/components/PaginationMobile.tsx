import styles from "../../public/css/components/paginationMobile.module.css";

interface PaginationMobileProps {
  total: number;
  onClick: (i: number) => void;
  selected: number;
}

export default function paginationMobile({
  total,
  onClick,
  selected,
}: PaginationMobileProps) {
  return (
    <div className={styles.btnWrapper}>
      {Array.from({ length: total }).map((element, index) => (
        <button
          className={index === selected ? styles.btnSelected : styles.btn}
          key={index}
          onClick={() => onClick(index)}
        ></button>
      ))}
    </div>
  );
}
