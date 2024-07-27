import React from 'react'
import HelmetTitle from "../components/HelmetTitle"
import {BreadCrumb} from "../components/BreadCrumb"
function CompareProducts() {
  return (
    <div>

      <HelmetTitle title="Contact" />
      <div className="bg-white lg:px-10 px-5 py-1 flex justify-between items-center">
        <BreadCrumb title="Contact" />
      </div>
    </div>
  )
}

export default CompareProducts