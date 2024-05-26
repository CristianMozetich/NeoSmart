import React from 'react';

//Formulario de subscripción del footer
const SubscriptionForm = () => (
  <div className="flex flex-col gap-6">
    <h1 className="font-bold">Enter your email to get updates</h1>
    <form className="flex flex-col">
      <p className="text-sm">Email address</p>
      <input
        type="text"
        placeholder="Email"
        className="max-w-72 h-8 bg-transparent px-2 rounded-md dark:bg-white border-black border text-secondarySlate dark:border-none"
      />
      <div className="flex flex-col gap-4 mt-6">
        <div className="flex gap-2">
          <input type="checkbox" />
          <p>
            I have read and accept the Terms and Conditions and the Privacy Policy
          </p>
        </div>
        <div className="flex gap-2">
          <input type="checkbox" />
          <p>
            I would like to receive commercial information from Neoprompts
          </p>
        </div>
        <div className="flex justify-start">
          <button className="bg-neoBrandTertiary flex items-center rounded-md text-white h-9 text-center px-4 py-4">
            REGISTER
          </button>
        </div>
      </div>
    </form>
  </div>
);

export default SubscriptionForm;
