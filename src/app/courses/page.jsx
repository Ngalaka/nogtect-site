import React from 'react'
import Programs from '../components/Programs'
import Bootcamps from '../components/Bootcamps'
import { Ca } from 'zod/v4/locales'
import Catalogue from '../components/Catalogue'
import Searchcourse from '../components/Searchcourse'
import Begin from '../components/Begin'

export default function page() {
  return (
    <>
      <div>
        <Programs/>
        <Bootcamps/>
        <Catalogue/>
        <Searchcourse/>
        <Begin/>
      </div>
    </>
  )
}
