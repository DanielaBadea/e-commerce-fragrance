import React from 'react';
import css from './DropdownPrice.module.css'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';

const items = [
  {
    label: 'Pret crescator',
    key: 'asc',
  },
  {
    label: 'Pret descrescator',
    key: 'desc',
  },
];

const DropdownPrice = ({ onSortOption }) => {
  const handleSort = ({ key }) => {
    onSortOption(key);
  };

  // const menu = (
  //   <Menu onClick={handleSort}>
  //     {items.map(item => (
  //       <Menu.Item key={item.key}>
  //         {item.label}
  //       </Menu.Item>
  //     ))}
  //   </Menu>
  // );

  const menu = {
    items: items.map(item => ({
      label: item.label,
      key: item.key,
    })),
    onClick: handleSort,
  };

  return (
    <Dropdown menu={menu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space className={css.space}>
          Filtrare
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownPrice;
