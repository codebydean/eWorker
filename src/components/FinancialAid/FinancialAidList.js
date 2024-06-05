import React from 'react';

function FinancialAidList(props) {
    const financials = props.data;

    return (
        <div className="w-3/4 flex flex-wrap justify-between">
            {financials.map((financial, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="w-full bg-white border-4 border-[#067FB9] rounded-2xl p-5 shadow-lg mt-2">
                        <p className="text-xl font-bold text-[#067FB9]">{financial.name}</p>
                        <hr className="h-1 rounded-sm bg-[#067FB9] mb-5 mt-2" />
                        <p className="mb-5">Available Spots: {financial.quantity}</p>
                        <p className="mb-5">Aid: {financial.price}$</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FinancialAidList;
