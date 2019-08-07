<template>
    <h1>im home page</h1>
</template>

<script>
import {role} from '@/api/role'
import { constants } from 'crypto';
export default {
  name: 'ErrorTestA',
  mounted(){
    role()
    .then(data=> {
      return data.data
    })
    .then(data=> {
      console.log(data)
    })
  }
}
</script>