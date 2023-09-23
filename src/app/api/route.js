import { NextResponse } from 'next/server'
// const url = process.env.BASE_URL;
const url = 'https://easy-lime-seal-toga.cyclic.app'

export async function getAllData() {
  console.log('url',url)
  try {
    const response = await fetch(url + `/airlines/flight?`)
    const data = await response.json();
    if (!response.ok) { throw new Error('Gagal mengambil data dari server');}
    // console.log('response=>',data)
    // return NextResponse.json({ data })
    return data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data:', error);
  }
}

export async function getDataFiltered(facilities,minPrice,maxPrice,airlineId) {
  console.log({'route':'',facilities,minPrice,maxPrice,airlineId})
  try {
    const response = await fetch(url+ `/airlines/flight?facilities=${facilities}&minPrice=${minPrice}&maxPrice=${maxPrice}&airlineId=${airlineId}`); 
    const data = await response.json();
    if (!response.ok) { throw new Error('Gagal mengambil data dari server');}
    // console.log('response=>',data)
    // return NextResponse.json({ data })
    return data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data:', error);
  }
}
 
export async function bookingTicket(formData, code) {
  try {
    const formDataObject = new FormData();
    for (const key in formData) {
      formDataObject.append(key, formData[key]);
    }

    const res = await fetch(`${url}/booking/tickets/` + code, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
      },
      body: new URLSearchParams(formDataObject).toString(),
    });

    if (!res.ok) {
      throw new Error('Request failed' + res);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in bookingTicket:', error);
    throw error; 
  }
}

 
// export async function GET(request) {
//   const { searchParams } = new URL(request.url)
//   const id = searchParams.get('id')
//   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const product = await res.json()
 
//   return NextResponse.json({ product })
// }