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
  const end = visiblePageCount < maxPage ? visiblePageCount : maxPage;
  const base = maxPage - end;
  const half = Math.ceil(visiblePageCount / 2);
  const lasthalf = Math.ceil(maxPage - half);

  const pageList = useMemo(() => {
    if (1 === currentPage || half >= currentPage) {
      return Array.from({ length: end }, (_, index) => index + 1);
    }
    if (currentPage === maxPage || lasthalf < currentPage) {
      return Array.from({ length: end }, (_, index) => base + index + 1);
    }
    return Array.from({ length: end }, (_, index) => currentPage - half + index + 1);
  }, [currentPage]);
  return (
    <div className={`${styles.flex}`}>
      <div className={`${styles.flex}`}>
        <div className={`${styles.flex}`}>
          <div onClick={() => setCurrentPage(1)}>first</div>
          <div
            onClick={() =>
              setCurrentPage((prev) => {
                if (1 < prev) {
                  return prev - 1;
                }
                return prev;
              })
            }>
            prev
          </div>
        </div>
        <div className={`${styles.flex}`}>
          {pageList.map((item) => {
            return (
              <div
                key={item}
                className={item === currentPage ? styles.accord : styles.disaccord}
                onClick={() => setCurrentPage(item)}>
                {item}
              </div>
            );
          })}
        </div>
        <div className={`${styles.flex}`}>
          <div
            onClick={() =>
              setCurrentPage((prev) => {
                if (prev < maxPage) {
                  return prev + 1;
                }
                return prev;
              })
            }>
            next
          </div>
          <div onClick={() => setCurrentPage(maxPage)}>last</div>
        </div>
      </div>
      <div>
        {currentPage}/total{maxPage}
      </div>
    </div>
  );
};
