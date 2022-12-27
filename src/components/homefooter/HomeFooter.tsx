import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeFooter.module.scss';
import Instagram from '../../assets/svg/instagram.svg';
import Email from '../../assets/svg/e-mail.svg';
import { UrscentLogo } from '@/assets/icons/UrscentLogo';

const instagramUrl = 'https://www.instagram.com/magazine_speakeasy/';

export const HomeFooter: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={`content-box ${styles.footerbox}`}>
        <UrscentLogo width={200} />
        <div className={styles.infoBox}>
          <div>
            <ul className={styles.siteMap}>
              <li>
                <Link to='/'>Notes</Link>
              </li>
              <li>
                <Link to='/'>Perfume Brand</Link>
              </li>
              <li>
                <Link to='/'>Perfumer</Link>
              </li>
              <li>
                <Link to='/'>개인정보처리방침</Link>
              </li>
            </ul>
            <p>
              나만의 향수를 찾고 싶은, 향수를 사랑하는, urscent는 그런 사람들은 위한 공간입니다.
              <br />
              urscent에서 개인화된 추천 알고리즘과 상세한 검색 서비스, 유저들의 리뷰를 통해 나만의
              향수를 찾아보세요.
            </p>
          </div>
          <ul className={styles.contact}>
            <li>
              <a href={instagramUrl} target='_blank' rel='noopener noreferrer'>
                <img src={Instagram} />
              </a>
            </li>
            <li>
              {/* dhkim77000@gmail.com 메일 작성 페이지 필요함 SmtpJS 라이브러리 필요*/}
              <img src={Email} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
