<template>
  <h1>{{texto}}</h1>
</template>

<script>


export default {
     name: 'Titulo',
     props: {   
    texto: String
}
}
</script>

<style scoped>
    h1 {color: peru}
</style>