import React from 'react';

import headerItem from './header-item.module.css';

class HeaderItem extends React.Component {

  render() {
    const classNameItem = `${headerItem.item} text text_type_main-default`;
    const classNameText = this.props.isActive ? `${headerItem.text} ${headerItem.active}` : headerItem.text;
    return (
      <li className={classNameItem}>{this.props.icon}{this.props.text ? <span className={classNameText}>{this.props.text}</span> : null}</li>
    );
  }
}

export default HeaderItem;