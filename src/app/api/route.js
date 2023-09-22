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