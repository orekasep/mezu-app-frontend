'use client';

import contactHero from 'public/images/contact/hero.png';
import Image from 'next/image';
import styled from 'styled-components';
import background from 'public/images/home-background.png';
import Link from 'next/link';
import { Button, Checkbox, Form, Input } from 'antd';

const ContactWrapper = styled.div`
  .hero-gradient {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.25),
      rgba(0, 0, 0, 0)
    );
  }

  .ant-form-item {
    margin: 0 0 12px;
  }
  .ant-input {
    border: 1px solid #394780;
    border-radius: 20px;
    padding: 6px 16px;
  }
  .ant-btn.ant-btn-primary {
    border-radius: 20px;
    padding: 6px 15px;
    height: 40px;
    width: 50%;
    background-color: #ea7298;
    border-color: #ea7298;
    transition: all 0.3s;
    &:hover {
      color: #000;
    }
  }
  .ant-form-item-label {
    padding: 0;
  }

  .ant-form-item-label > label.ant-form-item-required:before {
    content: unset;
  }
`;

export default function Contact() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <ContactWrapper>
      <main className='min-h-screen'>
        <section className='hero'>
          <div className='relative h-[40vh]'>
            <Image
              src={contactHero}
              layout='fill'
              objectFit='cover'
              alt='MEZU Contact Hero'
            />
            <div className='relative h-[40vh] hero-gradient'></div>
          </div>
        </section>
        <section className='content'>
          <div className='container flex lg:flex-row flex-col mt-10 mx-auto p-8 bg-slate-100'>
            <div className='flex-1 m-5'>
              <h2 className='text-xl font-bold color-primary w-5/6'>
                Hãy trò chuyện với chúng tôi ngay hôm nay để cùng tăng tốc bán
                hàng cho quán của bạn.
              </h2>
              <p>Mời anh/chị để lại thông tin theo form dưới đây</p>
              <Form
                name='basic'
                className='w-5/6'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
              >
                <div className='flex flex-row'>
                  <Form.Item
                    className='flex-1'
                    wrapperCol={{ span: 24 }}
                    name='fullname'
                    rules={[
                      { required: true, message: 'Vui lòng điền tên của bạn' },
                    ]}
                  >
                    <Input placeholder='Họ và Tên' />
                  </Form.Item>
                  <div className='w-[20px]' />
                  <Form.Item
                    className='flex-1'
                    wrapperCol={{ span: 24 }}
                    name='company'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền tên quán hoặc công ty',
                      },
                    ]}
                  >
                    <Input placeholder='Tên quán hoặc công ty' />
                  </Form.Item>
                </div>
                <div className='flex flex-row'>
                  <Form.Item
                    className='flex-1'
                    wrapperCol={{ span: 24 }}
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền email của bạn',
                      },
                    ]}
                  >
                    <Input placeholder='Địa chỉ email' />
                  </Form.Item>
                  <div className='w-[20px]' />
                  <Form.Item
                    className='flex-1'
                    wrapperCol={{ span: 24 }}
                    name='mobile'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền số điện thoại của bạn',
                      },
                    ]}
                  >
                    <Input placeholder='Số điện thoại' />
                  </Form.Item>
                </div>
                <Form.Item name={'other'} wrapperCol={{ span: 24 }}>
                  <Input.TextArea
                    style={{ height: 100 }}
                    placeholder='Bạn muốn biết thêm hoặc cần MEZU app hỗ trợ gì thêm?'
                  />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type='primary' htmlType='submit'>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
            <div className='relative m-5 flex-1 h-auto bg-gradient-to-r from-primary-light to-primary-dark'>
              <Image
                src={background}
                layout='fill'
                objectFit='cover'
                alt=''
                className='h-full'
              />
              <div className='relative w-full text-center top-0 p-8'>
                <h2 className='w-3/4 mx-auto text-xl font-bold text-white'>
                  MENU APP - TẠO MENU ĐỒ ĂN UỐNG GỌI MÓN VÀ QUẢN LÝ QUÁN MIỄN
                  PHÍ
                </h2>
                <p className='text-white w-3/4 mx-auto my-6'>
                  Với các tính năng gọi món nhanh chóng thuận tiện, MEZU app sẽ
                  giúp quán đạt điểm 10 trong mắt khách hàng. Đừng chần chừ nữa,
                  hãy trải nghiệm ngay.
                </p>
                <button
                  className={`text-base font-bold w-[200px] sm:h-[60px] h-12 rounded-full
          bg-[#ffffff] hover:bg-[#FE7CA5] active:bg-[#FE7CA5] transition-all`}
                >
                  <Link
                    passHref
                    href={'/dang-ky'}
                    className='text-primary hover:text-white hover:text-black'
                  >{`Đăng ký miễn phí`}</Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ContactWrapper>
  );
}
