

const Footer = () => {
  return ( 
   <div className="border-t-2 border-t-gray-300 mt-10">

  {/* Footer Links */}
  <div className="flex flex-col text-sm text-gray-600 py-4 gap-3 md:gap-4 border-b border-gray-300 px-4 md:px-10 lg:px-20">

    <div className="flex flex-row flex-wrap gap-x-3 gap-y-2 md:gap-x-4">
      <p>Company Introduction |</p>
      <p>Investor Relation |</p>
      <p>Recruitments |</p>
      <p>Partnership Inquiries |</p>
      <p>Announcement |</p>
      <p>Voice of Customer |</p>
      <p>Term of Use |</p>
      <p>Privacy Policy |</p>
    </div>

    <div className="flex flex-row flex-wrap gap-x-3 gap-y-2 md:gap-x-4">
      <p>Information Protection |</p>
      <p>Trust Management |</p>
      <p>Affiliate Marketing |</p>
      <p>Advertising Information |</p>
    </div>

  </div>


  {/* Company Information */}
  <div className="flex flex-col md:flex-row items-center md:items-start justify-center px-4 sm:px-8 md:px-10 lg:px-20 py-8 md:py-10 text-gray-600 gap-8 md:gap-6 lg:gap-10">

    {/* Logo */}
    <div className="flex flex-row font-bold text-4xl md:text-5xl shrink-0">
      <h1 className="text-orange-950">k</h1>
      <h1 className="text-orange-950">u</h1>
      <h1 className="text-green-600">p</h1>
      <h1 className="text-blue-500">O</h1>
      <h1 className="text-orange-500">n</h1>
      <h1 className="text-red-500">g</h1>
    </div>


    {/* Company Details */}
    <div className="w-full md:w-1/4 text-center md:text-left">
      <p>
        Company Name and Hosting Service Provider: KUPONG, Inc.
        <br />
        CEO: Rogers Harold Lynn
        <br />
        (05050) 2F, 412, Achasan-ro, Gwangjin-gu, Seoul
        <br />
        Business Registration No.: 120-88-00767
        <br />
        Mail Order Business Report: 2026-Seoul Gwangjin-1253
        <br />
        Check Business Info
      </p>
    </div>


    {/* Customer Service */}
    <div className="flex flex-col w-full md:w-1/4 text-center md:text-left">
      <p>Customer Service / Electronic Financial Transaction</p>

      <h1 className="text-2xl font-bold text-gray-600">
        0234-3456 (PAID)
      </h1>

      <p>GWANGJINGU, SEOUL</p>

      <p>EMAIL: help@kupong.com</p>
    </div>


    {/* Additional Company Details */}
    <div className="w-full md:w-1/4 text-center md:text-left">
      <p>
        Company Name and Hosting Service Provider: KUPONG, Inc.
        <br />
        CEO: Rogers Harold Lynn
        <br />
        (05050) 2F, 412, Achasan-ro, Gwangjin-gu, Seoul
        <br />
        Business Registration No.: 120-88-00767
        <br />
        Mail Order Business Report: 2026-Seoul Gwangjin-1253
        <br />
        Check Business Info
      </p>
    </div>

  </div>


  {/* Disclaimer */}
  <div className="bg-zinc-700 text-gray-400 text-xs px-4 sm:px-8 md:px-16 lg:px-30 py-8 md:py-10">

    <p className="leading-6">
      Among the products sold on the cyber mall are marketplace (open market)
      products sold by individual sellers registered with KUPONG.

      For marketplace (open market) products, KUPONG acts as an intermediary
      for mail-order sales and is not a party to the mail-order transaction.

      KUPONG assumes no responsibility for marketplace (open market) products,
      transaction information, or transactions.

      KUPONG operates a Trust Management Center (CM112@kupong.com) to protect
      consumers and ensure safe transactions, and any related disputes will be
      handled in accordance with separate dispute resolution procedures.

      <br />
      <br />

      Copyright © KUPONG Corp. 2026 All Rights Reserved.
    </p>

  </div>

</div>
    
  )
}

export default Footer
