import React from 'react';

class Product extends React.Component{
    handleUpVote=()=>{
        this.props.onVote(this.props.id)
    };
    
    render(props){
        return(
            <div className='item'>
            <div className='image'>
            <img src={this.props.productImageUrl} alt="Product" />
            </div>
            <div className='middle aligned content'>
            <div className='header'>
            <a onClick={this.handleUpVote}>
            <i className='large caret up icon' />
            </a>
            {this.props.votes}
            </div>
            <div className='description'>
            <a href={this.props.url}>{this.props.title}</a>
            <p>{this.props.description}</p>
            </div>
            <div className='extra'>
            <span>Submitted by:</span>
            <img
            className='ui avatar image'
            src={this.props.submitAvatarUrl}
            alt="Avatar"
            />
            </div>
            </div>
            </div>

        );
    }
}

export default Product;