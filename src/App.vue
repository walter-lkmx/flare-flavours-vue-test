<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <simple-layout> 
    
    
    <Page>
      <Columns number="3"  number-m="3"  class="col1">
        <Block >
          <h1>Flare it's easy to use</h1>
          <p>Assembling a minimal</p>
          <a href="#">link</a>
          <img src="data:image/jpeg;base64,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" alt="">

        </Block>
        
        <Block>
          <h1>Flare it's easy to use</h1>
          <p>Assembling a minimal</p>
          <a href="#">link</a>
        </Block>
        
        <Block>
          <h1>Flare it's easy to use</h1>
          <p>Assembling a minimal</p>
          <a href="#">link</a>
        </Block>
      </Columns>

      <Columns number="2" number-s="1">    
        <Block class="block1">
          <h1>Test section</h1>
          <p>Assembling a minimal</p>
           <hello-world> </hello-world>
        </Block>
        
        <Block >
          <h1>Test section</h1>
          <p>Assembling a minimal</p>
           <hello-world> </hello-world>
        </Block>
       
      </Columns>

      <Columns number="2" class="col2">
        <Block>
          <!-- <h2>Flare it's easy to use</h2> -->
          <p>Assembling a minimal</p>
        </Block> 
        <Block>
          <!-- <h2>Flare it's easy to use</h2> -->
          <p>Assembling a minimal </p>
        </Block>
        <Block>
          <!-- <h2>Flare it's easy to use</h2> -->
          <p>Assembling a minimal </p>
        </Block>
        <Block>
          <!-- <h2>Flare it's easy to use</h2> -->
          <p>Assembling a minimal </p>
        </Block>
      </Columns>

      <Columns number="2" >
        <Block>
          <!-- <h2>Flare it's easy to use</h2> -->
          <p> 😆</p>
          <!-- <img class="img1" src="data:image/jpeg;base64,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" alt=""> -->

        </Block> 
        <Block>
          <!-- <h2>Flare it's easy to use</h2> -->
          <p>😆 </p>
        </Block>
        <Block>
          <!-- <h2>Flare it's easy to use</h2> -->
          <p>😆 </p>
        </Block>
        <Block>
          <!-- <h2>Flare it's easy to use</h2> -->
          <p>😆 </p>
        </Block> 
        <Block>
          <!-- <h2>Flare it's easy to use</h2> -->
          <p>😆 </p>
        </Block>
        <Block>
          <!-- <h2>Flare it's easy to use</h2> -->
          <p>😆 </p>
        </Block>
      </Columns>
    </Page>

    
      
      
  </simple-layout>
</template>

<style scoped lang="scss">
@import '@lkmx/flare/src/responsiveness/respond_to.scss';

.col1{
  padding: var(--f-gutter-xxl) var(--f-gutter-xxxl);
  background-color: lightblue;

  img{
    // object-fit: contain;
    width: 100%;
  }
}

.col2{
  // padding: 120px 220px;
  background-color: red;

  @include respond-to("<=s"){
    background-color: green;

    
    p{
      // font-size: 12px;
    }
  }

}

.block1{
  // padding: var(--f-gutter-l);
}

.img1{
  width: 100%;
}

</style>
