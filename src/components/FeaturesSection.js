import React from 'react';
const FeaturesSection = () => {
    return (
        <section className="features">
            <h2>Why Choose PixelMart?</h2>
            <div className="features-grid">
                <div className="feature">
                    <h3>Fast Delivery</h3>
                    <p>We ensure quick delivery to your doorstep!</p>
                </div>
                <div className="feature">
                    <h3>Secure Payment</h3>
                    <p>Your payment is safe with us. We use the latest security protocols.</p>
                </div>
                <div className="feature">
                    <h3>Quality Products</h3>
                    <p>We only sell top-quality products that you'll love.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
