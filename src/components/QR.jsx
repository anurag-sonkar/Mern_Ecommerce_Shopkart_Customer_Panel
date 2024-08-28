import React from 'react'
import { Input, QRCode, Space } from 'antd';

const QR = (info) => {
    const [text, setText] = React.useState('http://192.168.43.195:4000/');
    return (
      <Space direction="vertical" align="center" className=''>
        <QRCode value={text || '-'} />
        {/* <Input
          placeholder="-"
          maxLength={60}
          value={text}
          onChange={(e) => setText(e.target.value)}
        /> */}
      </Space>
    );
}

export default QR