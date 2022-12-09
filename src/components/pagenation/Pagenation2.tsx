import React, { useMemo } from 'react';
import styles from './Pagenation.module.scss';

interface IPagenationProps {
  maxPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  visiblePageCount: number;
}

export const Pagenation: React.FC<IPagenationProps> = ({
  maxPage,
  currentPage,
  setCurrentPage,
  visiblePageCount,
}) => {
  const lastPageCount = maxPage % visiblePageCount || visiblePageCount;
  const lastPageFirst = maxPage - lastPageCount + 1;

  const pageList = useMemo(() => {
    if (lastPageFirst <= currentPage) {
      return Array.from({ length: lastPageCount }, (_, index) => lastPageFirst + index);
    }
    if (0 === currentPage % visiblePageCount) {
      return Array.from(
        { length: visiblePageCount },
        (_, index) => currentPage - visiblePageCount + index + 1,
      );
    }
    return Array.from(
      { length: visiblePageCount },
      (_, index) => Math.floor(currentPage / visiblePageCount) * visiblePageCount + index + 1,
    );
  }, [currentPage]);

  return (
    <div className={styles.flex}>
      {currentPage <= visiblePageCount ? (
        ''
      ) : (
        <button className={styles.button} onClick={() => setCurrentPage(1)}>
          First
        </button>
      )}
      <button
        className={styles.button}
        onClick={() => {
          if (currentPage <= visiblePageCount) {
            return;
          }
          setCurrentPage(
            (prev) => (Math.floor((prev - 1) / visiblePageCount) - 1) * visiblePageCount + 1,
          );
        }}>
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

      <button
        className={styles.button}
        onClick={() => {
          if (lastPageFirst <= currentPage) {
            return;
          }
          setCurrentPage((prev) => Math.ceil(prev / visiblePageCount) * visiblePageCount + 1);
        }}>
        ▶
      </button>
      {currentPage < lastPageFirst ? (
        <button className={styles.button} onClick={() => setCurrentPage(maxPage)}>
          Last
        </button>
      ) : (
        ''
      )}

      <span>{`${currentPage}/${maxPage}`}</span>
    </div>
  );
};
