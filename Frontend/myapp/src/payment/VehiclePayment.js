import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VehiclePayment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolderName, setCardHolderName] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [cvv, setCvv] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const history = useNavigate();

    const months = Array.from({ length: 12 }, (_, i) => {
        const month = (i + 1).toString().padStart(2, '0');
        return { value: month, label: month };
    });

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 5 }, (_, i) => {
        const year = currentYear + i;
        return { value: year.toString(), label: year.toString() };
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!/^\d{16}$/.test(cardNumber)) {
            setErrorMessage('Please enter a valid 16-digit card number.');
            return;
        }

        if (cardHolderName.trim().length < 5) {
            setErrorMessage('Cardholder\'s name is required.');
            return;
        }

        if (!expiryMonth || !expiryYear) {
            setErrorMessage('Please select a valid expiry date.');
            return;
        }

        if (!/^\d{3}$/.test(cvv)) {
            setErrorMessage('Please enter a valid 3-digit CVV.');
            return;
        }

        const cardDetails = {
            cardNumber,
            cardHolderName,
            expiryMonth,
            expiryYear,
            cvv
        };
        localStorage.setItem('cardDetails', JSON.stringify(cardDetails));

        history('/invoice');
    };

    return (
        <div className="container-fluid py-5 gradient-custom">
            <div className="row d-flex justify-content-center py-5">
                <div className="col-md-7 col-lg-5 col-xl-4">
                    <h2 className='text-center'>Payment</h2>
                    <div className="card mt-4" style={{ borderRadius: "15px" }}>
                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit}>
                                <div className="row align-items-center">
                                    <div className="col-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="xxxx xxxx xxxx xxxx"
                                            value={cardNumber}
                                            onChange={(e) => setCardNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-3">
                                        <img
                                            src="https://img.icons8.com/color/48/000000/visa.png"
                                            alt="visa"
                                            width="64px"
                                        />
                                    </div>

                                    <div className="col-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Cardholder's Name"
                                            value={cardHolderName}
                                            onChange={(e) => setCardHolderName(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-6 mt-3">
                                        <select
                                            className="form-select"
                                            value={expiryMonth}
                                            onChange={(e) => setExpiryMonth(e.target.value)}
                                        >
                                            <option value="">Month</option>
                                            {months.map(month => (
                                                <option key={month.value} value={month.value}>{month.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-6 mt-3">
                                        <select
                                            className="form-select"
                                            value={expiryYear}
                                            onChange={(e) => setExpiryYear(e.target.value)}
                                        >
                                            <option value="">Year</option>
                                            {years.map(year => (
                                                <option key={year.value} value={year.value}>{year.label}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-3 mt-3">
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="&#9679;&#9679;&#9679;"
                                            value={cvv}
                                            onChange={(e) => setCvv(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-3 mt-3">
                                        <button type="submit" className="btn btn-info rounded" style={{fontWeight:500}}>
                                            Proceed
                                        </button>
                                    </div>
                                </div>
                            </form>
                            {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VehiclePayment;
