import React from 'react'

const Note = () => {
  return (
    <div class="bg-gray-50 border-l-4 border-gray-300 p-5 sm:p-8 mt-10 rounded-lg overflow-x-auto">
  <div class="bg-gray-100 shadow-md border-l-4 border-green-800 text-green-800 p-4 mb-7 rounded-lg">
    <p class="text-[16px] leading-[26px]">
      <strong>Note:</strong> You can expect a prompt response to inquiries and pre-sale questions within our business hours. We’re available Monday to Friday, from 9:00 AM to 7:00 PM (GMT +6).
    </p>
  </div>
  <div>
    <table class="text-left border-collapse rounded-lg shadow-md min-w-[500px] sm:min-w-full">
      <thead>
        <tr>
          <th class="px-4 py-3 text-sky-800 border-b-2">Day</th>
          <th class="px-4 py-3 text-sky-800 border-b-2">Hours</th>
          <th class="px-4 py-3 text-sky-800 border-b-2 text-center">Time Zone</th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-gray-100">
          <td class="px-4 py-3 border-b text-color__heading">Monday</td>
          <td class="px-4 py-3 border-b text-color__heading">9:00 AM - 7:00 PM</td>
          <td class="px-4 py-3 bg-[#f9fafb] border-l text-center text-[18px] text-sky-800 font-semibold align-middle" rowspan="7">GMT +6</td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="px-4 py-3 border-b text-color__heading">Tuesday</td>
          <td class="px-4 py-3 border-b text-color__heading">9:00 AM - 7:00 PM</td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="px-4 py-3 border-b text-color__heading">Wednesday</td>
          <td class="px-4 py-3 border-b text-color__heading">9:00 AM - 7:00 PM</td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="px-4 py-3 border-b text-color__heading">Thursday</td>
          <td class="px-4 py-3 border-b text-color__heading">9:00 AM - 7:00 PM</td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="px-4 py-3 border-b text-color__heading">Friday</td>
          <td class="px-4 py-3 border-b text-color__heading">9:00 AM - 7:00 PM</td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="px-4 py-3 border-b text-color__heading">Saturday</td>
          <td class="px-4 py-3 border-b text-color__heading text-red-500 font-semibold">Closed</td>
        </tr>
        <tr class="hover:bg-gray-100">
          <td class="px-4 py-3 border-b text-color__heading">Sunday</td>
          <td class="px-4 py-3 border-b text-color__heading text-red-500 font-semibold">Closed</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

  )
}

export default Note