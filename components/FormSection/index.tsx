import Image from 'next/image';
import Link from 'next/link';
import registrationImage from 'public/images/home/mezu-registration.png';
import { Button, Checkbox, Form, Input } from 'antd';
import styled from 'styled-components';

const FormWrapper = styled.div`
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
  }
  .ant-form-item-label {
    padding: 0;
  }

  .ant-form-item-label > label.ant-form-item-required:before {
    content: unset;
  }
`;

export const FormSection = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className='relative'>
      <div className='flex gap-4 justify-center items-center'>
        <div className='container max-w-screen-xl flex lg:flex-row flex-col items-center padding-10'>
          <div className='flex justify-end lg:w-2/5 w-full xl:px-0 px-4 lg:text-left text-center py-[10vh]'>
            <Image
              className='w-auto h-[70vh]'
              src={registrationImage}
              alt='MEZU App - Menu'
            />
          </div>
          <div className='lg:w-3/5 px-[40px] pt-10'>
            <div className='flex flex-row'>
              <FormWrapper className='w-3/4'>
                <h2 className='text-2xl color-primary'>
                  ĐĂNG KÝ DÙNG MIỄN PHÍ NGAY
                </h2>
                <Form
                  name='basic'
                  labelCol={{ span: 8 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete='off'
                >
                  <Form.Item
                    label='Tên của bạn'
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    name='fullname'
                    rules={[
                      { required: true, message: 'Vui lòng điền tên của bạn' },
                    ]}
                  >
                    <Input placeholder='Họ và Tên' />
                  </Form.Item>

                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    name='company'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền tên quán hoặc tên doanh nghiệp',
                      },
                    ]}
                  >
                    <Input placeholder='Tên quán hoặc doanh nghiệp' />
                  </Form.Item>

                  <Form.Item
                    label='Thông tin liên hệ'
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    name='mobile'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền số điện thoại',
                      },
                    ]}
                  >
                    <Input placeholder='Số điện thoại' />
                  </Form.Item>

                  <Form.Item
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: 'Vui lòng điền địa chỉ email',
                      },
                    ]}
                  >
                    <Input placeholder='Email của bạn' />
                  </Form.Item>

                  <Form.Item
                    label='Loại sản phẩm kinh doanh'
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    name='productType'
                    rules={[
                      {
                        required: true,
                        message: 'Bạn cho MEZU biết sản phẩm kinh doanh nhé.',
                      },
                    ]}
                  >
                    <Input placeholder='Cafe / Trà sữa / Trà chanh / Bánh mỳ ...' />
                  </Form.Item>

                  <Form.Item
                    label='Địa chỉ quán'
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    name='address'
                    rules={[
                      {
                        required: true,
                        message: 'Bạn cho MEZU biết địa chỉ mở quán nhé.',
                      },
                    ]}
                  >
                    <Input placeholder='Địa chỉ mở quán' />
                  </Form.Item>

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
              </FormWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
