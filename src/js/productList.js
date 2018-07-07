import React from 'react';
import Product from './product';
import Seed from './seed';



class ProductList extends React.Component{

    /*constructor(props){
        super(props);*/
        state={
            products:[],
        };
        /*this.handleProductUpvote=this.handleProductUpvote.bind(this);
    }*/

    componentDidMount(){
        this.setState({products:Seed.products});
    }

    handleProductUpvote=(productId)=>{
        //console.log("The product is updated")
        const products=this.state.products;
        products.forEach((product)=>{
            if(product.id===productId){
                product.votes=product.votes+1;
            }
        });
        this.setState({
            products:products,
        });
    }

    render(){
        const products=Seed.products.sort((a,b)=>(
            b.votes-a.votes
        ));
        const productCompList=products.map((product)=>(
        
           <Product
           key={product.id}
           id={product.id}
           title={product.title}
           description={product.description}
           url={product.url}
           votes={product.votes}
           submitAvatarUrl={product.submitterAvatarUrl}
           productImageUrl={product.productImageUrl}
            onVote={this.handleProductUpvote}
           />
        ));
        return(
            <div className="ui unstackable items">{productCompList}</div>
        );
    }
}

export default ProductList;