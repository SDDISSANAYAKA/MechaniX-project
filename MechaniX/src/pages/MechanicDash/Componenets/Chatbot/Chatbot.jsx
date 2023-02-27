import React from 'react'
import Chatbot from "react-simple-chatbot";



function ChatbotApp() {
  const steps = [

   
    {
      id: "Great",
      message: "Hello, welcome to our website!",
      trigger: "Ask Name"
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "waiting"
    },
    {
      id: "waiting",
      user: true,
      trigger: "Name"
    },
    {
      id: "Name",
      message: "Hi {previousValue}, please select your issue",
      trigger: "issues"
    },
    {
      id: "issues",
      options: [
        {
          value: "Start",
          label: "Vehicle do not start",
          trigger: "Start"
        },
        {
          value: "Tempreature",
          label: "Tempreature symbol got red",
          trigger: "Tempreature"
        },
        {
          value: "Alignment",
          label: " Car pulling on one side ",
          trigger: "Alignment"
        },
        {
          value: "Battery",
          label: "Dead or drained battery",
          trigger: "Battery"
        },
        {
          value: "Smoke",
          label: "Exhaust Smoke",
          trigger: "Smoke"
        },
        {
          value: "oil",
          label: "Engine oil level symbol got red",
          trigger: "oil"
        },
        {
          value: "Brakes",
          label: "Squealing Brakes",
          trigger: "Brakes"
        }
      ]
    },
    {
      id: "Start",
      message: 'Check vehicle battery wire , Check vehicle battery voltage, Check vehicle fuel level( For more information contact mechanic from our Mechanix team)',
      end: true
    },
    {
      id: "Tempreature",
      message: 'which means your car engine is overheating. So you need to stop your car immediately. The primary reason behind engine overheating is the low coolant level in the radiator.( For more information contact mechanic from our Mechanix team) ',
      end: true
    },
    {
      id: "Alignment",
      message: 'Your vehicle is out of alignment, which means all four wheels of your car are not pointing in a linear method and off from the usual angle while driving it.Its solution is straightforward, get the alignment of your car’s tyre by a mechanic.( For more information contact mechanic from our Mechanix team)',
      end: true
    },
    {
      id: "Battery",
      message: 'All these causes can make your car battery dead and your car un- operational when you want to use it. So in this situation, there is no need to be panicked.In this solution, you will require a jumper cable and donator car whose car battery will charge yours. Attach the positive and negative terminals of the jumper cable on the positive & negative terminals of the donator car battery, respectively. Then start the donator’s car and let it run for a little while. Start your car, and you are ready. ( For more information contact mechanic from our Mechanix team)',
      end: true
    },
    {
      id: "Smoke",
      message: "White or grey smoke shows some leakage in the engine block, head gasket, or from the cylinder head, and the coolant of your car is combusted.Blue smoke shows leakage in the valve seals or piston rings or guides have frayed; due to this, the engine oil is penetrating the combustion chamber, which causes the oil to burn with the fuel and becomes the reason for blue smoke.Black smoke shows that extra fuel is burning in the combustion chambers because of a leak in the fuel injector, a stuck fuel pressure regulator, or a constraint in the fuel combustion pipe. This issue typically occurs in older cars, and in this situation, you need to get your car checked by a trained mechanic.( For more information contact mechanic from our Mechanix team)",
      end: true
    },
    {
      id: "oil",
      message: "Low engine oil levelLow engine oil level is another problem in cars caused by the delay in service and aggressive driving, which can affect the car performance.If you ignore that issue, you can face severe wear and tear in many engine parts.You need to focus on your car’s routine maintenance and on-time engine oil top-up to avoid this issue.( For more information contact mechanic from our Mechanix team)",
      end: true
    },
    {
      id: "Brakes",
      message: "If you suspect your car brake pads are worn out due to brake dust. It needs to be fixed as soon as possible by a professional mechanic, as inhaling brake dust can be dangerous for your health.( For more information contact mechanic from our Mechanix team)",
      end: true
    }
    ];

 


  return (
    <div className="ChatbotApp">
      <Chatbot steps={steps} />
    </div>
  );
}

export default ChatbotApp;








   
  
