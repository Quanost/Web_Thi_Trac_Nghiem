import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        
        
      
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Thông tin</h2>
            <Link to='/sign-up'> Tầng 2, số nhà 541 Vũ Tông Phan, Phường Khương Đình, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam</Link>
            <Link to='/'>Phone: 084 283 4585</Link>
            <Link to='/'>Email: tnteam@gmail.com</Link>
            
          </div>
         
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Đề kiểm tra</h2>
            <Link to='/'>Môn Toán-Văn-Anh</Link>
            <Link to='/'>Môn Lý-Hoá-Sinh</Link>
            <Link to='/'>Môn Sử-Địa-GDCD</Link>
            
          </div>
          <div class='footer-link-items'>
            <h2>Liên kết</h2>
            <Link to='/'>Hỏi đáp bài thi</Link>
            <Link to='/'>Tài liệu tham khảo</Link>
            
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'> Copyright © 2023 by TN</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
