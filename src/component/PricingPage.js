import React from 'react'
import PlanCard from './PlanCard'

const PricingPage=() =>{
  const plans =[
    {
      planName:"Basic",
      description:"Individual",
      price:8,
      features:[
        {text: "Feature 1",disabled: false},
        {text: "Feature 2",disabled: true},
        {text: "Feature 3",disabled: true},
      ],
    },
    {
      planName:"Standrad",
      description:"Small Business",
      price:20,
      features:[
        {text: "Feature A",disabled: true},
        {text: "Feature B",disabled: true},
        {text: "Feature C",disabled: false},
      ],
    },
    {
      planName:"Premium",
      description:"Large Companies",
      price:40,
      features:[
        {text: "Feature X",disabled: false},
        {text: "Feature Y",disabled: true},
        {text: "Feature z",disabled: false},
      ],
    },
  ];
  
  return(
    <div className="container-fluid" style={{background: 'Linear-gradient(90deg, #00C9FF 0%,#92FE9D 100%)'}}>
      <div className="container p-5">
        <div className="row">
          {plans.map((plan,index)=>(
            <div key = {index} className="col-lg-4 col-md-12 mb-4">
              <PlanCard{...plan}/>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default PricingPage;
