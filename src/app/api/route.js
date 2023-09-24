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
      if (formData[key] !== '') {
        formDataObject.append(key, formData[key]);
      }
    }

    const res = await fetch(`${url}/booking/tickets/` + code, {
      method: 'POST',
      body: new URLSearchParams(formDataObject).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
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

export async function payTicket(code) {

  try {
    const formDataObject = new FormData();
    formDataObject.append('statusId','2')
    console.log({formDataObject,code})
    const res = await fetch(`${url}/booking/status/` + code, {
      method: 'PUT',
      body: new URLSearchParams(formDataObject).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });

    if (!res.ok) {
      throw new Error('Request failed' + res);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error in payTicket:', error);
    throw error; 
  }
}

export async function getMyTickets() {
  // console.log('url',url)
  try {
    const response = await fetch(url + `/booking/tickets`,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    const data = await response.json();
    if (!response.ok) { throw new Error('Gagal mengambil data dari server');}
    // console.log('response=>',data)
    // return NextResponse.json({ data })
    return data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data:', error);
  }
}

export async function getTicketById(code) {
  try {
    const response = await fetch(url + `/booking/tickets/`+code,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    const data = await response.json();
    if (!response.ok) { throw new Error('Gagal mengambil data dari server');}
    // console.log('response=>',data)
    // return NextResponse.json({ data })
    return data;
  } catch (error) {
    console.error('Terjadi kesalahan saat mengambil data:', error);
  }
}
