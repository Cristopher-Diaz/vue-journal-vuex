<template>
  <div class="entry-container mb-3 pointer"
        @click="$router.push({ name: 'entry', params: { id:10 } })">
      <div class="entry-title d-flex">
          <span class="text-success fs-5 fw-bold">02</span>
          <span class="mx-1 fs-5">octubre</span>
          <span class="mx-1 fw-light">2021</span>
      </div>
      <div class="entry-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quaerat eos recusandae porro! Enim veritatis, dolorem accusamus quibusdam tempora ea eum laboriosam aspernatur dicta voluptate pariatur veniam voluptatem quidem molestias!
      </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: .3s all ease-in;
    &:hover{
        background: lighten($color: grey, $amount: 25);
    }
    .entry-description{
        font-size: 12px;
    }
}
</style>