import React, { Component } from 'react';

class Details extends Component {
    
    renderChildren = () => {
        const { links, infos } = this.props;
        let children = [];
        if(links) {
            children = links.map(link => {
                return <a key={link.__id} onClick={link.onClick} className='details__link'>{link.title}</a>
            })
        } else if(infos) {
            children = infos.map(info => {
                return <div key={info.__id} className='details__link details__item'>{info.title}</div>
            })
        }
        return children;
    }

  render() {
      const { className, title, links, infos } = this.props;
    return (
        <div className={`${className} details`}>
            <div className='details__title'>{title}</div>
            <div className='details__links'>
                {
                    this.renderChildren()
                }
            </div>
        </div>
    );
  }
}

export default Details;