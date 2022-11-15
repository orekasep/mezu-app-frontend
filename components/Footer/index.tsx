import styled from 'styled-components';

const FooterWrapper = styled.div`
  p {
    margin-bottom: 0;
  }
  a {
    cursor: pointer;
    color: #fff;
    &:hover {
      color: #000;
    }
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper className='w-full'>
      <div className='bg-[#23347B]'>
        <div className='container max-w-screen-xl xl:px-0 px-4 mx-auto flex flex-row text-white'>
          <div className='w-1/3 pr-6'>
            <p className='font-bold text-2xl mx-0 my-6'>MEZU APP</p>
            <p>
              Chúng tôi mong muốn đem đến trải nghiệm đặt đồ đơn giản và hiệu
              quả, góp phần giúp cho quán của bạn ngày càng có nhiều khách hàng
              hơn.
            </p>
          </div>
          <div className='w-1/3 pr-6'>
            <p className='font-bold text-2xl mx-0 my-6'>LIÊN HỆ</p>
            <p>
              <strong>Địa chỉ: </strong>Số 5 174/15 Phương Canh, Xuân Phương,
              Nam Từ Liêm, Hà Nội
            </p>
            <p>
              <strong>Hotline: </strong>
              <a href='tel:02466557673'>024-6655-7673</a>
            </p>
            <p>
              <strong>Email: </strong>
              <a href='mailto:info@mezuapp.com'>info@mezuapp.com</a>
            </p>
          </div>
          <div className='mapouter w-1/3'>
            <div className='gmap_canvas m-8'>
              <iframe
                className='gmap_iframe'
                width='100%'
                frameBorder='0'
                scrolling='no'
                marginHeight={0}
                marginWidth={0}
                src='https://maps.google.com/maps?width=300&amp;height=180&amp;hl=en&amp;q=domstudio thiet ke web&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#152B60]'>
        <div className='container max-w-screen-xl mx-auto h-full flex justify-between'>
          <p className='text-white font-normal py-2 m-0'>
            © 2022 MEZU app - Thành viên của Công ty CP Công nghệ cao LHT
            Holdings.
          </p>
          <p className='text-white font-normal py-2 m-0'>
            <a href='/dieu-khoan-su-dung'>Điều khoản sử dụng</a> •{' '}
            <a href='/chinh-sach-bao-mat'>Chính sách bảo mật</a> •{' '}
            <a href='/chinh-sach-thanh-toan'>Chính sách thanh toán</a>
          </p>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
