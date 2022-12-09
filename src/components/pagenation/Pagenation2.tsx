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
  const beforePageBase = Math.floor(currentPage / visiblePageCount - 1) * visiblePageCount;
  const currentPageBase = Math.floor(currentPage / visiblePageCount) * visiblePageCount;
  const nextPageBase = Math.ceil(currentPage / visiblePageCount) * visiblePageCount;
  const lastPageCount = maxPage % visiblePageCount;
  const secondPageFirst = visiblePageCount + 1;
  const lastPageFirst = maxPage - lastPageCount + 1;

  const pageList = useMemo(() => {
    if (lastPageFirst <= currentPage) {
      return Array.from({ length: lastPageCount }, (_, index) => currentPageBase + index + 1);
    }
    if (0 === currentPage % visiblePageCount) {
      return Array.from({ length: visiblePageCount }, (_, index) => beforePageBase + index + 1);
    }
    if (1 >= currentPage) {
      return Array.from({ length: visiblePageCount }, (_, index) => index + 1);
    }
    return Array.from({ length: visiblePageCount }, (_, index) => currentPageBase + index + 1);
  }, [currentPage]);

  return (
    <div className={styles.flex}>
      {currentPage < secondPageFirst ? (
        ''
      ) : (
        <button className={styles.button} onClick={() => setCurrentPage(1)}>
          First
        </button>
      )}
      <button
        className={styles.button}
        onClick={() => {
          setCurrentPage((prev) => {
            if (secondPageFirst > prev) {
              return prev;
            }
            if (0 === prev % visiblePageCount) {
              return beforePageBase - visiblePageCount + 1;
            }
            if (secondPageFirst <= prev) {
              return beforePageBase + 1;
            }
            return prev;
          });
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
        onClick={() =>
          setCurrentPage((prev) => {
            if (lastPageFirst <= prev) {
              return prev;
            }
            if (lastPageFirst > prev) {
              return nextPageBase + 1;
            }
            return prev;
          })
        }>
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
