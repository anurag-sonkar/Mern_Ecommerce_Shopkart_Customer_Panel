import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentSuccess() {
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const referenceNum = queryParams.get("reference");


    return (
        <div>
            <h1>Order Successful</h1>
            <p>Reference No. {referenceNum}</p>
        </div>
    );
}

export default PaymentSuccess;
