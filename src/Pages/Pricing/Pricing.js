import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css'
/* carousel banner components */
function Pricing(){
    return(
<div id="generic_price_table">   
<section>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    {/* <!--PRICE HEADING START--> */}
                    <div className="price-heading clearfix">
                        <h1>Take Membership</h1>
                    </div>
                    {/* <!--//PRICE HEADING END--> */}
                </div>
            </div>
        </div>
        <div className="container">
            
            {/* <!--BLOCK ROW START--> */}
            <div className="row">
                <div className="col-md-4">
                
                	{/* <!--PRICE CONTENT START--> */}
                    <div className="generic_content clearfix">
                        
                        {/* <!--HEAD PRICE DETAIL START--> */}
                        <div className="generic_head_price clearfix">
                        
                            {/* <!--HEAD CONTENT START--> */}
                            <div className="generic_head_content clearfix">
                            
                            	{/* <!--HEAD START--> */}
                                <div className="head_bg"></div>
                                <div className="head">
                                    <span>Basic</span>
                                </div>
                                {/* <!--//HEAD END--> */}
                                
                            </div>
                            {/* <!--//HEAD CONTENT END--> */}
                            
                            {/* <!--PRICE START--> */}
                            <div className="generic_price_tag clearfix">	
                                <span className="price">
                                    <span className="sign">$</span>
                                    <span className="currency">299</span>
                                    <span className="cent">.99</span>
                                    <span className="month">/Year</span>
                                </span>
                            </div>
                            {/* <!--//PRICE END--> */}
                            
                        </div>                            
                        {/* <!--//HEAD PRICE DETAIL END--> */}
                        
                        {/* <!--FEATURE LIST START--> */}
                        <div className="generic_feature_list">
                        	<ul>
                            	<li><span>2</span> Free Trip</li>
                                <li><span>1</span> Backpack</li>
                                <li><span>1</span> Cloth</li>
                                <li><span>1</span> Travel Shoe</li>
                                <li><span>24/2</span> Guide</li>
                            </ul>
                        </div>
                        {/* <!--//FEATURE LIST END--> */}
                        
                        {/* <!--BUTTON START--> */}
                        <div className="generic_price_btn clearfix">
                        	<Link to="" href="">Sign up</Link>
                        </div>
                        {/* <!--//BUTTON END--> */}
                        
                    </div>
                    {/* <!--//PRICE CONTENT END--> */}
                        
                </div>
                
                <div className="col-md-4">
                
                	{/* <!--PRICE CONTENT START--> */}
                    <div className="generic_content active clearfix">
                        
                        {/* <!--HEAD PRICE DETAIL START--> */}
                        <div className="generic_head_price clearfix">
                        
                            {/* <!--HEAD CONTENT START--> */}
                            <div className="generic_head_content clearfix">
                            
                            	{/* <!--HEAD START--> */}
                                <div className="head_bg"></div>
                                <div className="head">
                                    <span>Standard</span>
                                </div>
                                {/* <!--//HEAD END--> */}
                                
                            </div>
                            {/* <!--//HEAD CONTENT END--> */}
                            
                            {/* <!--PRICE START--> */}
                            <div className="generic_price_tag clearfix">	
                                <span className="price">
                                    <span className="sign">$</span>
                                    <span className="currency">499</span>
                                    <span className="cent">.99</span>
                                    <span className="month">/Year</span>
                                </span>
                            </div>
                            {/* <!--//PRICE END--> */}
                            
                        </div>                            
                        {/* <!--//HEAD PRICE DETAIL END--> */}
                        
                        {/* <!--FEATURE LIST START--> */}
                        <div className="generic_feature_list">
                        	<ul>
                            	<li><span>4</span> Free Trip</li>
                                <li><span>1</span> Qulity Backpac</li>
                                <li><span>2</span> Parson Tour</li>
                                <li><span>3</span> Spacial Trip</li>
                                <li><span>24/7</span> Support</li>
                            </ul>
                        </div>
                        {/* <!--//FEATURE LIST END--> */}
                        
                        {/* <!--BUTTON START--> */}
                        <div className="generic_price_btn clearfix">
                        	<Link to="/login">Sign up</Link>
                        </div>
                        {/* <!--//BUTTON END--> */}
                        
                    </div>
                    {/* <!--//PRICE CONTENT END--> */}
                        
                </div>
                <div className="col-md-4">
                
                	{/* <!--PRICE CONTENT START--> */}
                    <div className="generic_content clearfix">
                        
                        {/* <!--HEAD PRICE DETAIL START--> */}
                        <div className="generic_head_price clearfix">
                        
                            {/* <!--HEAD CONTENT START--> */}
                            <div className="generic_head_content clearfix">
                            
                            	{/* <!--HEAD START--> */}
                                <div className="head_bg"></div>
                                <div className="head">
                                    <span>Unlimited</span>
                                </div>
                                {/* <!--//HEAD END--> */}
                                
                            </div>
                            {/* <!--//HEAD CONTENT END--> */}
                            
                            {/* <!--PRICE START--> */}
                            <div className="generic_price_tag clearfix">	
                                <span className="price">
                                    <span className="sign">$</span>
                                    <span className="currency">699</span>
                                    <span className="cent">.99</span>
                                    <span className="month">/Year</span>
                                </span>
                            </div>
                            {/* <!--//PRICE END--> */}
                            
                        </div>                            
                        {/* <!--//HEAD PRICE DETAIL END--> */}
                        
                        {/* <!--FEATURE LIST START--> */}
                        <div className="generic_feature_list">
                        	<ul>
                            	<li><span>7</span> Free Trip</li>
                                <li><span>3</span> Quality Backpack</li>
                                <li><span>1</span> Family Trip</li>
                                <li><span>3</span> Spacila Trip</li>
                                <li><span>24/7</span> Support</li>
                            </ul>
                        </div>
                        {/* <!--//FEATURE LIST END--> */}
                        
                        {/* <!--BUTTON START--> */}
                        <div className="generic_price_btn clearfix">
                        	<Link to='/login'>Sign up</Link>
                        </div>
                        {/* <!--//BUTTON END--> */}
                        
                    </div>
                    {/* <!--//PRICE CONTENT END--> */}
                        
                </div>
            </div>	
            {/* <!--//BLOCK ROW END--> */}
            
        </div>
    </section>             
</div>
    )
}
export default Pricing;