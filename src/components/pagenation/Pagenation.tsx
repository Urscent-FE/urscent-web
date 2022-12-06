import React, { useMemo } from 'react';
import styles from './Pagenation.module.scss';

interface IPagenationProps {
  maxPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  visiblePageCount: number;
  autoCenter?: boolean;
}

export const Pagenation: React.FC<IPagenationProps> = ({
  maxPage,
  currentPage,
  setCurrentPage,
  visiblePageCount,
  autoCenter = false,
}) => {
  const lastPageCount = maxPage % visiblePageCount;
  const lastPageFirst = maxPage + 1 - lastPageCount;

  // autoCenter = true
  const end = visiblePageCount < maxPage ? visiblePageCount : maxPage;
  const base = maxPage - end;
  const half = Math.ceil(visiblePageCount / 2);
  const lasthalf = Math.ceil(maxPage - half);

  const pageList = useMemo(() => {
    if (autoCenter) {
      if (1 === currentPage || half >= currentPage) {
        return Array.from({ length: end }, (_, index) => index + 1);
      }
      if (currentPage === maxPage || lasthalf < currentPage) {
        return Array.from({ length: end }, (_, index) => base + index + 1);
      }
      return Array.from({ length: end }, (_, index) => currentPage - half + index + 1);
    }

    // 부족한 마지막 리스트의 경우
    if (lastPageFirst <= currentPage) {
      return Array.from({ length: lastPageCount }, (_, index) => lastPageFirst + index);
    }
    // 페이지 리스트 끝 부분에 위치한 경우
    if (0 === currentPage % visiblePageCount) {
      return Array.from(
        { length: visiblePageCount },
        (_, index) => currentPage - visiblePageCount + index + 1,
      );
    }
    // 페이지 리스트 첫 부분에 위치한 경우
    if (1 === currentPage % visiblePageCount) {
      return Array.from({ length: visiblePageCount }, (_, index) => currentPage + index);
    }
    // 중간 부분에 위치한 경우
    return Array.from(
      { length: visiblePageCount },
      (_, index) => Math.floor(currentPage / visiblePageCount) * visiblePageCount + index + 1,
    );
  }, [currentPage]);

  const onClickPrevButton = () => {
    if (autoCenter) {
      setCurrentPage((prev) => {
        if (1 < prev) {
          return prev - 1;
        }
        return prev;
      });
      return;
    }
    // 첫 페이지 리스트인 경우
    if (currentPage <= visiblePageCount) {
      return;
    }
    setCurrentPage((prev) => Math.floor((prev - 1) / visiblePageCount) * visiblePageCount);
  };

  const onClickNextButton = () => {
    if (autoCenter) {
      setCurrentPage((prev) => {
        if (prev < maxPage) {
          return prev + 1;
        }
        return prev;
      });
      return;
    }
    // 마지막 페이지 리스트인 경우
    if (lastPageFirst <= currentPage) {
      return;
    }
    setCurrentPage((prev) => Math.ceil(prev / visiblePageCount) * visiblePageCount + 1);
  };

  return (
    <div className={styles.flex}>
      <button className={styles.button} onClick={() => setCurrentPage(1)}>
        First
      </button>
      <button className={styles.button} onClick={onClickPrevButton}>
        ◀
      </button>
      <ul className={styles.flex}>
        {pageList.map((item) => {
          return (
            <li
              key={item}
              onClick={() => setCurrentPage(item)}
              className={currentPage === item ? styles.accord : styles.disaccord}>
              {item}
            </li>
          );
        })}
      </ul>
      <button className={styles.button} onClick={onClickNextButton}>
        ▶
      </button>
      <button className={styles.button} onClick={() => setCurrentPage(maxPage)}>
        Last
      </button>
      <span>{`${currentPage}/${maxPage}`}</span>
    </div>
  );
};
