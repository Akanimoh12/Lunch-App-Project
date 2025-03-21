import React from 'react'

export default function Activity() {
    const data = [
        { name: 'Jenny Wilson', itemNo: 2, date: 'May 18, 2023', itemType: 'Free Lunch', time: '11:25 AM' },
        { name: 'Akanimoh J.', itemNo: 1, date: 'May 20, 2024', itemType: 'Free Lunch', time: '12:25 PM' },
        { name: 'Manoah Luka', itemNo: 6, date: 'May 21, 2025', itemType: 'Free Lunch', time: '02:25 PM' },
    ];

    return (
        <div className=''>

            {data.map((item, index) => (
                <div className='grid grid-cols-4 border-b-[0.5px] border-[#87748C] pb-3 mt-3 ' key={index}>

                    {/* Details of Lunch */}
                    <div className='col-span-3'>
                        <h1 className='text-[15px] font-semibold  '>Lunch Received</h1>
                        <p className='text-[12px] font-medium text-[#87748C] '>From {item.name} </p>
                        <h4 className='text-[14px] font-medium text-[#87748C]'> {item.date} | {item.time} </h4>
                    </div>

                    {/* Lunch No. and Specification */}
                    <div className='col-span-1 text-end content-center  '>
                        <h1 className='text-[16px] font-medium text-[#7C149B]'>+ {item.itemNo} </h1>
                        <p className='text-[14px] font-medium text-[#87748C]'>{item.itemType}</p>
                    </div>

                </div>
            ))}

        </div>
    )
}
