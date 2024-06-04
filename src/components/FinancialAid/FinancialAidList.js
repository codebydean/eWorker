
function FinancialAidList(props){

    const Financials = props.data

    return(
        <div className="w-3/4 flex flex-col justify-center items-center">
            {/*Data at job object :

            "name": "Apergia",
            "quantity": "10",
            "price": "0"
            
            */}
               {Financials.map((financial) => (
                    <div className="w-full h-fit min-h-[100px] p-5 mb-6 bg-blue-200 opacity-80 rounded-3xl flex justify-center flex-col" key={financial.name}>
                       <p>name: {financial.name}</p> 
                       <p>quantity: {financial.quantity}</p> 
                       <p>price: {financial.price}</p> 

                    </div>
               ))} 
        </div>


    )
   
}

export default FinancialAidList